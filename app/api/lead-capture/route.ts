import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { email, firstName, lastName, company, phone, application } = formData;

    // Validate required fields
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Get context info
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Direct';
    const timestamp = new Date().toISOString();

    // Log the lead data
    console.log('New lead capture:', {
      email,
      firstName,
      lastName,
      company,
      phone,
      application,
      timestamp,
      referer
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        {
          error: 'Email service not configured. Please contact support.',
          note: 'Admin: Set RESEND_API_KEY environment variable.'
        },
        { status: 500 }
      );
    }

    // Read PDF file and convert to base64
    const pdfPath = join(process.cwd(), 'public', 'downloads', 'Market_Opportunity_Report_2025.pdf');
    const pdfBuffer = readFileSync(pdfPath);
    const pdfBase64 = pdfBuffer.toString('base64');

    // Prepare personalized email to user
    const recipientName = firstName ? `${firstName}${lastName ? ' ' + lastName : ''}` : 'there';
    const userEmailSubject = 'Your Market Opportunity Report 2025 - Controlled Dynamics Inc.';
    const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
    .content { background: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none; }
    .cta-button { display: inline-block; background: #C9A227; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
    .highlights { background: #f4f6f8; padding: 20px; border-left: 4px solid #C9A227; margin: 20px 0; }
    .highlights h3 { margin-top: 0; color: #0A1628; }
    .highlights ul { margin: 10px 0; padding-left: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Market Opportunity Report is Ready!</h1>
    </div>
    <div class="content">
      <p>Hi ${recipientName},</p>

      <p>Thank you for your interest in the structural aluminum revolution. We're excited to share our comprehensive 2025 Market Opportunity Report with you.</p>

      <div class="highlights">
        <h3>Inside This Report:</h3>
        <ul>
          <li><strong>$47.4B Market Analysis</strong> - Total addressable market by 2030</li>
          <li><strong>5 Key Growth Drivers</strong> - Industry 4.0, CHIPS Act, Commercial Space, and more</li>
          <li><strong>Competitive Landscape</strong> - How AngleLock® stacks up against T-slot systems</li>
          <li><strong>Financial Projections</strong> - Conservative estimates with market data</li>
          <li><strong>Executive Insights</strong> - Strategic recommendations for decision-makers</li>
        </ul>
      </div>

      <p>The report is attached to this email as a PDF. You can also download it anytime from our website.</p>

      ${application ? `<p><strong>Regarding your application:</strong> "${application}"<br>Our team will review your use case and may reach out with specific insights relevant to your project.</p>` : ''}

      <p style="margin-top: 30px;">Want to discuss how AngleLock® technology can transform your next project?</p>

      <center>
        <a href="https://controlleddynamicsinc.com/contact" class="cta-button">Schedule a Consultation</a>
      </center>

      <p style="margin-top: 30px;">Best regards,<br>
      <strong>The Controlled Dynamics Team</strong></p>
    </div>
    <div class="footer">
      <p>Controlled Dynamics Inc.<br>
      1058 Overland Court, Grafton, WI 53024<br>
      <a href="https://controlleddynamicsinc.com">controlleddynamicsinc.com</a></p>

      <p style="margin-top: 15px; font-size: 11px;">
        You're receiving this email because you requested our Market Opportunity Report.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // Send report email to user
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Controlled Dynamics <noreply@controlleddynamicsinc.com>',
        to: [email],
        subject: userEmailSubject,
        html: userEmailHtml,
        attachments: [
          {
            filename: 'Market_Opportunity_Report_2025.pdf',
            content: pdfBase64,
          }
        ]
      })
    });

    if (!userEmailResponse.ok) {
      const error = await userEmailResponse.text();
      console.error('Resend API error (user email):', error);
      throw new Error('Failed to send report email to user');
    }

    // Send notification to internal team about new lead
    const internalEmailSubject = `New Lead: ${email}${company ? ` (${company})` : ''}`;
    const internalEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #f9fafb; padding: 20px; }
    .container { background: white; padding: 20px; border-radius: 8px; max-width: 600px; }
    .header { background: #0A1628; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
    .field { margin: 10px 0; padding: 10px; background: #f4f6f8; border-left: 3px solid #C9A227; }
    .label { font-weight: bold; color: #0A1628; }
    .value { color: #374151; margin-left: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">📥 New Market Report Lead</h2>
    </div>

    <div class="field">
      <span class="label">Email:</span>
      <span class="value">${email}</span>
    </div>

    ${firstName ? `<div class="field"><span class="label">Name:</span> <span class="value">${firstName} ${lastName || ''}</span></div>` : ''}
    ${company ? `<div class="field"><span class="label">Company:</span> <span class="value">${company}</span></div>` : ''}
    ${phone ? `<div class="field"><span class="label">Phone:</span> <span class="value">${phone}</span></div>` : ''}
    ${application ? `<div class="field"><span class="label">Application:</span> <span class="value">${application}</span></div>` : ''}

    <div class="field">
      <span class="label">Source:</span>
      <span class="value">${referer}</span>
    </div>

    <div class="field">
      <span class="label">Timestamp:</span>
      <span class="value">${timestamp}</span>
    </div>

    <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
      This lead was automatically captured from the Market Opportunity Report download form.
      ${application ? ' Follow up recommended due to specific application interest.' : ''}
    </p>
  </div>
</body>
</html>
    `;

    // Send internal notification
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Lead Capture <noreply@controlleddynamicsinc.com>',
        to: ['info@anglelock.com'],
        subject: internalEmailSubject,
        html: internalEmailHtml,
        reply_to: email
      })
    });

    // TODO: Add Google Sheets integration here
    // This is where you would append the lead data to a Google Sheet
    // Example implementation would use the Google Sheets API
    // For now, we're logging to console and sending emails

    console.log('Lead capture successful:', email);

    return NextResponse.json(
      {
        message: 'Report sent successfully! Check your email.',
        email: email
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to process request'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
