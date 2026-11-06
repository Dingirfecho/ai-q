/* ai-q.fit · Spotlight: shows one solution at a time and rotates.
   - Pauses on hover/focus, when the tab is hidden, or with the pause button.
   - Area filters ([data-spot-filter]) limit which solutions rotate.
   - Picking a solution or a filter stops the rotation so it can be read.
   - A URL hash matching a slide's data-spot-id (e.g. #bancos) opens it. */
(function () {
  function init(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-spot-slide]'));
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[data-spot-go]'));
    var chips = Array.prototype.slice.call(root.querySelectorAll('[data-spot-filter]'));
    var bar = root.querySelector('.spotlight-progress span');
    var counter = root.querySelector('[data-spot-current]');
    var total = root.querySelector('[data-spot-total]');
    var pauseBtn = root.querySelector('[data-spot-pause]');
    var interval = parseInt(root.getAttribute('data-interval'), 10) || 7000;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var visible = slides.map(function (_, k) { return k; });  // slide indexes in the current filter
    var pos = 0, elapsed = 0, last = null, hovering = false, stopped = reduced;
    if (slides.length < 2) return;

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function paint() { if (bar) bar.style.width = (stopped ? 0 : Math.min(elapsed / interval, 1) * 100) + '%'; }
    function show(p) {
      pos = (p + visible.length) % visible.length;
      var cur = visible[pos];
      slides.forEach(function (s, k) {
        s.classList.toggle('is-active', k === cur);
        s.setAttribute('aria-hidden', k === cur ? 'false' : 'true');
        s.querySelectorAll('a').forEach(function (a) { a.tabIndex = k === cur ? 0 : -1; });
      });
      tabs.forEach(function (t, k) { t.setAttribute('aria-current', k === cur ? 'true' : 'false'); });
      if (counter) counter.textContent = pad(pos + 1);
      if (total) total.textContent = pad(visible.length);
      if (!reduced) countUp(slides[cur]);
      elapsed = 0;
      paint();
    }
    // Results with a single number (">99%", "365", "< 30 s") count up from zero.
    // Ranges and mixed values ("8–15 hs", "24/7") are left as they are.
    function countUp(slide) {
      // Keep screen readers from announcing every intermediate number.
      slide.setAttribute('aria-busy', 'true');
      clearTimeout(slide._busy);
      slide._busy = setTimeout(function () { slide.removeAttribute('aria-busy'); }, 1400);
      slide.querySelectorAll('.spot-kpi-v').forEach(function (el, k) {
        var final = el.getAttribute('data-final');
        if (final === null) { final = el.textContent; el.setAttribute('data-final', final); }
        var m = final.match(/^(\D*)(\d+)(\D*)$/);
        if (!m || +m[2] < 2) return;
        var target = +m[2], start = null, delay = 250 + k * 80, dur = 900;
        if (el._raf) cancelAnimationFrame(el._raf);
        el.textContent = m[1] + '0' + m[3];
        function step(t) {
          if (start === null) start = t + delay;
          var x = Math.max(0, Math.min((t - start) / dur, 1));
          var eased = 1 - Math.pow(1 - x, 3);
          el.textContent = m[1] + Math.round(target * eased) + m[3];
          if (x < 1) el._raf = requestAnimationFrame(step); else el.textContent = final;
        }
        el._raf = requestAnimationFrame(step);
      });
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
    function filter(cat) {
      visible = [];
      slides.forEach(function (s, k) { if (cat === 'all' || s.getAttribute('data-cat') === cat) visible.push(k); });
      tabs.forEach(function (t, k) { t.parentNode.hidden = visible.indexOf(k) < 0; });
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-spot-filter') === cat ? 'true' : 'false'); });
      show(0);
    }
    function tick(t) {
      if (last !== null && !stopped && !hovering && !document.hidden) {
        elapsed += t - last;
        if (elapsed >= interval) show(pos + 1); else paint();
      }
      last = t;
      requestAnimationFrame(tick);
    }
    function openById(id) {
      for (var k = 0; k < slides.length; k++) {
        if (slides[k].getAttribute('data-spot-id') === id) {
          filter('all');
          show(k);
          setStopped(true);
          return true;
        }
      }
      return false;
    }

    root.querySelector('[data-spot-prev]').addEventListener('click', function () { show(pos - 1); });
    root.querySelector('[data-spot-next]').addEventListener('click', function () { show(pos + 1); });
    if (pauseBtn) pauseBtn.addEventListener('click', function () { setStopped(!stopped); });
    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { show(visible.indexOf(k)); setStopped(true); });
    });
    chips.forEach(function (c) {
      c.addEventListener('click', function () { filter(c.getAttribute('data-spot-filter')); setStopped(true); });
    });
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
      if (Math.abs(dx) > 50) show(dx < 0 ? pos + 1 : pos - 1);
    });

    setStopped(stopped);
    show(0);
    // Scroll so the dashboard sits just below the sticky header.
    function reveal(smooth) {
      var header = document.querySelector('.site-header');
      var offset = (header ? header.offsetHeight : 0) + 16;
      var y = root.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' });
    }
    var hash = decodeURIComponent((location.hash || '').slice(1));
    if (hash && openById(hash)) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      window.addEventListener('load', function () { reveal(false); });
    }
    window.addEventListener('hashchange', function () {
      if (openById(decodeURIComponent(location.hash.slice(1)))) reveal(true);
    });
    requestAnimationFrame(tick);
  }
  function boot() { document.querySelectorAll('[data-spotlight]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
