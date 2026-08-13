/* AI-Q · Language auto-detect
   - First visit: infers ES/EN/PT from the browser's language and, if this
     page isn't in that language, redirects once to the sibling page
     declared in data-lang-hrefs (a JSON map of {es,en,pt} -> href).
   - Any later visit respects whatever the person last chose (manually
     or automatically) via localStorage — it never fights the toggle.
   - Manual toggle links call AIQ_setLangPref('es'|'en'|'pt') on click,
     before navigating, so the destination page never bounces back.
   - Backwards compatible with the older single data-alt-href attribute
     (treated as the "other" language sibling) for any page not yet
     migrated to data-lang-hrefs.
*/
(function () {
  var STORAGE_KEY = 'aiq_lang_pref';
  var html = document.documentElement;
  var currentLang = (html.getAttribute('lang') || 'es').slice(0, 2);
  var hrefsRaw = html.getAttribute('data-lang-hrefs');
  var hrefs = null;
  if (hrefsRaw) {
    try { hrefs = JSON.parse(hrefsRaw); } catch (e) { hrefs = null; }
  }
  var altHref = html.getAttribute('data-alt-href');

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  var preferred = saved;
  if (!preferred) {
    var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    if (browserLang.indexOf('pt') === 0) preferred = 'pt';
    else if (browserLang.indexOf('es') === 0) preferred = 'es';
    else preferred = 'en';
    try { localStorage.setItem(STORAGE_KEY, preferred); } catch (e) {}
  }

  if (preferred !== currentLang) {
    if (hrefs && hrefs[preferred]) {
      window.location.replace(hrefs[preferred]);
    } else if (!hrefs && altHref) {
      // Legacy pages only know about one alternate language.
      window.location.replace(altHref);
    }
  }

  // Exposed so manual ES/EN/PT links can lock in an explicit choice
  // before navigating to the sibling page.
  window.AIQ_setLangPref = function (lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  };
})();
