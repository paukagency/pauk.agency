/* ============================================================
   PAUK.AGENCY — i18n Engine
   Languages loaded from js/lang/*.js (edit those files for content)
   Supports: EN RU ES DE FR HI IT PT ZH
   ============================================================ */

const PA_I18N = (() => {
  'use strict';

  /* ----------------------------------------------------------
     ENGINE — translations are in js/lang/*.js
     Edit js/lang/{code}.js to change content for that language.
  ---------------------------------------------------------- */
  if (!window.PA_T) window.PA_T = {};


  let current = (() => {
    const saved = localStorage.getItem('pa_lang');
    if (saved) return saved;
    const full = (navigator.language || 'en').toLowerCase();
    if (full.startsWith('zh')) return 'zh';
    const m = { ru:'ru', es:'es', de:'de', fr:'fr', hi:'hi', it:'it', pt:'pt' };
    return m[full.slice(0, 2)] || 'en';
  })();

  function getLangBase() {
    return window.location.pathname.includes('/pages/') ? '../js/lang/' : 'js/lang/';
  }

  function loadLang(lang, cb) {
    if (window.PA_T[lang]) { if (cb) cb(); return; }
    const s = document.createElement('script');
    s.src = getLangBase() + lang + '.js';
    s.onload = cb || null;
    document.head.appendChild(s);
  }

  function d(key) {
    const dict = window.PA_T[current] || window.PA_T.en || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  function preventWidows(text) {
    if (!text || text.length < 6) return text;
    const trailing = text.match(/\s*$/)[0];
    let out = text.trimEnd();
    out = out.replace(/(?<=^|\s)(\S{1,3}) /g, '$1\u00A0');
    out = out.replace(/[ \u00A0](\S+)$/, '\u00A0$1');
    return out + trailing;
  }

  function applyTranslations() {
    document.documentElement.lang = current;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = preventWidows(d(el.dataset.i18n));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = d(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === current);
    });
    const codeEl = document.getElementById('langCurrentCode');
    if (codeEl) codeEl.textContent = current.toUpperCase();
  }

  function setLang(lang) {
    current = lang;
    localStorage.setItem('pa_lang', lang);
    loadLang(lang, applyTranslations);
  }

  /* ----------------------------------------------------------
     INIT on DOM ready
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    loadLang(current, applyTranslations);

    const currentBtn = document.getElementById('langCurrentBtn');
    const dropdown   = document.getElementById('langDropdown');

    if (currentBtn && dropdown) {
      currentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });
      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    }

    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        setLang(opt.dataset.lang);
        dropdown && dropdown.classList.remove('open');
      });
    });
  });

  return { setLang, getCurrent: () => current };
})();
