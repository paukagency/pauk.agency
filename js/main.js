// ============================================================
//  PAUK.AGENCY — Main JS
// ============================================================

(function () {
  'use strict';

  // ---- Sidebar refs ----
  const sidebar    = document.getElementById('sidebar');
  const main       = document.getElementById('main');

  // ---- Burger (mobile) ----
  const burgerBtn = document.getElementById('burgerBtn');
  const backdrop  = document.getElementById('sidebarBackdrop');

  function openMenu() {
    sidebar.classList.add('mobile-open');
    burgerBtn.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', true);
    if (backdrop) backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('mobile-open');
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', false);
    if (backdrop) backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (burgerBtn && sidebar) {
    burgerBtn.addEventListener('click', () => {
      sidebar.classList.contains('mobile-open') ? closeMenu() : openMenu();
    });

    // Close on backdrop click
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Close on nav item click (navigate away)
    sidebar.addEventListener('click', (e) => {
      if (e.target.closest('.nav-item') || e.target.closest('.btn-login')) {
        closeMenu();
      }
    });
  }

  // ---- Active nav item (highlight current section) ----
  const navItems = document.querySelectorAll('.nav-item[data-page]');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((item) => {
              item.classList.toggle(
                'active',
                item.getAttribute('href') === '#' + entry.target.id ||
                  (entry.target.id === 'home' && item.getAttribute('href') === 'index.html')
              );
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ---- Smooth entrance animations ----
  const animItems = document.querySelectorAll(
    '.stat-card, .step-card, .app-card, .benefit-card'
  );

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeUp 0.4s ease forwards';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animItems.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.animationDelay = `${i * 40}ms`;
      fadeObserver.observe(el);
    });
  }

})();
