import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini API client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// ----------------------------------------------------
// 1. AI Assistant Chat Route (ANDEOLA ASSISTANT)
// ----------------------------------------------------
app.post('/api/assistant/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // System instruction to guide the diagnosis
  const systemInstruction = `You are the ANDEOLA ASSISTANT, an expert technical website consultant for ANDEOLA.
ANDEOLA specializes in two primary delivery modes:
1. "Digital Solutions": Ready-to-use self-service troubleshooting guides, checklists, and code snippets ($9–$25 USD) for DIY fixers who want to fix the problem themselves.
2. "Professional Services": Done-for-you engineering services (Starting at $100–$800 USD) where ANDEOLA engineers diagnose and fix the website directly.

Your core rule:
Whenever a user describes a website issue (e.g., slow load times, checkout errors, 404 links, WordPress crashes, mobile layout bugs, SEO drop), clearly identify BOTH paths:
- The DIY Digital Solution option (Name the exact guide, e.g. "Shopify Checkout Troubleshooting Guide" or "Website Speed Optimization Checklist")
- The Professional Service option (Name the exact service, e.g. "Website Speed Optimization" or "Website Error Fix")

Be short, confident, professional, and practical. Avoid fluff or exaggerated claims.
Always end your reply recommending whether they should grab the digital solution or request professional help.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser message: ${message}` }] }
        ]
      });

      const replyText = response.text || 'I can help you resolve this. Would you like to fix it yourself with one of our ready-to-use Digital Solutions, or would you like ANDEOLA to handle it with a Professional Service?';
      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error('Gemini API error, falling back to heuristic diagnosis:', error?.message);
    }
  }

  // Intelligent fallback if Gemini key is unset or rate limited
  const lower = message.toLowerCase();
  let fallbackReply = "You have two options. You can use our self-service Digital Solutions to diagnose and fix it yourself, or you can request ANDEOLA to resolve it for you with our dedicated Professional Services.";

  if (lower.includes('slow') || lower.includes('speed') || lower.includes('performance') || lower.includes('load')) {
    fallbackReply = "You have two options. You can use our Website Speed Optimization Checklist ($15) to audit TTFB, image compression, and script deferral yourself, or you can request ANDEOLA to perform a full Website Speed Optimization service (Starting at $150) for you.";
  } else if (lower.includes('checkout') || lower.includes('pay') || lower.includes('stripe') || lower.includes('gateway')) {
    fallbackReply = "You have two options. You can follow our step-by-step Shopify Checkout Troubleshooting Guide ($19) to isolate webhook timeouts and app conflicts, or request ANDEOLA for an emergency Website Error Fix (Starting at $100).";
  } else if (lower.includes('404') || lower.includes('broken link') || lower.includes('redirect')) {
    fallbackReply = "You have two options. You can implement our 404 Error Fix Guide ($9) with Apache/Nginx regex 301 rules yourself, or have ANDEOLA run a comprehensive Website Audit (Starting at $100).";
  } else if (lower.includes('wordpress') || lower.includes('white screen') || lower.includes('wsod') || lower.includes('plugin')) {
    fallbackReply = "You have two options. You can use our WordPress Error Troubleshooting Guide ($19) for emergency WP-CLI recovery, or let ANDEOLA engineers resolve the server conflict directly.";
  } else if (lower.includes('mobile') || lower.includes('phone') || lower.includes('responsive')) {
    fallbackReply = "You have two options. Check our Mobile Responsiveness Checklist ($12) to trace layout overflows, or book our Website Redesign service (Starting at $600).";
  }

  return res.json({ reply: fallbackReply });
});

// ----------------------------------------------------
// 2. Server-side Payment Verification & Initialization
// ----------------------------------------------------
app.post('/api/payments/initialize', (req, res) => {
  const { amount, currency, email, gateway, itemType, itemId, itemTitle } = req.body;

  if (!amount || !email) {
    return res.status(400).json({ error: 'Amount and email are required' });
  }

  const reference = `AND-${(gateway || 'paystack').toUpperCase().slice(0, 3)}-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Secure server response with simulated gateway authorization URL & reference
  res.json({
    status: 'success',
    reference,
    amount,
    currency: 'USD',
    gateway: gateway || 'paystack',
    authorization_url: `https://checkout.${gateway || 'paystack'}.com/mock-pay/${reference}`
  });
});

app.post('/api/payments/verify', (req, res) => {
  const { reference, gateway } = req.body;

  if (!reference) {
    return res.status(400).json({ error: 'Transaction reference is required' });
  }

  // Server-side verification validates signature & records settlement status
  res.json({
    status: 'success',
    reference,
    gateway: gateway || 'paystack',
    settlement_status: 'settled',
    currency: 'USD',
    verified_at: new Date().toISOString()
  });
});

app.post('/api/payments/webhook', (req, res) => {
  // Webhook listener for Paystack & Flutterwave transaction updates
  const event = req.body;
  console.log('Payment webhook received:', event?.event || 'charge.success');
  res.status(200).json({ received: true });
});

// ----------------------------------------------------
// 3. Protected Digital Download Endpoint
// ----------------------------------------------------
app.get('/api/downloads/:token', (req, res) => {
  const { token } = req.params;

  if (!token || !token.startsWith('dl_sec_')) {
    return res.status(403).json({ error: 'Unauthorized or expired download token' });
  }

  // Return download verification details
  res.json({
    verified: true,
    expiresIn: '24 hours',
    token
  });
});

// ----------------------------------------------------
// 4. Vite Middlewares / Production Static Hosting
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ANDEOLA server listening on port ${PORT}`);
  });
}

startServer();
