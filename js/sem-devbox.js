document.addEventListener('DOMContentLoaded', function () {
  console.log('sem is loaded')
  
  // 检查并更新URL中的s参数为"Devbox"
  function updateSParameter() {
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    
    // 如果URL中s参数不是"首页"，则更新它
    if (urlObj.searchParams.get('s') !== 'Devbox') {
      urlObj.searchParams.set('s', 'Devbox');
      // 使用history.replaceState避免创建新的历史记录
      window.history.replaceState({}, '', urlObj.toString());
    }
  }

  function getAdClickData(urlParams) {
		// baidu ad
		const bdVid = urlParams.get('bd_vid');
		if (bdVid) {
			return {
				clickId: bdVid,
				urlParam: 'bd_vid',
			};
		}

		// bing ad
		const msclkid = urlParams.get('msclkid');
		if (msclkid) {
			return {
				clickId: msclkid,
				urlParam: 'msclkid',
			};
		}

		return null;
  }

  // 页面加载时更新s参数
  updateSParameter();
  
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
      var newUrl = baseUrl;

      var adClickData = getAdClickData(urlParams);
      if (adClickData) {
        newUrl += (baseUrl.includes('?') ? '&' : '?') + adClickData.urlParam + '=' + encodeURIComponent(adClickData.clickId);
      }

      var kValue = urlParams.get('k')
      if (kValue) {
        newUrl += (newUrl.includes('?') ? '&' : '?') + 'k=' + encodeURIComponent(kValue)
      }

      var searchValue = urlParams.get('search')
      if (searchValue) {
        newUrl += (newUrl.includes('?') ? '&' : '?') + 'search=' + encodeURIComponent(searchValue)
      }

      newUrl += (newUrl.includes('?') ? '&' : '?') + 's=Devbox'

      const arr = ['cloud.sealos.run','mp.weixin.qq.com','template.cloud.sealos.run','sealos.run/docs','feishu.cn','bilibili.com']

      const target = arr.some(item => baseUrl.includes(item)) ? '_blank' : '_self'
      window.open(newUrl, target)
    })

  })
})