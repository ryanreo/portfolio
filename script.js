// Portfolio interactions — toolbox tags, typing effect, year, reveal.

// 1. Toolbox: GitHub-style code tags
const tools = [
  'zapier', 'zap', 'gumloop', 'n8n', 'make', 'openclaw', 'supabase',
  'node.js', 'python', 'react', 'vite', 'typescript', 'fastapi',
  'langchain', 'langgraph', 'deepseek-v4', 'sqlite', 'whatsapp-api',
  'mpesa-daraja', 'gmail-api', 'sheets-api', 'telegram-api', 'ussd',
  'git', 'github-pages',
];

const toolsEl = document.getElementById('tools');
if (toolsEl) {
  toolsEl.innerHTML = tools
    .map((t) => `<span class="tool">&lt;${t} <b>/</b>&gt;</span>`)
    .join('');
}

// 1b. More AI agents & automation — compact cards
const moreAI = [
  { name: 'Olive-AI', desc: 'AI agent experiment', lang: 'Python' },
  { name: 'Tender', desc: 'AI tender assistant', lang: 'TypeScript', priv: true },
  { name: 'askisiv1', desc: 'AI assistant / chatbot', lang: 'TypeScript' },
  { name: 'Hand-Recognition-Software', desc: 'Recognizes hand gestures', lang: 'Python' },
  { name: 'Corner', desc: 'Betting corner-prediction bot', lang: 'Python', priv: true },
];

const miniEl = document.getElementById('mini-ai');
if (miniEl) {
  miniEl.innerHTML = moreAI
    .map((p) => {
      const link = p.priv
        ? '<span class="mini-link muted">private</span>'
        : `<a class="mini-link" href="https://github.com/ryanreo/${p.name}" target="_blank" rel="noopener">&lt;repo /&gt;</a>`;
      return (
        `<div class="mini-card"><div class="mini-head mono"><span class="mini-name">${p.name}</span>` +
        (p.priv ? '<span class="priv-badge">private</span>' : '') +
        `</div><p class="mini-desc">${p.desc}</p><div class="mini-foot mono"><span>${p.lang}</span>${link}</div></div>`
      );
    })
    .join('');
}

// 1c. My other work — the cool projects (trading bots, health, tools), no websites
const otherWork = [
  { name: 'LTS-Adjuster-MT4-MT5', desc: 'MT4/MT5 trading indicator — adjusts lot sizes to risk', lang: 'MQL5' },
  { name: 'ICT-SMC-Trade-assistant', desc: 'SMC (Smart Money Concepts) trading assistant', lang: 'Python' },
  { name: 'Nayr-Healthcare', desc: 'Healthcare platform — semester project', lang: 'JavaScript' },
  { name: 'Vitalink', desc: 'Health / vital-signs project', lang: 'Python' },
  { name: 'Currency-Converterr', desc: 'Currency converter with real-time exchange rates', lang: 'HTML' },
  { name: 'S-D', desc: '', lang: 'Python' },
  { name: 'Nobody', desc: '', lang: 'Python' },
  { name: 'whatswrong', desc: '', lang: 'Python' },
  { name: 'Bera', desc: '', lang: 'TypeScript' },
  { name: 'ClearVoice', desc: '', lang: 'TypeScript', priv: true },
  { name: 'vidstar', desc: '', lang: 'Python', priv: true },
];

const otherEl = document.getElementById('other-work');
if (otherEl) {
  otherEl.innerHTML = otherWork
    .map((p) => {
      const attrs = p.priv
        ? ''
        : ` href="https://github.com/ryanreo/${p.name}" target="_blank" rel="noopener"`;
      return (
        `<a class="other-card"${attrs}><div class="other-head mono"><span class="other-name">${p.name}</span>` +
        (p.priv ? '<span class="priv-badge">private</span>' : `<span class="lang-badge">${p.lang}</span>`) +
        `</div><p class="other-desc">${p.desc || '—'}</p></a>`
      );
    })
    .join('');
}

// 2. Typing effect in the terminal
const phrases = [
  'status: open_to_internships()',
  'deploy --target whatsapp',
  'n8n.execute("new_job_alert")',
  'while (sleep) { ship_agents(); }',
];

const typedEl = document.getElementById('typed');
if (typedEl) {
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const phrase = phrases[pi];
    typedEl.textContent = phrase.slice(0, ci);
    if (!deleting && ci < phrase.length) {
      ci++;
      setTimeout(tick, 45);
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, 2200);
    } else if (ci > 0) {
      ci--;
      setTimeout(tick, 18);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(tick, 400);
    }
  }
  tick();
}

// 3. Current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 4. Scroll reveal
const revealEls = document.querySelectorAll('.card, .tool, .stat, .contact-card, .mini-card, .other-card');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    io.observe(el);
  });
}
