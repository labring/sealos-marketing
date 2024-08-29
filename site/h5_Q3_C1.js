// JavaScript Document
// Banner视频
const video = document.getElementById('myVideo')
const playButton = document.querySelector('.play-button')
const playPauseButton = document.querySelector('.play-pause-button')
const progressBar = document.querySelector('.progress-bar')
const progressBarFilled = document.querySelector('.progress-bar-filled')

function togglePlay () {
  if (video.paused) {
    video.play()
    playPauseButton.src = './site/zantingico.png'
  } else {
    video.pause()
    playPauseButton.src = './site/bofangico.png'
  }
}

function updateProgressBar () {
  progressBarFilled.style.width = (video.currentTime / video.duration * 100) + '%'
}

playButton.addEventListener('click', () => {
  video.play()
  playButton.remove()
})

playPauseButton.addEventListener('click', togglePlay)

// 视频播放或暂停时更新进度条左侧的按钮图标
video.addEventListener('play', () => {
  playPauseButton.src = './site/zantingico.png'
})

video.addEventListener('pause', () => {
  playPauseButton.src = './site/bofangico.png'
})

video.addEventListener('timeupdate', updateProgressBar)

progressBar.addEventListener('click', (event) => {
  video.currentTime = (event.offsetX / progressBar.offsetWidth) * video.duration
})
// Banner视频 end

// 导航栏下拉显示
window.onscroll = function () {
  const myDiv = document.getElementById("myDiv")
  const divTop = myDiv.offsetTop // 获取 div 距离页面顶部的距离

  if (window.pageYOffset > divTop) {
    myDiv.classList.add("fixed") // 添加 "fixed" 类
  } else {
    myDiv.classList.remove("fixed") // 移除 "fixed" 类
  }
}

// 导航栏下拉显示 end

// 以应用为中心的企业级容器云按钮
const buttons = document.querySelectorAll('button')
const contents = document.querySelectorAll('.content')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetContentId = button.dataset.target
    const targetContent = document.getElementById(targetContentId)

    // 移除所有按钮和内容的 active 类
    buttons.forEach(btn => btn.classList.remove('active'))
    contents.forEach(content => content.classList.remove('active'))

    // 为当前按钮和目标内容添加 active 类
    button.classList.add('active')
    targetContent.classList.add('active')
  })
})

// 以应用为中心的企业级容器云按钮 end


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
      newUrl += (newUrl.includes('?') ? '&' : '?') + 's=bd-sealos-marketing-0'

      // 在新窗口中打开修改后的URL
      window.open(newUrl, '_blank')
    })
  })
});






