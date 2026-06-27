#!/usr/bin/env bash
# worklog-push.sh — commit the current working tree and push to GitHub.
#
# Usage:
#   ./worklog-push.sh                       # auto-generates a commit message
#   ./worklog-push.sh "your commit message" # uses the supplied message
#
# This script does NOT contain any credentials. The GitHub token is stored
# only in .git/config (in the remote URL), which is local to this machine
# and never committed to the repository.
#
# Before running for the first time, make sure:
#   - git is initialised (`git init`) — already done
#   - the `origin` remote is set with the token-embedded URL — already done
#
# Exit codes:
#   0  success (committed and pushed, or nothing to commit)
#   1  no commits to push / nothing to do
#   2  push failed (network / auth / rejected)

set -euo pipefail

cd "$(dirname "$0")/.."   # repo root

# 1. Stage everything (respecting .gitignore)
git add -A

# 2. Check if there is anything to commit
if git diff --cached --quiet; then
  echo "ℹ️  Nothing to commit — working tree is clean."
  exit 0
fi

# 3. Build a commit message
if [ $# -ge 1 ] && [ -n "$1" ]; then
  COMMIT_MSG="$1"
else
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S %Z')
  # Summarise what changed (file counts by type)
  CHANGED=$(git diff --cached --name-only | wc -l | tr -d ' ')
  ADDED=$(git diff --cached --diff-filter=A --name-only | wc -l | tr -d ' ')
  MODIFIED=$(git diff --cached --diff-filter=M --name-only | wc -l | tr -d ' ')
  DELETED=$(git diff --cached --diff-filter=D --name-only | wc -l | tr -d ' ')
  COMMIT_MSG="chore: worklog update at ${TIMESTAMP} (${CHANGED} files: +${ADDED} ~${MODIFIED} -${DELETED})"
fi

# 4. Commit
git commit -m "${COMMIT_MSG}" 2>&1 | sed 's/^/  /'

# 5. Push to origin
echo "Pushing to origin/main…"
if git push -u origin main 2>&1 | sed 's/ghp_[^@]*/ghp_***/g' | sed 's/^/  /'; then
  echo "✅ Pushed to GitHub successfully."
  exit 0
else
  echo "❌ Push failed. Check the error above (token redacted in output)."
  exit 2
fi
