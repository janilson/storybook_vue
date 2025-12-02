#!/bin/bash
# Script para fazer release do pacote
# Faz build e commita o dist/ para que possa ser instalado via Git

set -e

echo "🔨 Building package..."
npm run build:package

echo "📦 Package built successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Review the changes in dist/"
echo "2. Commit and push:"
echo "   git add dist/"
echo "   git commit -m 'chore: build package for release'"
echo "   git push"
echo ""
echo "3. Tag a version (optional):"
echo "   git tag v0.1.0"
echo "   git push origin v0.1.0"

