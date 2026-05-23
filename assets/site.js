/* =========================================================================
   site.js — comportement partagé du portfolio
   - Toggle thème clair / sombre (avec persistance localStorage)
   - Curseur custom (ring + dot, mix-blend-mode difference)
   - Léger parallax du portrait au mousemove dans la hero
   - Animations reveal au scroll (IntersectionObserver)
   - Année courante dans le footer
   ========================================================================= */
(() => {
  'use strict';

  /* ----------------------------------------------------------------------
     1. Thème — clair / sombre
     ---------------------------------------------------------------------- */
  const THEME_KEY = 'cyril-theme';
  const root = document.documentElement;

  // Appliquer le thème stocké ou la préférence système (déjà fait inline
  // dans le <head> pour éviter le flash, on synchronise juste le toggle)
  function currentTheme() {
    return root.getAttribute('data-theme') || 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }

  // Branche tous les toggles présents dans la page
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  /* ----------------------------------------------------------------------
     2. Curseur custom — anneau + point, blend mode difference
     ---------------------------------------------------------------------- */
  // On ne l'active que sur les devices avec hover fin (souris)
  const hasFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (hasFineHover) {
    root.classList.add('has-custom-cursor');

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    // Position cible vs position interpolée (anneau lissé, dot précis)
    let tx = -100, ty = -100;
    let rx = -100, ry = -100;

    window.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      ring.classList.add('is-visible');
      dot.classList.add('is-visible');
      // Dot suit instantanément
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    });

    window.addEventListener('pointerleave', () => {
      ring.classList.remove('is-visible');
      dot.classList.remove('is-visible');
    });

    function loop() {
      // Lissage exponentiel
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // États hover — sur tous les éléments interactifs
    const HOVER_SEL = 'a, button, [data-cursor="hover"], .filter-btn, .theme-toggle, .btn, .proj-card, .sec-item';
    const TEXT_SEL  = 'input, textarea, [contenteditable="true"]';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(TEXT_SEL))       ring.classList.add('is-text');
      else if (e.target.closest(HOVER_SEL)) ring.classList.add('is-hover');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(TEXT_SEL))       ring.classList.remove('is-text');
      else if (e.target.closest(HOVER_SEL)) ring.classList.remove('is-hover');
    });
  }

  /* ----------------------------------------------------------------------
     3. Parallax portrait — léger déplacement au mousemove (hero only)
     ---------------------------------------------------------------------- */
  const portrait = document.querySelector('.hero-portrait');
  const blob     = document.querySelector('.hero-blob');
  const heroEl   = document.querySelector('.hero');
  if (portrait && heroEl && hasFineHover && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroEl.addEventListener('pointermove', (e) => {
      const r = heroEl.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width  - 0.5;
      const cy = (e.clientY - r.top)  / r.height - 0.5;
      // Le portrait bouge un peu plus que le blob (parallaxe)
      portrait.style.transform = `translate(${cx * -14}px, ${cy * -14}px)`;
      if (blob) blob.style.transform = `translate(${cx * 6}px, ${cy * 6}px)`;
    });
    heroEl.addEventListener('pointerleave', () => {
      portrait.style.transform = '';
      if (blob) blob.style.transform = '';
    });
  }

  /* ----------------------------------------------------------------------
     4. Reveal au scroll — apparition douce des blocs
     ---------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ----------------------------------------------------------------------
     5. Année courante (footer)
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ----------------------------------------------------------------------
     6. Filtres projets — page projets
     ---------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards  = document.querySelectorAll('.proj-card[data-cat]');
  if (filterBtns.length && projCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        filterBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
        projCards.forEach((card) => {
          const c = card.getAttribute('data-cat');
          const show = (cat === 'all') || (c && c.split(' ').includes(cat));
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ----------------------------------------------------------------------
     7. CV — bouton imprimer
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-print]').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });

  /* ----------------------------------------------------------------------
     8. Easter egg — Konami code pour basculer thème + console hello
     ---------------------------------------------------------------------- */
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kIdx = 0;
  window.addEventListener('keydown', (e) => {
    if (e.key === KONAMI[kIdx]) {
      kIdx++;
      if (kIdx === KONAMI.length) {
        setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
        document.documentElement.animate(
          [{ filter: 'invert(1) hue-rotate(180deg)' }, { filter: 'none' }],
          { duration: 700, easing: 'cubic-bezier(.2,.7,.3,1)' }
        );
        kIdx = 0;
      }
    } else { kIdx = 0; }
  });

  // Petit clin d'œil pour celles et ceux qui ouvrent la console
  console.log('%cSalut.', 'font: 600 16px Space Grotesk, sans-serif; color: #FFD400; background:#0F0F0F; padding:8px 14px;');
  console.log('%cDispo sur github.com/<placeholder> · fotozik.fr', 'font: 12px JetBrains Mono, monospace; color:#666;');
})();
