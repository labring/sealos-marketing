function initializeLinkTracking() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var baseUrl = this.getAttribute('href');

      if (!baseUrl || baseUrl.startsWith('#')) {
        return;
      }

      var urlParams = new URLSearchParams(window.location.search);
      var bdVid = urlParams.get('bd_vid');
      var kValue = urlParams.get('k');

      var newUrl = baseUrl;
      if (bdVid) {
        newUrl += (baseUrl.includes('?') ? '&' : '?') + 'bd_vid=' + encodeURIComponent(bdVid);
      }

      if (kValue) {
        newUrl += (newUrl.includes('?') ? '&' : '?') + 'k=' + encodeURIComponent(kValue);
      }

      newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-appstore';

      window.open(newUrl, '_blank');
    });
  });
}

if (document.readyState === 'complete') {
  initializeLinkTracking();
} else {
  window.addEventListener('load', initializeLinkTracking);
}
