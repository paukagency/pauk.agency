/* ============================================================
   PAUK.AGENCY — Sidebar injection
   Single source of truth for sidebar HTML across all pages.
   Runs synchronously before i18n.js so data-i18n attributes
   are present when DOMContentLoaded fires.
   ============================================================ */
(function () {
  var path = window.location.pathname;
  var inPages = path.includes('/pages/');

  /* ---- Links resolve differently from root vs /pages/ ---- */
  var L = inPages ? {
    home:     '../index.html',
    referral: '../index.html#referral',
    apps:     'apps.html',
    about:    '../index.html#about',
    contact:  '../index.html#contact',
    login:    'login.html',
    logo:     '../images/logo.svg',
  } : {
    home:     'index.html',
    referral: '#referral',
    apps:     'pages/apps.html',
    about:    '#about',
    contact:  '#contact',
    login:    'pages/login.html',
    logo:     'images/logo.svg',
  };

  /* ---- Active page detection ---- */
  var active = path.includes('/apps') ? 'apps'
             : path.includes('/login') ? 'login'
             : 'home';

  function navItem(page, href, icon, key, text) {
    var cls = 'nav-item' + (active === page ? ' active' : '');
    return '<a href="' + href + '" class="' + cls + '" data-page="' + page + '">'
      + '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' + icon + '</svg>'
      + '<span class="nav-label" data-i18n="' + key + '">' + text + '</span>'
      + '</a>';
  }

  var sidebarHTML = ''
    + '<div class="sidebar__logo">'
    +   '<img src="' + L.logo + '" alt="Pauk.Agency" class="logo-mark">'
    +   '<span class="logo-text">Pauk<span class="logo-dot">.</span>Agency</span>'
    + '</div>'

    + '<nav class="sidebar__nav">'
    + navItem('home', L.home,
        '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>',
        'nav_home', 'Home')
    + navItem('referral', L.referral,
        '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>',
        'nav_program', 'Program')
    + navItem('apps', L.apps,
        '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        'nav_apps', 'Apps')
    + navItem('about', L.about,
        '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',
        'nav_about', 'About')
    + navItem('contact', L.contact,
        '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
        'nav_contact', 'Contact')
    + '</nav>'

    + '<div class="sidebar__influencer">'
    +   '<div class="influencer__icon">'
    +     '<svg viewBox="0 0 24 24" width="22" height="22" fill="rgba(255,255,255,0.9)" stroke="none">'
    +       '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    +     '</svg>'
    +   '</div>'
    +   '<p class="sidebar__influencer-label" data-i18n="nav_influencer_label">Influencer?</p>'
    +   '<p class="sidebar__influencer-desc" data-i18n="nav_influencer_desc">Promote our apps and earn from every install.</p>'
    +   '<a href="' + L.login + '" class="btn-login' + (active === 'login' ? ' active' : '') + '">'
    +     '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">'
    +       '<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>'
    +       '<polyline points="10 17 15 12 10 7"/>'
    +       '<line x1="15" y1="12" x2="3" y2="12"/>'
    +     '</svg>'
    +     '<span data-i18n="btn_signin">Sign In</span>'
    +   '</a>'
    + '</div>'

    + '<div class="sidebar__lang">'
    +   '<button class="lang-current" id="langCurrentBtn" aria-label="Change language">'
    +     '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>'
    +     '<span class="lang-current-code" id="langCurrentCode">EN</span>'
    +     '<svg class="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>'
    +   '</button>'
    +   '<div class="lang-dropdown" id="langDropdown">'
    +     '<button class="lang-opt" data-lang="en">EN<span>English</span></button>'
    +     '<button class="lang-opt" data-lang="ru">RU<span>Русский</span></button>'
    +     '<button class="lang-opt" data-lang="es">ES<span>Español</span></button>'
    +     '<button class="lang-opt" data-lang="de">DE<span>Deutsch</span></button>'
    +     '<button class="lang-opt" data-lang="fr">FR<span>Français</span></button>'
    +     '<button class="lang-opt" data-lang="hi">HI<span>हिन्दी</span></button>'
    +     '<button class="lang-opt" data-lang="it">IT<span>Italiano</span></button>'
    +     '<button class="lang-opt" data-lang="pt">PT<span>Português</span></button>'
    +     '<button class="lang-opt" data-lang="zh">ZH<span>中文</span></button>'
    +   '</div>'
    + '</div>';

  var aside = document.getElementById('sidebar');
  if (aside) {
    aside.innerHTML = sidebarHTML;
  }
})();
