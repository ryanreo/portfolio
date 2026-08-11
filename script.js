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
const revealEls = document.querySelectorAll('.card, .tool, .stat, .contact-card');
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
