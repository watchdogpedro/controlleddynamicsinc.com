import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get user info for context
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Direct';
    const timestamp = new Date().toISOString();

    // Prepare email content
    const emailSubject = `New Newsletter Signup: ${email}`;
    const emailBody = `
New Newsletter Signup
=====================

Email: ${email}
Date/Time: ${timestamp}
Source Page: ${referer}
User Agent: ${userAgent}

---
This is an automated notification from controlleddynamicsinc.com newsletter signup form.
    `.trim();

    // Send notification email to info@anglelock.com
    // Using Resend API (you'll need to install: npm install resend)
    // Alternative: Use SendGrid, Postmark, or any email service

    // For now, we'll use a fetch to a service like Resend
    // You'll need to set RESEND_API_KEY in your .env.local file
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      // Log the signup locally for now
      console.log('Newsletter signup:', { email, timestamp, referer });

      return NextResponse.json(
        {
          message: 'Subscription received',
          note: 'Email notifications not configured. Please set RESEND_API_KEY environment variable.'
        },
        { status: 200 }
      );
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Newsletter <noreply@controlleddynamicsinc.com>', // You'll need to verify this domain in Resend
        to: ['info@anglelock.com'],
        subject: emailSubject,
        text: emailBody,
        reply_to: email
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      throw new Error('Failed to send notification email');
    }

    console.log('Newsletter signup forwarded:', email);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
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
