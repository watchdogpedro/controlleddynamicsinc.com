#!/bin/bash

# Google Search Console Verification Helper Script
# Usage: ./add-google-verification.sh YOUR_VERIFICATION_CODE

if [ -z "$1" ]; then
    echo "❌ Error: No verification code provided"
    echo ""
    echo "Usage: ./add-google-verification.sh YOUR_CODE"
    echo ""
    echo "Example:"
    echo "  ./add-google-verification.sh ABC123xyz789"
    echo ""
    echo "Get your code from:"
    echo "  https://search.google.com/search-console/"
    exit 1
fi

VERIFICATION_CODE="$1"

echo "🔍 Adding Google verification code: $VERIFICATION_CODE"
echo ""

# Backup the file
cp app/layout.tsx app/layout.tsx.backup
echo "✅ Backed up app/layout.tsx"

# Replace the placeholder with the actual code
sed -i.tmp "s/ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE/$VERIFICATION_CODE/g" app/layout.tsx
rm app/layout.tsx.tmp 2>/dev/null

echo "✅ Updated app/layout.tsx with verification code"
echo ""

# Show the change
echo "📝 Verification code added:"
grep "google:" app/layout.tsx | head -1
echo ""

# Ask to commit and deploy
read -p "🚀 Ready to commit and deploy? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📦 Committing changes..."
    git add app/layout.tsx
    git commit -m "Add Google Search Console verification code"

    echo "🚀 Deploying to Heroku..."
    git push heroku main

    echo ""
    echo "✅ Done! Wait 2-3 minutes, then verify in Google Search Console."
    echo ""
    echo "Next steps:"
    echo "  1. Wait 2-3 minutes for deployment"
    echo "  2. Go to Google Search Console"
    echo "  3. Click 'Verify'"
    echo "  4. Should say 'Verification successful' ✅"
else
    echo "⏸️  Skipped deployment. Run manually when ready:"
    echo "  git add app/layout.tsx"
    echo "  git commit -m 'Add Google verification'"
    echo "  git push heroku main"
fi

echo ""
echo "🔗 Your site: https://controlleddynamicsinc.com"
echo "🔗 Search Console: https://search.google.com/search-console/"
