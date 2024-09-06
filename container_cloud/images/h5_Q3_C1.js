
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('myVideo')
  const playPauseButton = document.getElementById('playPauseButton')
  const progressBar = document.getElementById('progressBar')
  const currentTime = document.getElementById('currentTime')
  const duration = document.getElementById('duration')
  const fullscreenButton = document.getElementById('fullscreenButton')
  const videoContainer = document.querySelector('.video-container')

  function togglePlayPause (event) {
    event.stopPropagation() // 阻止事件冒泡
    if (video.paused) {
      video.play()
      playPauseButton.textContent = '❚❚'
    } else {
      video.pause()
      playPauseButton.textContent = '▶'
    }
  }

  function updateProgressBar () {
    const progress = (video.currentTime / video.duration) * 100
    progressBar.value = progress
    currentTime.textContent = formatTime(video.currentTime)
  }

  function formatTime (time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  function toggleFullscreen (event) {
    event.stopPropagation() // 阻止事件冒泡
    if (!document.fullscreenElement) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen()
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen()
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen()
      } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  playPauseButton.addEventListener('click', togglePlayPause)
  video.addEventListener('timeupdate', updateProgressBar)
  video.addEventListener('loadedmetadata', function () {
    duration.textContent = formatTime(video.duration)
  })
  progressBar.addEventListener('input', function () {
    const time = (progressBar.value / 100) * video.duration
    video.currentTime = time
  })
  fullscreenButton.addEventListener('click', toggleFullscreen)

  // 防止控制栏上的点击事件触发视频播放/暂停
  document.querySelector('.video-controls').addEventListener('click', function (event) {
    event.stopPropagation()
  })

  // 点击视频区域播放/暂停
  videoContainer.addEventListener('click', togglePlayPause)
})



document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabPanes = document.querySelectorAll('.tab-pane')

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab')

      tabButtons.forEach(btn => btn.classList.remove('active'))
      tabPanes.forEach(pane => pane.classList.remove('active'))

      this.classList.add('active')
      document.getElementById(tabId).classList.add('active')

      // 添加点击效果
      this.style.transform = 'scale(0.95)'
      setTimeout(() => {
        this.style.transform = 'scale(1)'
      }, 100)
    })
  })
})

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
      newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-1'

      // 在新窗口中打开修改后的URL
      window.open(newUrl, '_blank')
    })
  })
})
