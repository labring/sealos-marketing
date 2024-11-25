document.addEventListener('DOMContentLoaded', function () {
  console.log('sem is loaded')
  // 选择所有的 a 标签，而不是仅限于 .login-link
  var links = document.querySelectorAll('a')


  links.forEach(function (link) {
    link.addEventListener('click', function (e) {

      var baseUrl = this.getAttribute('href')

      console.log(baseUrl, 'baseUrl')

      // 如果链接不存在或是锚点链接，则不处理
      if (!baseUrl || baseUrl.startsWith('#')) {
        return
      }

      e.preventDefault()

      var urlParams = new URLSearchParams(window.location.search)
      var bdVid = urlParams.get('bd_vid')
      var kValue = urlParams.get('k')

      var newUrl = baseUrl
      if (bdVid) {
        newUrl += (baseUrl.includes('?') ? '&' : '?') + 'bd_vid=' + encodeURIComponent(bdVid)
      }

      if (kValue) {
        newUrl += (newUrl.includes('?') ? '&' : '?') + 'k=' + encodeURIComponent(kValue)
      }

      newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-appstore'

      const target = baseUrl.includes('hzh.sealos.run') || baseUrl.includes('mp.weixin.qq.com') ? '_blank' : '_self'
      window.open(newUrl, target)
    })

  })
})