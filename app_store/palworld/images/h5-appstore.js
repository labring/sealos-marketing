// 百度竞价转化追踪
document.addEventListener('DOMContentLoaded', function () {
    var loginLinks = document.querySelectorAll('.login-link')
  
    loginLinks.forEach(function (loginLink) {
      loginLink.addEventListener('click', function (e) {
        e.preventDefault() // 阻止默认的链接跳转行为
  
        var baseUrl = this.getAttribute('href')
  
        // 从当前页面URL获取bd_vid参数
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
  
  
        // 添加 s 参数
        newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-appstore'
  
        // 在新窗口中打开修改后的URL
        window.open(newUrl, '_blank')
      })
    })
})
