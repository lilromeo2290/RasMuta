#!/usr/bin/env bash
# deploy-webuzo.sh — run ONCE on the Webuzo VPS after uploading the project.
#
# This script:
#   1. Installs Node.js dependencies (via npm — Webuzo ships Node)
#   2. Generates the Prisma client
#   3. Creates the SQLite database and applies the schema
#   4. Builds the Next.js production bundle (standalone output)
#
# After this script finishes, you start the app from the Webuzo panel
# (Node.js app → Start) or manually with `npm run start`.
#
# Requirements on the VPS (Webuzo provides most of these):
#   - Node.js 18+ (Webuzo's "Node.js Selector" or "Setup Node.js App")
#   - npm
#   - Bash
#
# Usage:
#   cd ~/public_html/rasmuta       # wherever you uploaded the project
#   bash deploy-webuzo.sh

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=== Webuzo deployment starting in: $PROJECT_DIR ==="
echo ""

# 1. Node version check
if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js is not installed or not on PATH."
  echo "   In Webuzo: open the panel → Node.js Selector → Install Node.js 18+"
  echo "   Then re-run this script."
  exit 1
fi
echo "✅ Node.js: $(node -v)"
echo "   npm:     $(npm -v)"

# 2. Install dependencies
echo ""
echo "=== Installing dependencies (npm install) ==="
npm install --omit=optional 2>&1 | tail -5

# 3. Prisma: generate client + push schema to SQLite
echo ""
echo "=== Generating Prisma client + creating database ==="
npx prisma generate
npx prisma db push

# Make sure the db folder is writable by the web server
mkdir -p db
chmod -R 755 db
echo "✅ Database ready at: $(grep -oP 'file:\K.*' .env 2>/dev/null || echo '(see .env)')"

# 4. Build the production bundle
echo ""
echo "=== Building Next.js production bundle (this takes ~1-2 minutes) ==="
npm run build 2>&1 | tail -15

echo ""
echo "============================================"
echo "✅  BUILD COMPLETE"
echo "============================================"
echo ""
echo "Next steps in the Webuzo panel:"
echo "  1. Open  Webuzo panel → Node.js Selector"
echo "  2. Select the app (Document Root: public_html/rasmuta)"
echo "  3. Set the Application Startup File to: server.js"
echo "     (located at .next/standalone/server.js — see note below)"
echo "  4. Click 'Start App' and copy the App URL"
echo ""
echo "NOTE on the standalone server:"
echo "  The production build produces a self-contained server at:"
echo "    .next/standalone/server.js"
echo "  This is what you should point Webuzo's Node.js app at."
echo "  The build script has already copied .next/static and /public"
echo "  into .next/standalone/ for you."
echo ""
echo "If you prefer to run the server manually (e.g. behind Nginx):"
echo "  NODE_ENV=production node .next/standalone/server.js"
echo "  (it listens on port 3000 by default, or \$PORT if set)"
