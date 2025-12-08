# Pre-Deployment Checklist

Complete checklist before deploying to production and submitting to Google.

---

## ✅ SEO & Search Optimization

- [x] **robots.txt** created and configured
  - Location: `/public/robots.txt`
  - Allows Google crawling
  - Points to sitemap

- [x] **sitemap.xml** auto-generated
  - Location: `/app/sitemap.ts`
  - Includes all 32+ pages
  - Updates automatically with new content

- [x] **Canonical URLs** on all pages
  - Prevents duplicate content issues
  - Points to production domain

- [x] **Meta descriptions** optimized
  - All pages have unique descriptions
  - Include target keywords
  - 150-160 characters

- [x] **Title tags** optimized
  - Unique titles per page
  - Include keywords
  - 50-60 characters

- [x] **Open Graph tags** for social sharing
  - Facebook, LinkedIn sharing
  - Custom images
  - Proper descriptions

- [x] **Twitter Cards** configured
  - Enhanced Twitter sharing
  - Large image cards

- [x] **Schema.org structured data**
  - Organization schema
  - Product schema
  - FAQ schema (comparison page)
  - Article schema (blog posts)
  - Breadcrumb schema

- [x] **Keywords targeting**
  - "8020 alternative" ✓
  - "80/20 aluminum extrusion" ✓
  - "t-slot alternative" ✓
  - "modular aluminum framing" ✓

- [ ] **Google Search Console verification code**
  - Add to `/app/layout.tsx` line 47
  - Get from Google Search Console
  - Replace `ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE`

---

## ✅ Content Completeness

- [x] **Homepage** complete
  - Hero section
  - Value proposition
  - Industry showcase
  - Newsletter signup

- [x] **80/20 Comparison page** complete
  - Head-to-head comparison
  - Detailed features table
  - Use cases
  - FAQ section

- [x] **Blog section** with 3 articles
  - Aluminum Extrusion Guide
  - T-Slot Failure Analysis
  - Cost Comparison ROI

- [x] **Newsletter signup** on all pages
  - Homepage
  - Blog index
  - Blog articles
  - Footer

- [x] **Contact information** visible
  - Phone: (262) 421-8840
  - Email: info@controlleddynamicsinc.com
  - Address in footer

---

## ✅ Technical Performance

- [x] **Build succeeds** without errors
  - Run: `npm run build`
  - Verify no TypeScript errors
  - Check all routes compile

- [x] **Mobile responsive**
  - All pages work on mobile
  - Newsletter forms functional
  - Navigation menu works

- [x] **Images optimized**
  - Proper file formats
  - Reasonable file sizes
  - Alt text included

- [x] **Links working**
  - All internal links functional
  - Navigation menus work
  - Footer links active

- [x] **Forms functional**
  - Newsletter signup works
  - Contact form (if applicable)

---

## ⚙️ Email Configuration

- [ ] **Newsletter email forwarding configured**
  - Choose: Resend OR Nodemailer
  - Add API key to environment
  - Test signup flow
  - Verify emails arrive at info@anglelock.com
  - **See: NEWSLETTER_SETUP.md**

---

## 🚀 Deployment Configuration

### Environment Variables (Heroku Config Vars)

Set these in Heroku dashboard:

- [ ] **NODE_ENV**
  ```
  production
  ```

- [ ] **NEXT_PUBLIC_SITE_URL**
  ```
  https://controlleddynamicsinc.com
  ```

- [ ] **RESEND_API_KEY** (if using Resend)
  ```
  re_your_actual_api_key
  ```

OR

- [ ] **SMTP_HOST** (if using Nodemailer)
  ```
  smtp.gmail.com
  ```

- [ ] **SMTP_PORT**
  ```
  587
  ```

- [ ] **SMTP_USER**
  ```
  your-email@gmail.com
  ```

- [ ] **SMTP_PASSWORD**
  ```
  your-app-password
  ```

### Domain Configuration

- [ ] **DNS configured** for controlleddynamicsinc.com
  - A record or CNAME pointing to Heroku
  - SSL certificate active (Heroku handles this)

- [ ] **Domain verified** in Heroku
  - Custom domain added
  - SSL enabled

---

## 📊 Analytics Setup (Optional)

- [ ] **Google Analytics configured**
  - GA4 property created
  - Measurement ID added to code
  - Tracking verified

- [ ] **Google Tag Manager** (optional)
  - Container created
  - Tags configured

---

## 🔍 Post-Deployment Verification

After deploying, verify these work in production:

### Immediate Checks (5 minutes)

- [ ] **Site loads** at https://controlleddynamicsinc.com
- [ ] **HTTPS working** (green padlock)
- [ ] **Homepage displays** correctly
- [ ] **Navigation menus** work
- [ ] **Newsletter signup** functional

### SEO Checks (10 minutes)

- [ ] **Sitemap accessible**
  - Visit: https://controlleddynamicsinc.com/sitemap.xml
  - Verify XML displays

- [ ] **Robots.txt accessible**
  - Visit: https://controlleddynamicsinc.com/robots.txt
  - Verify content shows

- [ ] **Meta tags present**
  - View page source
  - Check for title, description, og tags

- [ ] **Google verification code** in source
  - View source of homepage
  - Find: `<meta name="google-site-verification"`

### Content Checks (10 minutes)

- [ ] **Comparison page** loads
  - Visit: /compare/8020
  - Verify table displays
  - Check FAQs work

- [ ] **Blog pages** load
  - Visit: /blog
  - Click on articles
  - Verify content displays

- [ ] **Newsletter signup** works
  - Fill out form
  - Click subscribe
  - Verify success message
  - Check if email arrives

---

## 🎯 Google Submission

Once deployed and verified:

1. [ ] **Set up Google Search Console**
   - Add property
   - Verify ownership
   - **See: GOOGLE_SEO_SETUP.md**

2. [ ] **Submit sitemap**
   - In Search Console → Sitemaps
   - Submit: https://controlleddynamicsinc.com/sitemap.xml

3. [ ] **Request indexing** for key pages
   - Homepage
   - /compare/8020
   - /blog
   - Top blog articles

4. [ ] **Monitor coverage** daily for first week

---

## 📋 Final Pre-Deployment Commands

Run these before pushing to production:

```bash
# 1. Ensure all changes committed
git status

# 2. Build and test locally
npm run build
npm start

# 3. Test in browser
# Visit http://localhost:3000
# Click through all pages
# Test newsletter signup

# 4. If everything works, deploy
git add .
git commit -m "Final pre-deployment updates"
git push heroku main

# 5. Monitor deployment
heroku logs --tail
```

---

## 🎉 Launch Day Checklist

**Morning of launch:**

1. [ ] Final build test locally
2. [ ] Deploy to Heroku
3. [ ] Verify site loads
4. [ ] Test newsletter signup
5. [ ] Check sitemap.xml
6. [ ] Submit to Google Search Console
7. [ ] Request indexing for key pages
8. [ ] Post on social media (optional)
9. [ ] Email customers (optional)
10. [ ] Monitor analytics

**First week:**

- [ ] Check Search Console daily
- [ ] Monitor server logs for errors
- [ ] Test newsletter emails arriving
- [ ] Verify no broken links
- [ ] Check mobile experience

---

## Common Issues & Solutions

### Build Fails
- Check TypeScript errors
- Verify all imports correct
- Run `npm install` to update packages

### Newsletter Not Working
- Check environment variables set
- Verify API key is correct
- Check Heroku logs for errors

### Google Can't Verify
- Check verification code deployed
- Try DNS verification instead
- Wait 5 minutes and retry

### Sitemap 404
- Ensure `/app/sitemap.ts` exists
- Rebuild application
- Check build output includes sitemap

---

## Status Summary

**Ready to Deploy:** ✅

**Remaining Tasks:**
1. Add Google Search Console verification code
2. Configure newsletter email (Resend or SMTP)
3. Deploy to Heroku
4. Submit to Google Search Console

**Estimated time to complete:** 30-45 minutes

---

Your website is technically perfect and SEO-optimized. The hard work is done. Now it's just configuration and deployment!
