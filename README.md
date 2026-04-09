# Intense Oud — AI Wholesale Concierge

A 24/7 AI-powered wholesale concierge for Intense Oud, built on Claude claude-sonnet-4-20250514.
Includes full knowledge base, conversation export for model training, and a secure Vercel API proxy.

---

## Files

```
intense-oud-chatbot/
├── index.html        ← Main page (HTML structure)
├── chatbot.css       ← All styles
├── chatbot.js        ← All JavaScript + AI logic + export
├── api/
│   └── chat.js       ← Vercel serverless function (keeps API key safe)
├── vercel.json       ← Vercel deployment config
├── package.json      ← Project metadata
├── .env.example      ← Environment variable template
├── .gitignore        ← Keeps secrets out of GitHub
└── README.md         ← This file
```

---

## Deploy to Vercel (Step by Step)

### Step 1 — Push to GitHub

1. Create a new repository on GitHub (github.com → New repository)
2. Name it `intense-oud-chatbot`, set it to Private
3. Upload all these files (drag and drop in GitHub, or use Git):

```bash
git init
git add .
git commit -m "Initial commit — Intense Oud AI Concierge"
git remote add origin https://github.com/YOUR_USERNAME/intense-oud-chatbot.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to vercel.com and sign in (use your GitHub account)
2. Click **"Add New Project"**
3. Import your `intense-oud-chatbot` repository
4. Vercel auto-detects the config — click **Deploy**

### Step 3 — Add your API Key

1. In your Vercel project dashboard → **Settings → Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-xxxxxxxxxxxx` (your real Anthropic key)
   - **Environment:** Production + Preview + Development
3. Click **Save**
4. Go to **Deployments** → click the three dots on your latest deployment → **Redeploy**

Your chatbot is now live at `https://intense-oud-chatbot.vercel.app` (or your custom domain).

---

## Local Development

```bash
# Install Vercel CLI
npm install -g vercel

# Create your local env file
cp .env.example .env.local
# Edit .env.local and add your real ANTHROPIC_API_KEY

# Run locally
vercel dev
# Opens at http://localhost:3000
```

---

## Custom Domain

1. In Vercel dashboard → **Settings → Domains**
2. Add `concierge.intenseoud.com` (or any subdomain)
3. Add the DNS records Vercel provides to your domain registrar
4. SSL certificate is automatic

---

## How the API Proxy Works

The browser talks to `/api/chat` on your Vercel deployment.
Vercel runs `api/chat.js` as a serverless function.
That function adds your secret `ANTHROPIC_API_KEY` and calls Anthropic.
The API key is **never exposed** to the browser.

```
Browser → POST /api/chat → Vercel Function → Anthropic API
                                  ↑
                         API key lives here (safe)
```

---

## Updating the Knowledge Base

All the AI's knowledge is in the `SYSTEM` constant at the top of `chatbot.js`.
Edit that string to add new products, update prices, add team members, etc.
Then commit and push — Vercel auto-redeploys in ~30 seconds.

---

## Training Data Export

Use the **Export** button to download conversations as:
- **JSONL** — for fine-tuning LLMs (Anthropic, OpenAI compatible)
- **JSON** — full session with metadata and ratings
- **Plain Text** — human-readable turn-by-turn
- **CSV** — spreadsheet-friendly log

Rate responses with 👍/👎 — ratings are included in exports.

---

## Built With

- **Claude claude-sonnet-4-20250514** — Anthropic's AI model
- **Vercel** — Hosting + serverless functions
- **Vanilla JS + CSS** — No framework dependencies
- **Google Fonts** — Playfair Display, Inter, Cormorant Garamond
