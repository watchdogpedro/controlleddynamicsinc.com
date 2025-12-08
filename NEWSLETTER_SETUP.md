# Newsletter Setup Guide

Your website now has a newsletter signup system that forwards all signups to `info@anglelock.com`.

## Current Status

✅ Newsletter signup forms integrated on:
- Homepage
- Blog index page
- Individual blog articles
- Footer (site-wide)

✅ API endpoint created at `/api/newsletter/subscribe`

⚠️ **Email forwarding requires configuration** (see below)

---

## Setup Options

You have **two options** for email forwarding:

### Option 1: Resend (Recommended - Easiest)

**Why Resend?**
- Free tier: 3,000 emails/month
- Simple API, no SMTP configuration
- Reliable delivery
- Easy domain verification

**Setup Steps:**

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create free account
   - Verify your email

2. **Get API Key**
   - Go to API Keys section
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

3. **Verify Your Domain** (Important!)
   - Go to Domains section
   - Add `controlleddynamicsinc.com`
   - Add the DNS records they provide to your domain
   - Wait for verification (usually 5-10 minutes)

4. **Add API Key to Environment**
   - Open `.env.local` file (create if doesn't exist)
   - Add this line:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **Update the API route**
   - Open `app/api/newsletter/subscribe/route.ts`
   - Update the `from` email on line 55:
   ```typescript
   from: 'Newsletter <newsletter@controlleddynamicsinc.com>',
   ```
   (Use the domain you verified in Resend)

6. **Restart your development server**
   ```bash
   npm run dev
   ```

**That's it!** Newsletter signups will now forward to info@anglelock.com

---

### Option 2: Nodemailer (SMTP)

**Why Nodemailer?**
- Works with any email provider (Gmail, Outlook, etc.)
- No third-party service needed
- Direct SMTP connection

**Setup Steps:**

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Replace the API route**
   ```bash
   cd app/api/newsletter/subscribe
   rm route.ts
   mv route-nodemailer.ts.example route.ts
   ```

3. **Get SMTP Credentials**

   **For Gmail:**
   - Enable 2-Factor Authentication
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Copy the 16-character password

   **For Other Providers:**
   - Get SMTP settings from your email provider
   - Common settings:
     - Gmail: smtp.gmail.com:587
     - Outlook: smtp-mail.outlook.com:587
     - Yahoo: smtp.mail.yahoo.com:587

4. **Add to Environment Variables**
   - Open `.env.local`
   - Add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password-here
   ```

5. **Restart your development server**
   ```bash
   npm run dev
   ```

---

## Testing

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser to http://localhost:3000**

3. **Scroll to newsletter section and enter your email**

4. **Check info@anglelock.com for the notification email**

The email will include:
- Subscriber's email address
- Date/Time of signup
- Page they signed up from
- Browser/device info

---

## Production Deployment

### Environment Variables on Heroku

1. **Go to your Heroku app dashboard**

2. **Settings → Config Vars → Reveal Config Vars**

3. **Add the variable:**
   - **For Resend:**
     - Key: `RESEND_API_KEY`
     - Value: `re_your_api_key_here`

   - **For Nodemailer:**
     - Key: `SMTP_HOST`, Value: `smtp.gmail.com`
     - Key: `SMTP_PORT`, Value: `587`
     - Key: `SMTP_USER`, Value: `your-email@gmail.com`
     - Key: `SMTP_PASSWORD`, Value: `your-app-password`

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add newsletter email forwarding"
   git push heroku main
   ```

---

## Troubleshooting

### "Email notifications not configured"
- Make sure you added `RESEND_API_KEY` to `.env.local`
- Restart your dev server after adding environment variables

### "Failed to send notification email"
- **Resend:** Check if domain is verified
- **Nodemailer:** Verify SMTP credentials are correct
- Check console logs for detailed error messages

### Not receiving emails at info@anglelock.com
- Check spam folder
- Verify the email address in the API route (line 56)
- Test with a different email first

### "Invalid email address" error
- Component validates email format client-side
- Check browser console for JavaScript errors

---

## Managing Subscribers

Currently, signups are just forwarded to your email. To build an actual mailing list:

1. **Manual Tracking:**
   - Create a spreadsheet
   - Copy emails from forwarded messages
   - Use for email campaigns

2. **Upgrade to Newsletter Service** (Future):
   - Mailchimp, ConvertKit, or SendGrid
   - Automatic list management
   - Email campaigns and automation
   - I can help you integrate this later

---

## Next Steps

1. **Choose your email method** (Resend or Nodemailer)
2. **Follow setup steps above**
3. **Test on localhost**
4. **Deploy to production**
5. **Monitor info@anglelock.com for signups**

---

## Questions?

The newsletter system is fully functional and ready to capture leads. Once you configure the email forwarding (5 minutes with Resend), you'll start receiving signup notifications immediately.

Let me know which option you prefer and I can help with any configuration issues!
