# 🚀 Deploy Controlled Dynamics Inc. to Heroku

## Quick Deploy (3 Steps)

### Step 1: Login to Heroku
Open your terminal and run:
```bash
cd /Users/pauldenman/controlleddynamicsinc.com
heroku login
```
This will open your browser to login. Press any key when prompted.

### Step 2: Run the Deployment Script
After logging in, run:
```bash
./deploy-heroku.sh
```

This script will automatically:
- ✅ Create Heroku app "controlleddynamicsinc"
- ✅ Configure environment variables
- ✅ Deploy your code
- ✅ Add custom domains
- ✅ Enable SSL
- ✅ Show you the DNS configuration needed

### Step 3: Configure DNS at Porkbun
After the script runs, it will show you the DNS targets. Then:

1. Go to https://porkbun.com
2. Login with your credentials
3. Click on "controlleddynamicsinc.com"
4. Go to "DNS Records"
5. Add the CNAME records shown by the script

## Manual Deployment (If Script Fails)

If you prefer to do it manually or the script fails:

```bash
cd /Users/pauldenman/controlleddynamicsinc.com

# 1. Login
heroku login

# 2. Create app
heroku create controlleddynamicsinc --region us

# 3. Add git remote
heroku git:remote -a controlleddynamicsinc

# 4. Set environment variables
heroku config:set NEXT_PUBLIC_SITE_URL=https://controlleddynamicsinc.com -a controlleddynamicsinc
heroku config:set NEXT_PUBLIC_SITE_NAME="Controlled Dynamics Inc." -a controlleddynamicsinc

# 5. Deploy
git push heroku main

# 6. Add domains
heroku domains:add controlleddynamicsinc.com -a controlleddynamicsinc
heroku domains:add www.controlleddynamicsinc.com -a controlleddynamicsinc

# 7. Enable SSL
heroku certs:auto:enable -a controlleddynamicsinc

# 8. Get DNS targets
heroku domains -a controlleddynamicsinc

# 9. Open your app
heroku open -a controlleddynamicsinc
```

## What Happens After Deployment

1. **Immediate Access**: Your site will be live at `https://controlleddynamicsinc.herokuapp.com`
2. **DNS Configuration**: You need to update Porkbun DNS (takes 5-30 minutes to propagate)
3. **Custom Domain**: Once DNS propagates, your site will be live at `https://controlleddynamicsinc.com`
4. **SSL Certificate**: Heroku automatically provisions SSL for your custom domain

## Troubleshooting

### If app name is taken
Change the app name in the script or commands:
```bash
heroku create controlleddynamicsinc-web --region us
```

### If Heroku login fails
Try clearing credentials:
```bash
heroku logout
heroku login
```

### To check app status
```bash
heroku apps:info -a controlleddynamicsinc
heroku logs --tail -a controlleddynamicsinc
```

### To redeploy
```bash
git push heroku main
```

## DNS Configuration Reference

### At Porkbun.com:

**For root domain (@):**
- Type: ALIAS or ANAME (if not available, use CNAME)
- Host: @ (or leave blank)
- Answer: [shown by heroku domains command]
- TTL: 600

**For www subdomain:**
- Type: CNAME
- Host: www
- Answer: [shown by heroku domains command]
- TTL: 600

## Current Status

- ✅ Code pushed to GitHub: https://github.com/watchdogpedro/controlleddynamicsinc.com
- ✅ Project built successfully
- ✅ Deployment script created
- ⏳ Waiting for Heroku deployment
- ⏳ DNS configuration pending

## Support

If you encounter issues:
1. Check Heroku logs: `heroku logs --tail -a controlleddynamicsinc`
2. Verify build: `npm run build` (should complete without errors)
3. Check Heroku status: https://status.heroku.com

---

**Ready to deploy?** Just run these 2 commands:
```bash
cd /Users/pauldenman/controlleddynamicsinc.com
heroku login
./deploy-heroku.sh
```
