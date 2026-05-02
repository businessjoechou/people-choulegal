/**
 * 周全民眾版總入口 — Google Analytics GA4 共用載入器
 * stream 屬於「ChouLegal – Marketing」property（與 choulegal.com、ai.choulegal.com 共用）
 */
(function () {
  var id = 'G-9GHY6YF255';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
})();
