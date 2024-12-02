
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
// document.addEventListener('DOMContentLoaded', function () {
//   // 选择所有的 a 标签，而不是仅限于 .login-link
//   var links = document.querySelectorAll('a')

//   links.forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault()

//       var baseUrl = this.getAttribute('href')

//       // 如果链接不存在或是锚点链接，则不处理
//       if (!baseUrl || baseUrl.startsWith('#')) {
//         return
//       }

//       var urlParams = new URLSearchParams(window.location.search)
//       var bdVid = urlParams.get('bd_vid')
//       var kValue = urlParams.get('k')

//       var newUrl = baseUrl
//       if (bdVid) {
//         newUrl += (baseUrl.includes('?') ? '&' : '?') + 'bd_vid=' + encodeURIComponent(bdVid)
//       }

//       if (kValue) {
//         newUrl += (newUrl.includes('?') ? '&' : '?') + 'k=' + encodeURIComponent(kValue)
//       }

//       newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-appstore'

//       window.open(newUrl, '_blank')
//     })
//   })
// })
        // 添加滚动事件监听
        window.addEventListener('scroll', function () {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 0) { // 当滚动超过50px时
            navbar.classList.add('navbar-scrolled2');
          } else {
            navbar.classList.remove('navbar-scrolled2');
          }
        });
