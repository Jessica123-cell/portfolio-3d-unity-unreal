/* ── GRAIN (all pages) ── */
(function(){
  const grain = document.createElement('div');
  grain.style.cssText = `
    position:fixed;inset:0;z-index:1000;pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity:.032;
    animation:grain 0.8s steps(2) infinite;
  `;
  const style = document.createElement('style');
  style.textContent = `@keyframes grain{
    0%{transform:translate(0,0)}10%{transform:translate(-2%,-3%)}20%{transform:translate(3%,1%)}
    30%{transform:translate(-1%,4%)}40%{transform:translate(2%,-2%)}50%{transform:translate(-3%,2%)}
    60%{transform:translate(1%,-4%)}70%{transform:translate(-2%,3%)}80%{transform:translate(3%,-1%)}
    90%{transform:translate(-1%,2%)}100%{transform:translate(2%,0)}
  }
  @keyframes blobFloat{
    from{transform:translate(0,0) scale(1)}
    to{transform:translate(30px,20px) scale(1.08)}
  }`;
  document.head.appendChild(style);
  document.body.appendChild(grain);
})();

/* ── GRADIENT BLOBS (XR / Electro sections, when present) ── */
(function(){
  const sec = document.getElementById('xr-section');
  if(!sec) return;
  const el = document.createElement('div');
  el.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden';
  el.innerHTML = `
    <div style="position:absolute;width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(59,94,166,.35) 0%,transparent 70%);
      top:-150px;right:-100px;filter:blur(80px);
      animation:blobFloat 12s ease-in-out infinite alternate"></div>
    <div style="position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(100,140,220,.2) 0%,transparent 70%);
      bottom:10%;left:5%;filter:blur(60px);
      animation:blobFloat 16s ease-in-out infinite alternate-reverse"></div>
    <div style="position:absolute;width:300px;height:300px;border-radius:50%;
      background:radial-gradient(circle,rgba(138,171,223,.15) 0%,transparent 70%);
      top:40%;left:40%;filter:blur(50px);
      animation:blobFloat 20s ease-in-out infinite alternate"></div>`;
  sec.insertBefore(el, sec.firstChild);
})();

(function(){
  const sec = document.getElementById('el-section');
  if(!sec) return;
  const el = document.createElement('div');
  el.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden';
  el.innerHTML = `
    <div style="position:absolute;width:550px;height:550px;border-radius:50%;
      background:radial-gradient(circle,rgba(26,122,94,.4) 0%,transparent 70%);
      top:-100px;left:-80px;filter:blur(80px);
      animation:blobFloat 14s ease-in-out infinite alternate"></div>
    <div style="position:absolute;width:380px;height:380px;border-radius:50%;
      background:radial-gradient(circle,rgba(93,202,165,.2) 0%,transparent 70%);
      bottom:5%;right:8%;filter:blur(65px);
      animation:blobFloat 18s ease-in-out infinite alternate-reverse"></div>
    <div style="position:absolute;width:250px;height:250px;border-radius:50%;
      background:radial-gradient(circle,rgba(10,61,43,.5) 0%,transparent 70%);
      top:50%;right:30%;filter:blur(45px);
      animation:blobFloat 22s ease-in-out infinite alternate"></div>`;
  sec.insertBefore(el, sec.firstChild);
})();

/* ── SCROLL FADE-IN (timeline items) ── */
document.querySelectorAll('.ti').forEach(el => el.classList.add('fade-in'));
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
}, {threshold: 0.12});
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

/* ── SPLIT-TEXT HOOK ANIMATION ── */
function splitHook(el) {
  const text = el.textContent.trim();
  el.innerHTML = text.split(' ').map((word, i) =>
    `<span class="word" style="transition-delay:${i * 0.06}s"><span>${word}</span></span>`
  ).join(' ');
}
function initHooks() {
  document.querySelectorAll('.thook').forEach(el => {
    if (!el.dataset.split) {
      splitHook(el);
      el.dataset.split = '1';
    }
  });
  const hookObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('hook-visible');
        hookObs.unobserve(e.target);
      }
    });
  }, {threshold: 0.3});
  document.querySelectorAll('.thook').forEach(el => hookObs.observe(el));
}
initHooks();

/* ── LANGUAGE (persisted across pages) ── */
let currentLang = localStorage.getItem('jo-lang') || 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('jo-lang', currentLang);
  applyLang(currentLang);
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  const btn = document.getElementById('lang-btn');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(t[key] !== undefined) {
      if(key === 'hero-h1') el.innerHTML = t[key];
      else el.textContent = t[key];
    }
  });
  if(btn) btn.innerHTML = `<span style="font-size:.85rem">🌐</span> ${t['lang-btn']}`;

  document.querySelectorAll('.thook').forEach(el => {
    el.dataset.split = '';
    el.classList.remove('hook-visible');
  });
  setTimeout(initHooks, 50);
}

document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
