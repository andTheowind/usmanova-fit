(function () {
  'use strict';

  function init() {
    // Gallery hint fade
    var track = document.getElementById('galleryTrack');
    var hint = document.querySelector('.about__gallery-hint');
    if (track && hint) {
      track.addEventListener('scroll', function () {
        hint.style.opacity = track.scrollLeft > 0 ? '0' : '1';
      });
    }

    // Smooth scroll CTA
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action="scroll"]');
      if (!btn) return;
      var target = document.querySelector(btn.getAttribute('data-target'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 20,
        behavior: 'smooth'
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
