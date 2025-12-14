# Lead Capture System Setup Guide

This system captures leads in Google Sheets and sends emails via your Gmail account.

## What Happens When Someone Downloads the Report

1. **User fills form** → Clicks "Get Free Report"
2. **Data saved to Google Sheets** → All lead info stored in your spreadsheet
3. **User gets email** → PDF report attached, sent from your Gmail
4. **You get notified** → Email to watchdogpedro@gmail.com with lead details

---

## Setup Steps

### 1. Create Google Sheet for Leads

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Market Report Leads" (or whatever you prefer)
4. Rename the first sheet tab to **"Leads"** (important!)
5. Add headers in Row 1:
   ```
   A1: Date
   B1: Email
   C1: First Name
   D1: Last Name
   E1: Company
   F1: Phone
   G1: Application
   H1: Source Page
   I1: User Agent
   ```
6. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/1abc123xyz789/edit
                                          ^^^^^^^^^^^^
                                          This is the ID
   ```

### 2. Create Google Service Account

1. Go to https://console.cloud.google.com
2. Create a new project (or select existing)
3. Enable the **Google Sheets API**:
   - Click "Enable APIs and Services"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create Service Account:
   - Go to "Credentials" → "Create Credentials" → "Service Account"
   - Name: "lead-capture-bot"
   - Click "Create and Continue"
   - Skip roles (click "Continue")
   - Click "Done"

5. Create JSON Key:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON"
   - Save the downloaded JSON file (you'll need this!)

6. Share your Google Sheet with the service account:
   - Open the JSON file and copy the "client_email" value (looks like: lead-capture-bot@project-name.iam.gserviceaccount.com)
   - Go to your Google Sheet
   - Click "Share"
   - Paste the service account email
   - Give it "Editor" access
   - Uncheck "Notify people"
   - Click "Share"

### 3. Set Up Gmail App Password

Your Gmail account needs an "App Password" for the system to send emails.

1. Go to https://myaccount.google.com/security
2. Make sure **2-Step Verification is ON** (required for app passwords)
3. Search for "App passwords" or go to https://myaccount.google.com/apppasswords
4. Create a new app password:
   - App name: "Lead Capture System"
   - Click "Create"
5. Copy the 16-character password (you'll need this!)

### 4. Configure Heroku Environment Variables

Now we need to add 3 environment variables to Heroku:

```bash
# 1. Google Sheets ID (from step 1)
heroku config:set GOOGLE_SHEETS_ID="1abc123xyz789"

# 2. Google Sheets Credentials (the entire JSON file from step 2)
# Important: This must be the ENTIRE JSON file as a single line
heroku config:set GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"your-project",...}'

# 3. Gmail User (your email)
heroku config:set GMAIL_USER="watchdogpedro@gmail.com"

# 4. Gmail App Password (from step 3)
heroku config:set GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"
```

**IMPORTANT for GOOGLE_SHEETS_CREDENTIALS:**
- Open the downloaded JSON file in a text editor
- Copy the ENTIRE contents (all the curly braces and everything)
- Paste it as a single line in the command
- Use single quotes around it

Example:
```bash
heroku config:set GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"lead-capture-123456","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nMIIE...","client_email":"lead-capture-bot@lead-capture-123456.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/lead-capture-bot%40lead-capture-123456.iam.gserviceaccount.com"}'
```

### 5. Verify Configuration

After setting all environment variables, restart your Heroku app:

```bash
heroku restart
```

Check that all variables are set:

```bash
heroku config
```

You should see:
- GOOGLE_SHEETS_ID
- GOOGLE_SHEETS_CREDENTIALS
- GMAIL_USER
- GMAIL_APP_PASSWORD

---

## Testing

1. Go to https://controlleddynamicsinc.com
2. Click "Get Free Report"
3. Fill out the form with your email
4. Submit

**You should receive:**
- Email at watchdogpedro@gmail.com with lead notification
- Lead data in your Google Sheet
- (If you used a real email) PDF report at that email

---

## Troubleshooting

**Emails not sending?**
- Check that 2-Step Verification is enabled on your Gmail
- Make sure you used an App Password, not your regular password
- Check Heroku logs: `heroku logs --tail`

**Google Sheets not updating?**
- Verify the sheet name is exactly "Leads" (case-sensitive)
- Check that you shared the sheet with the service account email
- Verify the service account has "Editor" permissions

**General errors?**
- Check Heroku logs: `heroku logs --tail`
- Make sure all 4 environment variables are set correctly

---

## What Gets Stored in Google Sheets

Each row will contain:
- Date/Time (Central Time)
- Email address
- First name (if provided)
- Last name (if provided)
- Company (if provided)
- Phone (if provided)
- Application description (if provided)
- Source page URL (which page they were on)
- User agent (browser info)

---

## Email Details

**To the Lead:**
- Subject: "Your Market Opportunity Report 2025 - Controlled Dynamics Inc."
- From: "Controlled Dynamics Inc." <watchdogpedro@gmail.com>
- Includes: PDF attachment + formatted HTML email with report highlights

**To You (watchdogpedro@gmail.com):**
- Subject: "🔔 New Lead: [email] ([company])"
- From: "Lead Capture Bot" <watchdogpedro@gmail.com>
- Reply-To: [lead's email] (so you can just hit reply to respond)
- Includes: All form data in formatted HTML

---

## Next Steps After Setup

Once configured, the system runs automatically. Every time someone downloads the report:
1. Their info is logged in Google Sheets (you can view anytime)
2. They get the PDF via email
3. You get notified at watchdogpedro@gmail.com

You can then follow up with leads directly from the notification emails (just hit reply!).
