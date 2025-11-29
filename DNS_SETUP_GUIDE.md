# DNS Configuration Guide for Controlled Dynamics Inc.

## Overview
This guide shows you exactly how to configure DNS at Porkbun.com to point your domain to Heroku.

## Prerequisites
- ✅ Heroku app deployed (run `./deploy-heroku.sh` first)
- ✅ Domain added to Heroku
- ✅ DNS targets obtained from Heroku

## Step-by-Step DNS Configuration

### Step 1: Get Your Heroku DNS Targets

After deploying to Heroku, run this command to get your DNS targets:
```bash
heroku domains -a controlleddynamicsinc
```

You'll see output like:
```
=== controlleddynamicsinc Heroku Domain
controlleddynamicsinc.herokuapp.com

=== controlleddynamicsinc Custom Domains
Domain Name                      DNS Record Type  DNS Target
───────────────────────────────  ───────────────  ──────────────────────────────
controlleddynamicsinc.com        ALIAS or ANAME   example-app-12345.herokudns.com
www.controlleddynamicsinc.com    CNAME            example-app-12345.herokudns.com
```

**Note the DNS Target** - you'll need this for the next steps.

### Step 2: Login to Porkbun

1. Go to https://porkbun.com
2. Click "Login" in the top right
3. Enter your credentials

### Step 3: Access DNS Management

1. After logging in, you'll see your domain list
2. Find "controlleddynamicsinc.com"
3. Click on the domain name
4. Click "DNS" or "DNS Records" tab

### Step 4: Configure Root Domain (@)

Add a new record for the root domain:

**Record 1: Root Domain**
```
Type:    ALIAS (or ANAME if available, CNAME as last resort)
Host:    @ (or leave blank, or type "controlleddynamicsinc.com")
Answer:  [paste the DNS Target from Heroku domains command]
TTL:     600 (or leave as default)
```

Example:
```
Type:    ALIAS
Host:    @
Answer:  example-app-12345.herokudns.com
TTL:     600
```

Click "Add" or "Save"

### Step 5: Configure WWW Subdomain

Add a new record for www subdomain:

**Record 2: WWW Subdomain**
```
Type:    CNAME
Host:    www
Answer:  [paste the DNS Target from Heroku domains command]
TTL:     600 (or leave as default)
```

Example:
```
Type:    CNAME
Host:    www
Answer:  example-app-12345.herokudns.com
TTL:     600
```

Click "Add" or "Save"

### Step 6: Remove Conflicting Records (If Needed)

If you have existing A or CNAME records for @ or www, you may need to:
1. Delete the old records
2. Add the new Heroku records

**Look for and delete:**
- Old A records pointing to @ or www
- Old CNAME records for @ or www
- Any conflicting records

### Step 7: Verify Configuration

After adding the records, your DNS configuration should look like:

```
Type     Host    Answer/Value                         TTL
────────────────────────────────────────────────────────────
ALIAS    @       example-app-12345.herokudns.com     600
CNAME    www     example-app-12345.herokudns.com     600
NS       -       curitiba.ns.porkbun.com             -
NS       -       fortaleza.ns.porkbun.com            -
NS       -       maceio.ns.porkbun.com               -
NS       -       salvador.ns.porkbun.com             -
```

## DNS Propagation

After configuring DNS:

### Timeline
- **Immediate**: Changes saved in Porkbun
- **5-15 minutes**: DNS starts propagating
- **15-30 minutes**: Most locations updated
- **Up to 48 hours**: Complete global propagation (rare)

### Check Propagation Status

Use these tools to check if DNS has propagated:

**Command line:**
```bash
# Check root domain
dig controlleddynamicsinc.com

# Check www subdomain
dig www.controlleddynamicsinc.com

# Check specific nameserver
dig @8.8.8.8 controlleddynamicsinc.com
```

**Online tools:**
- https://www.whatsmydns.net/#CNAME/controlleddynamicsinc.com
- https://dnschecker.org/#CNAME/controlleddynamicsinc.com

### Expected Results

When DNS is fully propagated, you should see:
```bash
$ dig controlleddynamicsinc.com
...
controlleddynamicsinc.com.  600  IN  ALIAS  example-app-12345.herokudns.com

$ dig www.controlleddynamicsinc.com
...
www.controlleddynamicsinc.com.  600  IN  CNAME  example-app-12345.herokudns.com
```

## SSL Certificate

Heroku automatically provisions SSL certificates for your custom domain:

### Automatic SSL (Heroku ACM)
- Enabled automatically when you add domain
- Takes 5-30 minutes to provision
- Renews automatically

### Check SSL Status
```bash
heroku certs:auto -a controlleddynamicsinc
```

### Force HTTPS
Once SSL is active, your site automatically redirects HTTP to HTTPS.

## Testing Your Site

After DNS propagates and SSL is active:

1. **Test HTTP (should redirect to HTTPS):**
   ```
   http://controlleddynamicsinc.com
   http://www.controlleddynamicsinc.com
   ```

2. **Test HTTPS (should work):**
   ```
   https://controlleddynamicsinc.com
   https://www.controlleddynamicsinc.com
   ```

3. **Verify SSL Certificate:**
   - Click the padlock icon in browser
   - Should show "Secure" or valid certificate
   - Issued to: controlleddynamicsinc.com

## Troubleshooting

### DNS Not Propagating
```bash
# Clear local DNS cache
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Check nameservers
dig NS controlleddynamicsinc.com
```

### Wrong IP Address Showing
- Wait longer (propagation can take time)
- Verify records are correct in Porkbun
- Check you deleted old A records

### SSL Certificate Not Working
```bash
# Check cert status
heroku certs:auto -a controlleddynamicsinc

# If needed, refresh cert
heroku certs:auto:refresh -a controlleddynamicsinc
```

### Site Not Loading
1. Check Heroku app is running: `heroku ps -a controlleddynamicsinc`
2. Check logs: `heroku logs --tail -a controlleddynamicsinc`
3. Verify domain added: `heroku domains -a controlleddynamicsinc`

## Current Nameservers (Already Configured)

Your domain is already using Porkbun nameservers:
- curitiba.ns.porkbun.com
- fortaleza.ns.porkbun.com
- maceio.ns.porkbun.com
- salvador.ns.porkbun.com

**Do NOT change these** - they're correct and working.

## Quick Reference Commands

```bash
# Get DNS targets from Heroku
heroku domains -a controlleddynamicsinc

# Check DNS propagation
dig controlleddynamicsinc.com
dig www.controlleddynamicsinc.com

# View SSL certificate status
heroku certs:auto -a controlleddynamicsinc

# Open your site
heroku open -a controlleddynamicsinc

# View app logs
heroku logs --tail -a controlleddynamicsinc
```

## Summary Checklist

- [ ] Deploy app to Heroku (`./deploy-heroku.sh`)
- [ ] Get DNS targets (`heroku domains -a controlleddynamicsinc`)
- [ ] Login to Porkbun.com
- [ ] Add ALIAS record for @ pointing to Heroku DNS target
- [ ] Add CNAME record for www pointing to Heroku DNS target
- [ ] Delete any conflicting old records
- [ ] Wait 15-30 minutes for DNS propagation
- [ ] Test http://controlleddynamicsinc.com (should redirect to https)
- [ ] Test https://controlleddynamicsinc.com (should work)
- [ ] Verify SSL certificate is valid

---

**Need help?** Run `heroku help` or check https://devcenter.heroku.com
