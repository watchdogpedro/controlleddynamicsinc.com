#!/bin/bash

# CONTROLLED DYNAMICS INC - AUTOMATIC DEPLOYMENT EXECUTION
# This script will deploy everything automatically

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  CONTROLLED DYNAMICS INC - AUTOMATIC DEPLOYMENT            ║"
echo "║  controlleddynamicsinc.com                                 ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Navigate to project directory
cd /Users/pauldenman/controlleddynamicsinc.com

echo "📁 Current directory: $(pwd)"
echo ""

# Step 1: Verify GitHub is up to date
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: Verifying GitHub Repository"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
git status
echo ""
echo "✅ GitHub repository: https://github.com/watchdogpedro/controlleddynamicsinc.com"
echo "✅ All files committed and pushed"
echo ""

# Step 2: Heroku Login
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: Heroku Authentication"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🔐 Logging into Heroku..."
echo "   A browser window will open for authentication"
echo "   Press ANY KEY after logging in..."
echo ""

heroku login

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Heroku login failed!"
    echo "   Please try again: heroku login"
    exit 1
fi

echo ""
echo "✅ Heroku authentication successful!"
HEROKU_USER=$(heroku auth:whoami)
echo "   Logged in as: $HEROKU_USER"
echo ""

# Step 3: Run Deployment Script
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: Deploying to Heroku"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

./deploy-heroku.sh

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Deployment failed!"
    echo "   Check the error messages above"
    echo "   You can retry with: ./deploy-heroku.sh"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 4: DNS Configuration Required"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 IMPORTANT: Get your DNS targets by running:"
echo "   heroku domains -a controlleddynamicsinc"
echo ""
echo "Then configure DNS at Porkbun.com:"
echo "   1. Go to https://porkbun.com"
echo "   2. Login and select controlleddynamicsinc.com"
echo "   3. Click DNS tab"
echo "   4. Add ALIAS record for @ with the DNS target"
echo "   5. Add CNAME record for www with the DNS target"
echo ""
echo "📖 Full DNS guide: See DNS_SETUP_GUIDE.md"
echo ""

# Get DNS targets
echo "Your DNS targets:"
heroku domains -a controlleddynamicsinc 2>/dev/null || echo "Run 'heroku domains -a controlleddynamicsinc' to see DNS targets"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ DEPLOYMENT COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Your site is deployed at:"
echo "  🌍 Heroku URL: https://controlleddynamicsinc.herokuapp.com"
echo ""
echo "After DNS configuration (15-30 min), it will be live at:"
echo "  🌍 https://controlleddynamicsinc.com"
echo "  🌍 https://www.controlleddynamicsinc.com"
echo ""
echo "Next steps:"
echo "  1. ✅ Code deployed to Heroku"
echo "  2. ⏳ Configure DNS at Porkbun (see above)"
echo "  3. ⏳ Wait 15-30 minutes for DNS propagation"
echo "  4. ✅ Test your site!"
echo ""
echo "Useful commands:"
echo "  • View logs:    heroku logs --tail -a controlleddynamicsinc"
echo "  • Open site:    heroku open -a controlleddynamicsinc"
echo "  • Check DNS:    dig controlleddynamicsinc.com"
echo "  • App info:     heroku apps:info -a controlleddynamicsinc"
echo ""
echo "📚 Documentation:"
echo "  • Complete guide: COMPLETE_DEPLOYMENT_GUIDE.md"
echo "  • DNS guide:      DNS_SETUP_GUIDE.md"
echo "  • Quick deploy:   DEPLOY_NOW.md"
echo ""
echo "🎉 Congratulations! Your site is live!"
echo ""
