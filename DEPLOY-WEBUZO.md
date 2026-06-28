# Deploying the RAS MUTA Foundation Website to a Webuzo VPS

This guide walks you through every step to deploy this Next.js website to a Webuzo-managed VPS. No prior Webuzo experience is assumed.

---

## 0. What you'll need

| Item | Notes |
|---|---|
| A Webuzo VPS | With root/WHM access and the Webuzo panel installed |
| SSH access to the VPS | For uploading files and running commands |
| The project files | Either pulled from GitHub or uploaded as a ZIP |
| A domain name (optional but recommended) | e.g. `rasmutafoundation.org` |
| Node.js 18+ available in Webuzo | Webuzo's "Node.js Selector" lets you install it |

The project is a **Next.js 16** app with **standalone output**, which means the production build produces a self-contained server at `.next/standalone/server.js` that does NOT need `node_modules` to run. This makes VPS deployment much simpler than a standard Next.js app.

---

## 1. Preparing the project (already done — just for your reference)

The following have already been configured:

- `next.config.ts` has `output: "standalone"` ✓
- `package.json` has a `build` script that produces standalone output and copies `.next/static` + `public/` into `.next/standalone/` ✓
- `package.json` has a `start` script: `NODE_ENV=production node .next/standalone/server.js` ✓
- `.env.example` documents the required environment variables ✓
- `scripts/deploy-webuzo.sh` automates install + build on the VPS ✓
- `.gitignore` excludes `.env`, `db/*.db`, `node_modules`, `.next/`, `upload/`, and large screenshots ✓
- The latest code is on GitHub: https://github.com/lilromeo2290/RasMuta ✓

---

## 2. Get the project files onto the VPS

You have two options. **Option A (Git) is strongly recommended** — it makes future updates trivial.

### Option A — Clone from GitHub (recommended)

1. SSH into your VPS:
   ```bash
   ssh root@YOUR_VPS_IP
   ```

2. Go to the Webuzo user's `public_html` directory. For the default Webuzo user (usually `admin` or your username), this is typically:
   ```bash
   cd /home/USERNAME/public_html
   ```
   Replace `USERNAME` with your actual Webuzo username.

3. Clone the repo:
   ```bash
   git clone https://github.com/lilromeo2290/RasMuta.git rasmuta
   cd rasmuta
   ```

### Option B — Upload a ZIP

1. On your local machine, download the project as a ZIP from GitHub:
   `https://github.com/lilromeo2290/RasMuta` → Code → Download ZIP

2. In the Webuzo panel, open **File Manager** and navigate to `public_html/`.

3. Upload the ZIP and extract it. Rename the extracted folder to `rasmuta`.

   Or via SSH:
   ```bash
   cd /home/USERNAME/public_html
   # upload rasmuta.zip via scp or sftp, then:
   unzip rasmuta.zip
   mv RasMuta-main rasmuta
   cd rasmuta
   ```

---

## 3. Set up Node.js in Webuzo

1. Log in to your **Webuzo panel** (usually `https://YOUR_VPS_IP:20000` or `https://yourdomain.com:20000`).

2. In the left sidebar, find **Node.js Selector** (sometimes under "Software" or "Advanced").

3. Click **Install Node.js** if not already installed. Choose **Node.js 18 LTS** or newer.

4. Once installed, click **Create Application** (or "Setup Node.js App") with these settings:

   | Field | Value |
   |---|---|
   | **Application Root** | `rasmuta` (the folder name inside `public_html`) |
   | **Application URL** | your domain or subdomain, e.g. `rasmuta.yourdomain.com` |
   | **Application Mode** | `Production` |
   | **Node.js Version** | 18 LTS (or newer) |
   | **Application Startup File** | `server.js` (you'll fix the path in step 5) |

   Don't start the app yet — we need to build first.

---

## 4. Configure the environment

Create a `.env` file in the project root:

```bash
cd /home/USERNAME/public_html/rasmuta
nano .env
```

Paste and edit:

```
DATABASE_URL=file:/home/USERNAME/public_html/rasmuta/db/custom.db
NODE_ENV=production
PORT=3000
```

Replace `USERNAME` with your actual Webuzo username. Save (`Ctrl+O`, `Enter`, `Ctrl+X` to exit nano).

> ⚠️ **Important:** The `DATABASE_URL` must be an **absolute path**. The `db/` folder must be **writable** by the web server user.

---

## 5. Install dependencies and build

Run the deploy script:

```bash
cd /home/USERNAME/public_html/rasmuta
bash scripts/deploy-webuzo.sh
```

This script will:
1. Run `npm install` (installs dependencies)
2. Run `npx prisma generate` (generates the Prisma client)
3. Run `npx prisma db push` (creates the SQLite database + tables)
4. Run `npm run build` (creates the production standalone build at `.next/standalone/`)

This takes 1–3 minutes. When it finishes, you should see `✅ BUILD COMPLETE`.

### If the script fails

- **"Node.js is not installed"** → Go back to step 3 and install Node.js via the Webuzo panel.
- **Permission errors on `db/`** → Run: `chmod -R 755 db && chown -R USERNAME:USERNAME db`
- **Build OOM (out of memory)** → Add swap or build with: `NODE_OPTIONS="--max-old-space-size=1024" npm run build`

---

## 6. Point Webuzo's Node.js app at the standalone server

The production server lives at `.next/standalone/server.js`. You have two ways to wire it up:

### Option A — Via Webuzo's Node.js Selector (easiest)

1. Open the Node.js app you created in step 3.
2. Edit the **Application Startup File** to:
   ```
   .next/standalone/server.js
   ```
3. Set the **Application Root** to `rasmuta` (the folder in `public_html`).
4. Set **Application Mode** to `Production`.
5. Click **Start App**.
6. Visit the App URL — your site should be live! 🎉

### Option B — Manual (run behind Nginx/Apache as a reverse proxy)

If Webuzo's Node.js Selector is being finicky, run the server manually:

```bash
cd /home/USERNAME/public_html/rasmuta
NODE_ENV=production PORT=3000 node .next/standalone/server.js &
```

Then in Webuzo, set up a **reverse proxy** from your domain (port 80/443) to `localhost:3000`:
- Webuzo panel → **Server Config → Nginx/Apache** → add a proxy pass rule.
- Or use Webuzo's "Proxy" feature under the domain settings.

---

## 7. (Recommended) Run the server permanently with PM2

Webuzo's Node.js Selector keeps the app running across reboots, but if you're running the server manually (Option B above), use **PM2** so the server restarts automatically if it crashes or the VPS reboots:

```bash
# Install PM2 globally
npm install -g pm2

# Start the app
cd /home/USERNAME/public_html/rasmuta
NODE_ENV=production PORT=3000 pm2 start .next/standalone/server.js --name rasmuta

# Save the PM2 process list and set it to start on boot
pm2 save
pm2 startup    # follow the instructions it prints
```

Useful PM2 commands:
```bash
pm2 status              # see if the app is running
pm2 logs rasmuta        # tail logs
pm2 restart rasmuta     # restart after a code update
pm2 stop rasmuta        # stop
```

---

## 8. Point your domain (optional but recommended)

1. In Webuzo panel → **Domains → Add Domain**, add your domain (e.g. `rasmutafoundation.org`).
2. Make sure the domain's DNS A record points to your VPS IP.
3. In Webuzo → **SSL/TLS → Let's Encrypt**, issue a free SSL certificate for the domain.
4. The Node.js app should now be served at `https://rasmutafoundation.org`.

---

## 9. Updating the site later

When you push new code to GitHub, update the VPS like this:

```bash
cd /home/USERNAME/public_html/rasmuta
git pull origin main
bash scripts/deploy-webuzo.sh
# then either:
#   - Webuzo panel → Node.js app → Restart
#   OR
#   - pm2 restart rasmuta
```

---

## 10. Backing up the database

The SQLite database lives at `db/custom.db`. Back it up periodically:

```bash
cp /home/USERNAME/public_html/rasmuta/db/custom.db /path/to/backup/custom-$(date +%F).db
```

Or set up a cron job via Webuzo → **Cron Jobs**:
```
0 3 * * * cp /home/USERNAME/public_html/rasmuta/db/custom.db /backups/custom-$(date +\%F).db
```

---

## 11. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| **502 Bad Gateway** | Node server isn't running. Check `pm2 status` or Webuzo's Node.js app status. |
| **500 Internal Server Error** | Check `pm2 logs rasmuta` or Webuzo's Node.js app error log. Most often a missing `.env` or wrong `DATABASE_URL` path. |
| **Blank white page** | The standalone build's static files aren't being served. Make sure `npm run build` finished (it copies `.next/static` and `public/` into `.next/standalone/`). |
| **EACCES permission denied on db/** | `chmod -R 755 db && chown -R USERNAME:USERNAME db` |
| **Port 3000 already in use** | Change `PORT=3000` in `.env` to a free port (e.g. `PORT=3001`) and update your reverse proxy. |
| **Build fails with "out of memory"** | `NODE_OPTIONS="--max-old-space-size=1024" npm run build` |
| **Prisma client not found** | Run `npx prisma generate` again after `npm install`. |
| **Can't access site at the domain** | DNS hasn't propagated, or the domain isn't added in Webuzo. Allow up to 24h for DNS. |

---

## 12. Quick reference — file locations on the VPS

| What | Where |
|---|---|
| Project root | `/home/USERNAME/public_html/rasmuta/` |
| Environment file | `/home/USERNAME/public_html/rasmuta/.env` |
| SQLite database | `/home/USERNAME/public_html/rasmuta/db/custom.db` |
| Production server | `/home/USERNAME/public_html/rasmuta/.next/standalone/server.js` |
| Static assets | `/home/USERNAME/public_html/rasmuta/.next/standalone/.next/static/` and `.../public/` |
| PM2 logs | `~/.pm2/logs/rasmuta-out.log` and `rasmuta-error.log` |
| Deploy script | `/home/USERNAME/public_html/rasmuta/scripts/deploy-webuzo.sh` |

---

## 13. One-line summary

```bash
# On the VPS:
cd /home/USERNAME/public_html && \
git clone https://github.com/lilromeo2290/RasMuta.git rasmuta && \
cd rasmuta && \
cp .env.example .env && \
nano .env  # edit DATABASE_URL with the correct USERNAME, save and exit
bash scripts/deploy-webuzo.sh
# Then start the app from Webuzo's Node.js Selector, or:
pm2 start .next/standalone/server.js --name rasmuta
```

That's it. You're live. 🚀

---

**Need help?** The full code and history are at https://github.com/lilromeo2290/RasMuta
