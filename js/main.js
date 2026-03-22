/* ============================================================
   FEIFEI DENG — Portfolio
   Apple-style animations and navigation
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Navigation ── */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    var mobile = document.getElementById('mobileMenu');
    if (mobile) {
      var links = mobile.querySelectorAll('.nav-link');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () { nav.classList.remove('open'); });
      }
    }
  }

  /* ── Scroll Reveal (CSS-driven) ── */
  var els = document.querySelectorAll('.reveal');
  if (els.length && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── GSAP entrance animations ── */
  function initGSAP() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    gsap.from('.nav', { opacity: 0, duration: .8, ease: 'power2.out', delay: .1 });

    var heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) gsap.from(heroVisual, { opacity: 0, scale: .95, duration: 1, ease: 'power2.out', delay: .15 });

    var heroH = document.querySelector('.hero-heading');
    if (heroH) gsap.from(heroH, { opacity: 0, y: 20, duration: 1, ease: 'power2.out', delay: .25 });

    var heroD = document.querySelector('.hero-desc');
    if (heroD) gsap.from(heroD, { opacity: 0, y: 16, duration: 1, ease: 'power2.out', delay: .4 });

    var heroCta = document.querySelector('.hero-ctas');
    if (heroCta) gsap.from(heroCta, { opacity: 0, y: 12, duration: .9, ease: 'power2.out', delay: .55 });

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.tile').forEach(function (tile) {
        gsap.fromTo(tile,
          { opacity: 0, y: 40, scale: .97 },
          { opacity: 1, y: 0, scale: 1, duration: .8, ease: 'power2.out',
            scrollTrigger: { trigger: tile, start: 'top 90%' } });
      });

      var footer = document.querySelector('.footer');
      if (footer) {
        gsap.fromTo(footer, { opacity: 0 }, { opacity: 1, duration: .8, ease: 'power2.out',
          scrollTrigger: { trigger: footer, start: 'top 95%' } });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(initGSAP, 50); });
  } else {
    setTimeout(initGSAP, 50);
  }
})();
