import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  if (!credentials) {
    throw new Error('GOOGLE_SHEETS_CREDENTIALS not configured');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

// Initialize Gmail SMTP client
function getEmailTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail credentials not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

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
    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'short',
      timeStyle: 'short'
    });

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

    // 1. SAVE TO GOOGLE SHEETS
    try {
      const sheets = await getGoogleSheetsClient();
      const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

      if (spreadsheetId) {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A:I', // Sheet tab name
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [
                formattedDate,
                email,
                firstName || '',
                lastName || '',
                company || '',
                phone || '',
                application || '',
                referer,
                userAgent
              ]
            ],
          },
        });
        console.log('Lead saved to Google Sheets');
      }
    } catch (sheetError) {
      console.error('Google Sheets error (continuing):', sheetError);
      // Don't fail the request if Sheets fails - still send emails
    }

    // 2. SEND EMAILS
    const transporter = getEmailTransporter();

    // Read PDF file
    const pdfPath = join(process.cwd(), 'public', 'downloads', 'Market_Opportunity_Report_2025.pdf');
    const pdfBuffer = readFileSync(pdfPath);

    const recipientName = firstName ? `${firstName}${lastName ? ' ' + lastName : ''}` : 'there';

    // A. Send PDF to the user
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

    await transporter.sendMail({
      from: `"Controlled Dynamics Inc." <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Market Opportunity Report 2025 - Controlled Dynamics Inc.',
      html: userEmailHtml,
      attachments: [
        {
          filename: 'Market_Opportunity_Report_2025.pdf',
          content: pdfBuffer,
        }
      ]
    });

    console.log('Report sent to user:', email);

    // B. Send notification to you (watchdogpedro@gmail.com)
    const notificationEmailHtml = `
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
      <span class="value">${formattedDate}</span>
    </div>

    <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
      This lead was automatically captured from the Market Opportunity Report download form.
      ${application ? ' Follow up recommended due to specific application interest.' : ''}
    </p>
  </div>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"Lead Capture Bot" <${process.env.GMAIL_USER}>`,
      to: 'watchdogpedro@gmail.com',
      replyTo: email,
      subject: `🔔 New Lead: ${email}${company ? ` (${company})` : ''}`,
      html: notificationEmailHtml,
    });

    console.log('Notification sent to watchdogpedro@gmail.com');

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
        error: error instanceof Error ? error.message : 'Failed to process request. Please try again or contact us directly.'
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
