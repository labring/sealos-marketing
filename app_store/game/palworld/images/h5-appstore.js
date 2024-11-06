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
        newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-appstore-game-Paru'
  
        // 在新窗口中打开修改后的URL
        window.open(newUrl, '_blank')
      })
    })
})

// 检查完成。这段代码实现了以下功能：
// 1. 为所有类名为 'login-link' 的元素添加点击事件监听器
// 2. 阻止默认的链接跳转行为
// 3. 获取原始链接 URL
// 4. 从当前页面 URL 获取 bd_vid 和 k 参数
// 5. 如果存在这些参数，将它们添加到新的 URL 中
// 6. 添加固定的 s 参数
// 7. 在新窗口中打开修改后的 URL
// 代码逻辑看起来是正确的，能够实现预期功能
