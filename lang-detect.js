/* AI-Q · Language auto-detect
   - First visit: infers ES/EN from the browser's language and, if this
     page isn't in that language, redirects once to the sibling page
     declared in data-alt-href.
   - Any later visit respects whatever the person last chose (manually
     or automatically) via localStorage — it never fights the toggle.
   - Manual toggle links call AIQ_setLangPref('es'|'en') on click,
     before navigating, so the destination page never bounces back.
*/
(function () {
  var STORAGE_KEY = 'aiq_lang_pref';
  var html = document.documentElement;
  var currentLang = (html.getAttribute('lang') || 'es').slice(0, 2);
  var altHref = html.getAttribute('data-alt-href');

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  var preferred = saved;
  if (!preferred) {
    var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    preferred = browserLang.indexOf('es') === 0 ? 'es' : 'en';
    try { localStorage.setItem(STORAGE_KEY, preferred); } catch (e) {}
  }

  if (preferred !== currentLang && altHref) {
    window.location.replace(altHref);
  }

  // Exposed so manual ES/EN links can lock in an explicit choice
  // before navigating to the sibling page.
  window.AIQ_setLangPref = function (lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  };
})();
