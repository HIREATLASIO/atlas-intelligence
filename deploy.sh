#!/bin/bash
# Deploy script for Atlas Pro Max

echo "🚀 Atlas Pro Max Deployment Script"
echo "=================================="

# Build the project
echo "📦 Building..."
cd /root/.openclaw/workspace/atlas-pro
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
cd dist
tar -czvf ../atlas-pro-max-deploy.tar.gz .

echo "✅ Build complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Pages → Create project → Upload assets"
echo "3. Upload: atlas-pro-max-deploy.tar.gz"
echo "4. Domain: Add custom domain hireatlas.io"
echo ""
echo "📁 Deployment package: /root/.openclaw/workspace/atlas-pro-max-deploy.tar.gz"
