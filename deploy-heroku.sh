#!/bin/bash

# Controlled Dynamics Inc. - Heroku Deployment Script
# This script automates the Heroku deployment process

set -e  # Exit on error

echo "🚀 Controlled Dynamics Inc. - Heroku Deployment"
echo "================================================"
echo ""

# Check if logged into Heroku
echo "📋 Checking Heroku authentication..."
if ! heroku auth:whoami &> /dev/null; then
    echo "❌ Not logged into Heroku. Please login first:"
    echo "   heroku login"
    exit 1
fi

HEROKU_USER=$(heroku auth:whoami)
echo "✅ Logged in as: $HEROKU_USER"
echo ""

# App name
APP_NAME="controlleddynamicsinc"
echo "🏗️  Creating Heroku app: $APP_NAME"

# Try to create the app, or use existing if already created
if heroku apps:info -a $APP_NAME &> /dev/null; then
    echo "ℹ️  App '$APP_NAME' already exists, using existing app"
else
    heroku create $APP_NAME --region us
    echo "✅ App created successfully"
fi
echo ""

# Add heroku remote if not already added
echo "🔗 Configuring git remote..."
if git remote | grep -q "^heroku$"; then
    echo "ℹ️  Heroku remote already exists"
else
    heroku git:remote -a $APP_NAME
    echo "✅ Heroku remote added"
fi
echo ""

# Set environment variables
echo "⚙️  Setting environment variables..."
heroku config:set \
    NEXT_PUBLIC_SITE_URL=https://controlleddynamicsinc.com \
    NEXT_PUBLIC_SITE_NAME="Controlled Dynamics Inc." \
    NODE_ENV=production \
    -a $APP_NAME
echo "✅ Environment variables set"
echo ""

# Deploy to Heroku
echo "📦 Deploying to Heroku..."
git push heroku main
echo "✅ Deployment complete"
echo ""

# Add custom domains
echo "🌐 Adding custom domains..."
if heroku domains -a $APP_NAME | grep -q "controlleddynamicsinc.com"; then
    echo "ℹ️  Root domain already added"
else
    heroku domains:add controlleddynamicsinc.com -a $APP_NAME
    echo "✅ Added controlleddynamicsinc.com"
fi

if heroku domains -a $APP_NAME | grep -q "www.controlleddynamicsinc.com"; then
    echo "ℹ️  WWW domain already added"
else
    heroku domains:add www.controlleddynamicsinc.com -a $APP_NAME
    echo "✅ Added www.controlleddynamicsinc.com"
fi
echo ""

# Enable SSL
echo "🔒 Enabling SSL..."
heroku certs:auto:enable -a $APP_NAME 2>/dev/null || echo "ℹ️  SSL auto-certs already enabled or not available"
echo ""

# Get DNS targets
echo "📋 DNS Configuration Required:"
echo "================================"
heroku domains -a $APP_NAME
echo ""
echo "📝 Action Required: Update DNS at Porkbun.com"
echo "   1. Login to https://porkbun.com"
echo "   2. Go to DNS settings for controlleddynamicsinc.com"
echo "   3. Add the CNAME records shown above"
echo ""

# Show app info
echo "ℹ️  App Information:"
echo "================================"
heroku apps:info -a $APP_NAME
echo ""

# Open the app
echo "🌍 Opening app in browser..."
heroku open -a $APP_NAME

echo ""
echo "✨ Deployment Complete!"
echo "================================"
echo "Your app is now live at:"
echo "  Heroku URL: https://$APP_NAME.herokuapp.com"
echo "  Custom Domain: https://controlleddynamicsinc.com (after DNS propagation)"
echo ""
echo "Next steps:"
echo "  1. Update DNS records at Porkbun.com (see above)"
echo "  2. Wait for DNS propagation (5-30 minutes)"
echo "  3. Test your custom domain"
echo ""
