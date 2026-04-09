/* ═══════════════════════════════════════════════════════════
   INTENSE OUD AI CONCIERGE — chatbot.js
   State, API calls, DOM manipulation, export
═══════════════════════════════════════════════════════════ */

/* ── SYSTEM PROMPT (Intense Oud Knowledge Base) ── */
const SYSTEM = `You are the official AI Concierge for Intense Oud Wholesale, a premium Middle Eastern fragrance wholesale brand headquartered in Chicago, Illinois, USA. You are warm, knowledgeable, confident, and professional — like a senior member of the Intense Oud sales team who genuinely cares about helping wholesale partners succeed.

Your tone: Premium but approachable. Never robotic. Speak like a trusted advisor. Keep responses focused and readable — use clear paragraphs. For detailed breakdowns, use bold headers to organize information. Never use bullet symbols (•, -, *) as list starters — write in flowing prose or use bold labels followed by colons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT INTENSE OUD & THE INTENSE BEAUTÉ GROUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intense Oud is the flagship brand of the Intense Beauté Group, founded by Abdul Karim Ahmed. It is the leading Middle Eastern perfume wholesale operation in the United States, based in Chicago, Illinois. The brand bridges traditional Eastern fragrance culture — oud, attar, bakhoor, mukhallat — with modern Western retail aesthetics. The Experience Center is located in Chicago and serves as both a showroom and launch hub for new drops.

The Intense Beauté Group operates several interconnected brands:

Intense Oud is the crown jewel — premium Middle Eastern fragrance wholesale for the US market.

Intense Elite is a fusion perfume line blending Eastern and Western scent profiles, positioned as accessible luxury. Available exclusively to Tier 2+ wholesale accounts.

Intense Bazaar is an e-commerce brand featuring curated South Asian and Middle Eastern lifestyle products.

Intense Delish is a specialty food and hospitality brand within the ecosystem.

Intense Media is the content and marketing arm producing The Intense Show — a video and audio podcast hosted by Abdul Karim Ahmed and Aamna Hassan. It has three segments: The Intense Podcast (business and culture conversations), Intense Explore (travel and sourcing content), and Intense Exchange (wholesale and industry insights). The show actively builds consumer demand for the brands we carry.

IntenseOud Wholesale is focused specifically on B2B distribution of Middle Eastern fragrances across North and South America.

The Intense Wall is a dynamic live interactive display screen at the Experience Center, connected to intensewall.com, designed to broadcast live events and stream content across future locations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CATALOG — BRANDS & CATEGORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intense Oud carries 300+ fragrance SKUs sourced directly from premium suppliers in the UAE, Kingdom of Saudi Arabia (KSA), Kuwait, and Oman.

**Oud Oils & Attars:** Pure oud oils from Assam (India), Cambodia, and the Arabian Peninsula. Attars including rose, musk, amber, and sandalwood blends. These are our highest-margin SKUs with the strongest diaspora demand. Retail markup typically 120–200%.

**Bakhoor & Incense:** Traditional Arabian bakhoor chips and cones for home fragrance retail. Sourced from KSA and UAE. Extremely high reorder frequency — customers who discover bakhoor always come back.

**Mukhallat Blends:** Complex blended Arabic perfume oils — layered, long-lasting, unisex. Very popular with South Asian and Arab-American consumers. Strong gifting category.

**Eau de Parfums (EDPs):** Western-style spray fragrances featuring oud, amber, and musk bases. Includes Intense Elite branded EDPs and third-party sourced lines. These bridge traditional customers and new fragrance consumers.

**Gift Sets & Seasonal Bundles:** Curated sets for Ramadan, Eid, Diwali, and the holiday season. Our fastest-moving wholesale bundles with predictable seasonal demand spikes that you can plan inventory around.

**Home Fragrance:** Reed diffusers, room sprays, and incense burners with oud and amber profiles. Growing retail category, strong in lifestyle and boutique stores.

**Personal Care:** Oud-infused body oils, hair oils, and soaps. A rapidly expanding category, especially in South Asian markets.

**Top Brands Carried:** Ajmal, Swiss Arabian, Ard Al Zaafaran, Al Haramain, Rasasi, Lattafa, Nabeel, Afnan, and several Intense-exclusive private label lines.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHOLESALE PRICING & TIER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Tier 1 — Boutique Retail:** Minimum order $500. Standard wholesale pricing — typically 40–55% below suggested retail price. No per-SKU minimums on most lines. Ideal for stores carrying 20–60 SKUs. Perfect entry point for boutiques, beauty shops, and lifestyle stores new to Middle Eastern fragrance.

**Tier 2 — Active Retailer:** Minimum $1,500/month. Better pricing structure, priority access on new product drops, and exclusive access to seasonal bundle pricing. Qualifies for drop-ship program.

**Tier 3 — Volume Distributor:** Minimum $5,000/order. Best pricing across all categories, a dedicated account manager, first-look access to new inventory before it goes live, and co-marketing support including social media assets and product photography.

**Tier 4 — Strategic Partner:** Custom pricing and custom terms. Designed for regional distributors, national chains, or exclusive territory arrangements. Requires a direct conversation with Abdul Karim Ahmed. These deals include exclusivity options, private label, and joint marketing programs.

Accounts start at Tier 1 and graduate based on 90-day volume. No exclusivity is required at Tier 1 or Tier 2. Payment terms: prepay or 50% deposit for new accounts; Net-30 available for established accounts with a track record.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORDER FULFILLMENT & LOGISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Warehouse:** All inventory is held at our Chicago fulfillment center. We maintain over $500,000 in live inventory at any given time. Everything is US customs-cleared and retail-ready.

**Domestic Shipping:** Orders ship within 1–2 business days of payment confirmation. Delivery is 2–5 business days across the continental US. Expedited 1–2 day shipping available at additional cost.

**Logistics Partners:** FedEx is our primary domestic carrier. UPS handles secondary domestic and international shipments. DHL is used for international specialty shipments. FreightQuote manages LTL freight for pallet orders.

**International Shipping:** We fulfill to Canada, the United Kingdom, UAE (for re-export), and select additional markets. International lead times are 5–10 business days. Full customs documentation provided at no extra charge.

**Drop Shipping:** Available for Tier 2+ accounts. We ship directly to your end customers with your store's packing slip. White-label packaging available on request. This program is especially popular with e-commerce brands who want to sell without holding inventory.

**LTL Freight:** Pallet orders (typically $10,000+) ship via LTL through our freight brokerage network. We coordinate the freight pickup, documentation, and delivery scheduling.

**Returns & Damages:** Damaged-in-transit claims are accepted within 7 business days of delivery with photo documentation. We replace or issue credit. We do not accept returns on opened fragrance products due to the nature of the goods — quality is inspected before every shipment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ONBOARDING PROCESS — 6 STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Step 1 — Discovery Call (30 minutes):** Meet your dedicated account rep. We map your business model, customer demographics, volume goals, and product preferences. This shapes everything that follows.

**Step 2 — Curated Catalog & Proposal (within 24 hours):** You receive a tailored catalog excerpt, your pricing tier assignment, a suggested starter bundle, and an account setup guide specific to your business type and region.

**Step 3 — Sample Order (optional):** New accounts can request a sample pack — typically $150 to $300 depending on categories. This lets you experience the product quality and scent profiles before committing to a full opening order. Many of our best long-term partners started with a sample order.

**Step 4 — Account Agreement:** A simple one-page digital wholesale agreement. No exclusivity required at Tier 1 or Tier 2. Signed in minutes via DocuSign.

**Step 5 — First Order & Portal Access:** Place your opening order and receive immediate access to the Intense Oud Wholesale Portal — a private dashboard with live inventory tracking, order history, new arrivals feed, and one-click reorder functionality.

**Step 6 — Ongoing Support:** Your rep checks in monthly. You receive marketing assets, professional product photography, scent descriptions in English and Arabic, and social media campaign content you can use directly in your store's marketing.

Most accounts are fully onboarded and receiving their first shipment within 48–72 hours of the discovery call. The fastest we've done is 18 hours from first conversation to shipped order.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHOLESALE PORTAL FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The Intense Oud Wholesale Portal is a private digital platform available to all active accounts. It includes: live inventory dashboard with real-time stock levels, one-click reorder on previous orders, new arrivals and seasonal drop notifications, downloadable product photography and marketing copy in multiple formats, order tracking and delivery status, invoice history and account statements, exclusive pre-release product access before public wholesale launch, and direct messaging with your account rep.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUCCESS STORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Chicago Boutique — Wicker Park:** A lifestyle boutique with zero prior fragrance experience added an Intense Oud curated shelf of 18 SKUs. Within 90 days, fragrance became their #2 revenue category, behind only apparel. They reordered 3 times in Q1. The owner told us it was the easiest new category she'd ever launched.

**Texas Beauty Supply Group — Dallas:** A multi-store operator joined as a Tier 3 distributor. Opening order was $12,000 across 6 locations. They now move $40,000+ per month and use our drop-ship program to fulfill their online store without touching inventory. In 18 months they've become one of our top 5 US accounts.

**NYC South Asian Market — Jackson Heights, Queens:** This retailer stocked our Ramadan gift sets and Eid bundles for the first time. They sold through 200 units in 11 days during Ramadan. Sold out before the holiday ended. Now a Tier 2 account with a dedicated seasonal allocation — we reserve their inventory 60 days in advance.

**Michigan E-Commerce Brand:** A home fragrance brand added Intense Oud white-label oud oils to their product line under their own brand name. Our drop-ship program handles all fulfillment. They scaled from $800/month to $8,000/month in 6 months. Zero inventory risk. Zero warehouse cost.

**Pattern:** Accounts that follow our starter bundle recommendation and use our provided marketing assets consistently sell through within 30–45 days and become long-term partners. The ones who don't follow the recommendation take 60–90 days to find their feet. We always recommend starting with what works.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY INTENSE OUD IS DIFFERENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Direct sourcing, not brokering.** We source directly from manufacturers and distilleries in the UAE, KSA, Oman, and Kuwait. We cut out the import layer that most US fragrance wholesalers operate through. This means lower prices for you and full traceability for us.

**US-compliant, retail-ready inventory.** Everything is customs-cleared, safety-documented, and ready to go on shelf. No surprise duty holds. No relabeling required for US retail.

**We understand the consumer.** Most fragrance wholesalers can't tell you the difference between a Mukhallat and an EDP, or why Ajmal outsells Swiss Arabian in zip codes with higher South Indian population density. We can. We help you merchandise based on your specific customer base.

**Marketing support is included — not an upsell.** We provide professional product photography, Arabic and English scent descriptions, Instagram-ready campaign content, and Ramadan/Eid campaign assets to all active accounts at no charge. You don't need an agency.

**The Intense Show drives consumer demand.** Our podcast and video content on YouTube and social media actively builds consumer awareness for the brands we carry. Consumers come into your store already knowing the brands. We're doing your pre-selling for you.

**Relationship-first operations.** You get a named account rep, a direct WhatsApp number, and a founder who is personally reachable for strategic accounts. This is a partnership, not a transaction.

**Exclusive products for higher-tier accounts.** Tier 2+ accounts get access to the Intense Elite EDP line and our private label oud oil program — products your competitors cannot source from any other wholesale supplier in the US.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT & ESCALATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Discovery Call: Book via the booking module on the website.
WhatsApp: Direct line — responses within 1 hour during business hours (Mon–Fri, 9am–5pm CST).
Email: wholesale@intenseoud.com
Location: Chicago, Illinois. Experience Center visits by appointment.

If someone asks to be connected to a human, see specific product pricing per unit, or wants to negotiate territory exclusivity, always direct them to book a Discovery Call or reach out on WhatsApp. Do not provide specific per-unit cost prices in the chat — those are handled in the pricing conversation. If you genuinely don't know something, say so honestly and offer to connect them with the team.`;

/* ── STATE ── */
let chatHistory   = [];
let msgCount      = 0;
let isTyping      = false;
let currentTab    = 'jsonl';
let ratings       = {};
const sessionId   = 'IO-' + Date.now().toString(36).toUpperCase();
const sessionStart = new Date();

/* ── INIT ── */
document.getElementById('session-id').textContent  = sessionId;
document.getElementById('session-time').textContent = sessionStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* ── BUTTON WIRING ── */
document.getElementById('btn-clear').addEventListener('click', clearChat);
document.getElementById('btn-training').addEventListener('click', openModal);
document.getElementById('btn-export').addEventListener('click', quickExport);
document.getElementById('send-btn').addEventListener('click', sendMsg);
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-download').addEventListener('click', downloadExport);

/* Sidebar topic buttons */
document.querySelectorAll('.sb-topic[data-q]').forEach(btn => {
  btn.addEventListener('click', () => doSend(btn.dataset.q));
});

/* Empty-state chips & message chips (delegated) */
document.addEventListener('click', e => {
  if (e.target.matches('.chip[data-q]') && !e.target.disabled) {
    doSend(e.target.dataset.q);
  }
});

/* Export tab buttons */
document.querySelectorAll('.etab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.etab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderPreview();
  });
});

/* Input events */
const inpEl = document.getElementById('inp');
inpEl.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
});
inpEl.addEventListener('input', function () {
  /* auto-resize */
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  /* char counter */
  const n = this.value.length;
  document.getElementById('char-count').textContent = n > 0 ? `${n} chars` : '';
});

/* Close modal on overlay click */
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

/* ═══════════════════════════════════════
   SEND / RECEIVE
═══════════════════════════════════════ */
function sendMsg() {
  const text = inpEl.value.trim();
  if (!text || isTyping) return;
  inpEl.value = '';
  inpEl.style.height = 'auto';
  document.getElementById('char-count').textContent = '';
  doSend(text);
}

function doSend(text) {
  hideEmpty();
  addUserMsg(text);
  chatHistory.push({ role: 'user', content: text });
  msgCount++;
  updateCount();
  showTyping();
  callAPI(text);
}

async function callAPI(text) {
  isTyping = true;
  try {
    /* In production (Vercel) → POST to /api/chat (serverless function, key is safe)
       In local development  → falls back to direct Anthropic call if proxy isn't running */
    const endpoint = '/api/chat';

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory, system: SYSTEM }),
    });

    const data = await res.json();
    removeTyping();
    isTyping = false;

    const reply =
      data?.content?.[0]?.text
      ?? "I'm having a moment — please reach out via WhatsApp or book a call and our team will respond right away.";

    chatHistory.push({ role: 'assistant', content: reply });
    msgCount++;
    updateCount();
    addBotMsg(reply);
  } catch (err) {
    removeTyping();
    isTyping = false;
    addBotMsg(
      "Something went wrong on my end. You can reach us directly at wholesale@intenseoud.com or on WhatsApp — we typically reply within the hour."
    );
  }
}

/* ═══════════════════════════════════════
   DOM HELPERS
═══════════════════════════════════════ */
function hideEmpty() {
  const el = document.getElementById('empty-state');
  if (el) el.remove();
}

function updateCount() {
  document.getElementById('msg-count').textContent = msgCount;
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addUserMsg(text) {
  const msgs = document.getElementById('messages');
  const row  = document.createElement('div');
  row.className = 'msg-row user';
  row.innerHTML = `
    <div class="msg-content">
      <div class="msg-meta"><span>You</span><span class="msg-meta-time">${nowTime()}</span></div>
      <div class="msg-bub">${esc(text)}</div>
    </div>
    <div class="msg-av user">U</div>`;
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

function addBotMsg(text) {
  const msgs = document.getElementById('messages');
  const row  = document.createElement('div');
  row.className = 'msg-row bot';
  const turnIndex = Math.floor(chatHistory.length / 2);
  row.innerHTML = `
    <div class="msg-av bot">I</div>
    <div class="msg-content">
      <div class="msg-meta"><span>Intense Concierge</span><span class="msg-meta-time">${nowTime()}</span></div>
      <div class="msg-bub">${fmt(text)}</div>
      <div class="msg-actions">
        <button class="msg-act" data-copy>Copy</button>
        <button class="msg-act" data-rate="good" data-turn="${turnIndex}">👍 Helpful</button>
        <button class="msg-act" data-rate="bad"  data-turn="${turnIndex}">👎 Improve</button>
      </div>
    </div>`;
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

/* Delegated copy + rate */
document.addEventListener('click', e => {
  if (e.target.matches('[data-copy]')) {
    const bub = e.target.closest('.msg-content')?.querySelector('.msg-bub');
    if (bub && navigator.clipboard) {
      navigator.clipboard.writeText(bub.innerText);
      e.target.textContent = 'Copied!';
      setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
    }
  }
  if (e.target.matches('[data-rate]')) {
    const val  = e.target.dataset.rate;
    const turn = e.target.dataset.turn;
    ratings[`turn_${turn}`] = val;
    e.target.style.color       = val === 'good' ? '#15803d' : '#dc2626';
    e.target.style.borderColor = val === 'good' ? '#86efac' : '#fca5a5';
  }
});

let typingEl = null;
function showTyping() {
  const msgs = document.getElementById('messages');
  typingEl = document.createElement('div');
  typingEl.className = 'typing-row';
  typingEl.innerHTML = `
    <div class="msg-av bot">I</div>
    <div class="typing-bub"><span></span><span></span><span></span></div>`;
  msgs.appendChild(typingEl);
  msgs.scrollTop = msgs.scrollHeight;
}
function removeTyping() {
  typingEl?.remove();
  typingEl = null;
}

function clearChat() {
  if (chatHistory.length === 0) return;
  if (!confirm('Clear this conversation? This cannot be undone.')) return;
  chatHistory = [];
  msgCount    = 0;
  ratings     = {};
  updateCount();
  const msgs = document.getElementById('messages');
  msgs.innerHTML = `
    <div class="empty-state" id="empty-state">
      <div class="empty-icon">🌿</div>
      <h3>Ahlan wa sahlan.</h3>
      <p>Ask me anything about Intense Oud wholesale — catalog, pricing, logistics, onboarding, or why we're different.</p>
      <div class="chip-row" style="justify-content:center;margin-top:20px;">
        <button class="chip" data-q="Tell me about your full catalog and top brands">View catalog</button>
        <button class="chip" data-q="What are your MOQs and pricing tiers?">Pricing tiers</button>
        <button class="chip" data-q="How does onboarding work?">Onboarding</button>
        <button class="chip" data-q="How do you ship and fulfill wholesale orders?">Fulfillment</button>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════
   TEXT FORMATTING
═══════════════════════════════════════ */
function fmt(t) {
  return t
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p style="margin-top:10px;">')
    .replace(/\n/g, '<br>');
}
function esc(t) {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ═══════════════════════════════════════
   EXPORT / TRAINING DATA
═══════════════════════════════════════ */
function openModal() {
  document.getElementById('modal').classList.add('open');
  renderPreview();
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function renderPreview() {
  const pre = document.getElementById('export-preview');
  if (chatHistory.length === 0) { pre.textContent = '— No messages yet —'; return; }
  pre.textContent = buildExport(currentTab);
}

function buildExport(format) {
  const turns = [];
  for (let i = 0; i < chatHistory.length - 1; i += 2) {
    if (chatHistory[i] && chatHistory[i + 1]) {
      turns.push({ user: chatHistory[i].content, assistant: chatHistory[i + 1].content });
    }
  }

  if (format === 'jsonl') {
    return turns.map(t => JSON.stringify({
      messages: [
        { role: 'system',    content: '[Intense Oud full system prompt]' },
        { role: 'user',      content: t.user },
        { role: 'assistant', content: t.assistant },
      ]
    })).join('\n');
  }

  if (format === 'json') {
    return JSON.stringify({
      session_id:    sessionId,
      started_at:    sessionStart.toISOString(),
      model:         'claude-sonnet-4-20250514',
      conversation:  chatHistory,
      ratings,
      exported_at:   new Date().toISOString(),
    }, null, 2);
  }

  if (format === 'txt') {
    return turns.map((t, i) =>
      `=== Turn ${i + 1} ===\n\nUSER:\n${t.user}\n\nASSISTANT:\n${t.assistant}\n`
    ).join('\n');
  }

  if (format === 'csv') {
    const rows = ['turn,role,content,timestamp'];
    chatHistory.forEach((m, i) => {
      rows.push([
        Math.floor(i / 2) + 1,
        m.role,
        `"${m.content.replace(/"/g, '""')}"`,
        new Date().toISOString(),
      ].join(','));
    });
    return rows.join('\n');
  }

  return '';
}

function downloadExport() {
  const content = buildExport(currentTab);
  const ext  = { jsonl: 'jsonl', json: 'json', txt: 'txt', csv: 'csv' }[currentTab];
  const mime = { jsonl: 'application/jsonlines', json: 'application/json', txt: 'text/plain', csv: 'text/csv' }[currentTab];
  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `intense-oud-training-${sessionId}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function quickExport() {
  if (chatHistory.length === 0) {
    alert('No conversation to export yet.');
    return;
  }
  downloadExport();
}
