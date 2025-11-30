# Deployment Guide - Controlled Dynamics Inc.

## Prerequisites

- Node.js 18.x installed
- Heroku CLI installed
- Git initialized in project
- Heroku account created

## Heroku Deployment Steps

### 1. Login to Heroku

```bash
heroku login
```

### 2. Create Heroku App

```bash
# Create app with desired name
heroku create controlleddynamicsinc

# If name is taken, try alternatives:
# heroku create controlled-dynamics-inc
# heroku create cdi-structures
```

### 3. Verify Heroku Configuration

The project is already configured for Heroku:

**Files in place:**
- ✅ `Procfile` - Defines web process
- ✅ `package.json` - Contains engines and start script
- ✅ `next.config.ts` - Configured for standalone output

**Procfile content:**
```
web: npm run start
```

**package.json scripts:**
```json
{
  "scripts": {
    "start": "next start -p $PORT"
  },
  "engines": {
    "node": "18.x"
  }
}
```

### 4. Deploy to Heroku

```bash
# Add all files to git
git add .

# Commit changes
git commit -m "Initial deployment: Complete Controlled Dynamics Inc. website"

# Push to Heroku
git push heroku main

# If you're on a different branch:
# git push heroku your-branch-name:main
```

### 5. Open Your Deployed Site

```bash
heroku open
```

### 6. View Logs (if needed)

```bash
# View real-time logs
heroku logs --tail

# View recent logs
heroku logs --num 100
```

## Custom Domain Setup

### 1. Add Domain to Heroku

```bash
# Add www subdomain
heroku domains:add www.controlleddynamicsinc.com

# Add root domain
heroku domains:add controlleddynamicsinc.com

# View domains and DNS targets
heroku domains
```

### 2. Configure DNS at Your Registrar

You'll receive a DNS target from Heroku (e.g., `something-12345.herokudns.com`)

**Add these records at your domain registrar:**

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: [DNS target from heroku domains]
- TTL: 3600

**For root domain:**
- Type: ALIAS or ANAME (if supported) or CNAME
- Name: @ or blank
- Value: [DNS target from heroku domains]
- TTL: 3600

**If your registrar doesn't support ALIAS/ANAME:**
- Set up a redirect from root to www
- Or use a DNS service like Cloudflare

### 3. Enable SSL (Automatic with Paid Dynos)

Heroku provides free SSL certificates with paid dynos.

```bash
# Check SSL status
heroku certs:auto

# SSL should be automatically provisioned within minutes
```

## Environment Variables (Future Use)

If you need to add environment variables later:

```bash
# Example: Add analytics ID
heroku config:set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Example: Add form service
heroku config:set FORM_SERVICE_KEY=your-key-here

# View all config vars
heroku config

# Remove a config var
heroku config:unset VARIABLE_NAME
```

## Scaling & Performance

### Check Dyno Status

```bash
heroku ps
```

### Resize Dyno (if needed)

```bash
# Upgrade to better performance
heroku ps:resize web=standard-1x

# Or professional
heroku ps:resize web=performance-m
```

### Restart Application

```bash
heroku restart
```

## Monitoring

### Check Application Status

```bash
# View running processes
heroku ps

# View recent events
heroku releases

# View build info
heroku builds:info
```

### Performance Monitoring

Heroku provides metrics for paid dynos:
- Response time
- Throughput
- Memory usage
- Error rates

Access at: `https://dashboard.heroku.com/apps/your-app-name/metrics`

## Troubleshooting

### Build Fails

```bash
# Check build logs
heroku logs --tail

# Common issues:
# 1. Node version mismatch - Check engines in package.json
# 2. Missing dependencies - Run npm install locally
# 3. TypeScript errors - Run npm run build locally first
```

### Application Crashes

```bash
# Check logs
heroku logs --tail --num 500

# Check dyno status
heroku ps

# Restart app
heroku restart
```

### Port Issues

Make sure start script uses `$PORT`:
```json
"start": "next start -p $PORT"
```

### Memory Issues

```bash
# Check memory usage
heroku ps

# Upgrade dyno if needed
heroku ps:resize web=standard-2x
```

## CI/CD Setup (Optional)

### GitHub Integration

1. Go to Heroku Dashboard
2. Select your app
3. Go to "Deploy" tab
4. Connect to GitHub repository
5. Enable automatic deploys from main branch
6. Enable "Wait for CI to pass" if you have tests

### Manual Deployment from GitHub

```bash
# After pushing to GitHub
git push origin main

# Then deploy to Heroku
git push heroku main
```

## Backup & Maintenance

### Database Backups (if using Heroku Postgres)

```bash
# Create backup
heroku pg:backups:capture

# Download backup
heroku pg:backups:download
```

### Update Dependencies

```bash
# Locally
npm update

# Test
npm run build

# Deploy
git add package.json package-lock.json
git commit -m "Update dependencies"
git push heroku main
```

## Performance Optimization Checklist

- [x] Standalone output enabled
- [x] Image optimization configured
- [ ] Add CDN for static assets (optional)
- [ ] Enable Redis for caching (optional)
- [ ] Set up monitoring (Papertrail, New Relic, etc.)
- [ ] Configure error tracking (Sentry, Rollbar, etc.)

## Cost Estimates

**Free Tier:**
- 550-1000 dyno hours/month
- No SSL certificate
- App sleeps after 30 min inactivity

**Hobby ($7/month):**
- Never sleeps
- Free SSL certificate
- 1GB RAM

**Standard ($25-50/month):**
- More RAM (1-2.5 GB)
- Better performance
- Metrics and monitoring

**Professional ($250+/month):**
- High performance
- Dedicated infrastructure
- Advanced monitoring

## Post-Deployment Checklist

- [ ] Verify site loads at herokuapp.com URL
- [ ] Test all navigation links
- [ ] Check responsive design on mobile
- [ ] Verify contact form (when backend added)
- [ ] Test all dropdown menus
- [ ] Check page load times
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Configure custom domain
- [ ] Enable SSL certificate
- [ ] Set up monitoring/alerts

## Support & Resources

**Heroku Documentation:**
- https://devcenter.heroku.com/categories/nodejs-support

**Next.js Deployment:**
- https://nextjs.org/docs/deployment

**Heroku CLI Reference:**
- https://devcenter.heroku.com/articles/heroku-cli

---

**Deployment Date:** November 29, 2025  
**Deployed By:** Paul Denman  
**Platform:** Heroku
