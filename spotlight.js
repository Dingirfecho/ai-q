/* ai-q.fit · Spotlight: shows one featured solution at a time and rotates.
   Pauses on hover/focus, when the tab is hidden, or with the pause button. */
(function () {
  function init(root) {
    var slides = root.querySelectorAll('[data-spot-slide]');
    var tabs = root.querySelectorAll('[data-spot-go]');
    var bar = root.querySelector('.spotlight-progress span');
    var counter = root.querySelector('[data-spot-current]');
    var pauseBtn = root.querySelector('[data-spot-pause]');
    var interval = parseInt(root.getAttribute('data-interval'), 10) || 7000;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var i = 0, elapsed = 0, last = null, hovering = false, stopped = reduced;
    if (slides.length < 2) return;

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function paint() { if (bar) bar.style.width = (stopped ? 0 : Math.min(elapsed / interval, 1) * 100) + '%'; }
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        s.classList.toggle('is-active', k === i);
        s.setAttribute('aria-hidden', k === i ? 'false' : 'true');
        s.querySelectorAll('a').forEach(function (a) { a.tabIndex = k === i ? 0 : -1; });
      });
      tabs.forEach(function (t, k) { t.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      if (counter) counter.textContent = pad(i + 1);
      elapsed = 0;
      paint();
    }
    function setStopped(v) {
      stopped = v;
      if (pauseBtn) {
        pauseBtn.textContent = v ? '▶' : '❚❚';
        pauseBtn.setAttribute('aria-pressed', v ? 'true' : 'false');
      }
      elapsed = 0;
      paint();
    }
    function tick(t) {
      if (last !== null && !stopped && !hovering && !document.hidden) {
        elapsed += t - last;
        if (elapsed >= interval) show(i + 1); else paint();
      }
      last = t;
      requestAnimationFrame(tick);
    }

    root.querySelector('[data-spot-prev]').addEventListener('click', function () { show(i - 1); });
    root.querySelector('[data-spot-next]').addEventListener('click', function () { show(i + 1); });
    if (pauseBtn) pauseBtn.addEventListener('click', function () { setStopped(!stopped); });
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { show(k); }); });
    root.addEventListener('mouseenter', function () { hovering = true; });
    root.addEventListener('mouseleave', function () { hovering = false; });
    root.addEventListener('focusin', function () { hovering = true; });
    root.addEventListener('focusout', function () { hovering = false; });

    // Swipe on touch screens
    var x0 = null;
    root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) show(dx < 0 ? i + 1 : i - 1);
    });

    setStopped(stopped);
    show(0);
    requestAnimationFrame(tick);
  }
  function boot() { document.querySelectorAll('[data-spotlight]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
