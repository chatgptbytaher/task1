
    (function () {
      function initSpeakerRail() {
        var section = document.querySelector('.eu-speakers-horizontal'); if (!section || section.dataset.railReady) return; section.dataset.railReady = '1';
        var track = section.querySelector('.eu-speakers-track'), viewport = section.querySelector('.eu-speakers-viewport'), bar = section.querySelector('.eu-speakers-progress span');
        var prev = section.querySelector('.eu-speaker-prev'), next = section.querySelector('.eu-speaker-next'); if (!track || !viewport) return;
        var maxX = function () { return Math.max(0, track.scrollWidth - viewport.clientWidth + viewport.getBoundingClientRect().left * 0); };
        var tween = null, st = null;
        function setup() {
          if (tween) { tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); tween = null; }
          if (!window.gsap || !window.ScrollTrigger) { track.style.transform = 'none'; return; }
          gsap.registerPlugin(ScrollTrigger);
          var distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
          if (distance < 8) { track.style.transform = 'none'; return; }
          tween = gsap.to(track, { x: -distance, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: function () { return '+=' + distance; }, pin: true, scrub: 1.1, invalidateOnRefresh: true, onUpdate: function (self) { if (bar) gsap.set(bar, { scaleX: Math.max(.08, self.progress) }); } } });
          ScrollTrigger.refresh();
        }
        function nudge(dir) { if (!tween || !tween.scrollTrigger) return; var trigger = tween.scrollTrigger; var target = gsap.utils.clamp(trigger.start, trigger.end, window.scrollY + dir * Math.max(220, viewport.clientWidth * .72)); window.scrollTo({ top: target, behavior: 'smooth' }); }
        if (prev) prev.addEventListener('click', function () { nudge(-1) }); if (next) next.addEventListener('click', function () { nudge(1) });
        setup(); var resizeTimer; window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(setup, 180) });
        window.addEventListener('load', function () { if (window.ScrollTrigger) ScrollTrigger.refresh() }, { once: true });
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSpeakerRail); else initSpeakerRail();
    })();
  