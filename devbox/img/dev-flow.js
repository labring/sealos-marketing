// 存储视频URL和静态图像URL
const imageCache = {};

// 开发流程步骤组件交互
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM加载完成，初始化开发流程组件');
  
  // 获取所有步骤和图片元素
  const devFlowSteps = document.querySelectorAll('.dev-flow-step');
  const devFlowImages = document.querySelectorAll('.dev-flow-image');
  
  console.log('找到步骤元素:', devFlowSteps.length);
  console.log('找到图片元素:', devFlowImages.length);
  
  // 创建lightbox元素
  createLightbox();
  
  // 初始化图片缓存
  devFlowImages.forEach(imageDiv => {
    const step = imageDiv.dataset.step;
    const img = imageDiv.querySelector('img');
    const videoSrc = imageDiv.dataset.videoSrc;
    const staticSrc = img ? img.src : null;
    
    // 缓存图片URL和视频URL
    imageCache[step] = {
      video: videoSrc,
      static: staticSrc
    };
    
    console.log(`媒体缓存 [步骤${step}]:`, imageCache[step]);
  });
  
  // 为所有图片添加点击事件
  document.querySelectorAll('.dev-flow-image img, .dev-flow-image video').forEach(media => {
    // 设置鼠标指针样式，提示可点击
    media.style.cursor = 'pointer';
    
    // 移除可能存在的旧事件监听器
    media.removeEventListener('click', handleMediaClick);
    
    // 添加新的点击事件
    media.addEventListener('click', handleMediaClick);
    console.log('为媒体添加点击事件:', media.src || (media.querySelector('source') ? media.querySelector('source').src : 'unknown'));
  });
  
  // 媒体点击处理函数
  function handleMediaClick(e) {
    const mediaSrc = this.src || (this.querySelector('source') ? this.querySelector('source').src : null);
    console.log('媒体被点击:', mediaSrc);
      
    // 检查父元素是否是活跃的
    const parentDiv = this.closest('.dev-flow-image');
    if (parentDiv && parentDiv.classList.contains('active')) {
      console.log('显示lightbox，媒体源:', mediaSrc);
      
      // 获取当前步骤
      const step = parentDiv.dataset.step;
      
      // 优先显示视频版本，如果没有则显示静态图
      if (imageCache[step] && imageCache[step].video) {
        showVideoLightbox(imageCache[step].video, this.alt || '步骤' + step);
      } else if (mediaSrc) {
        showLightbox(mediaSrc, this.alt || '步骤' + step);
      }
    } else {
      console.log('媒体父元素不是活跃状态，不显示lightbox');
    }
  }
  
  // 初始化第一个步骤为激活状态
  if (devFlowSteps.length > 0) {
    devFlowSteps[0].classList.add('active');
    
    // 确保第一个图片/视频显示
    if (devFlowImages.length > 0) {
      const firstImage = devFlowImages[0];
      firstImage.classList.add('active');
      
      // 为第一个活跃元素延迟加载视频
      loadActiveMedia(firstImage);
    }
  }
  
  // 为每个步骤添加点击事件
  devFlowSteps.forEach(step => {
    step.addEventListener('click', function() {
      const stepNum = this.dataset.step;
      console.log('步骤被点击:', stepNum);
      
      // 从所有步骤和图像中移除active类
      document.querySelectorAll('.dev-flow-step, .dev-flow-image').forEach(el => {
        el.classList.remove('active');
        
        // 如果这是图像元素，恢复为静态图片
        if (el.classList.contains('dev-flow-image')) {
          resetToStaticMedia(el);
        }
      });
      
      // 为点击的步骤和相应的图像添加active类
      this.classList.add('active');
      const activeImage = document.querySelector(`.dev-flow-image-${stepNum}`);
      if (activeImage) {
        activeImage.classList.add('active');
        console.log('激活图片元素:', `.dev-flow-image-${stepNum}`);
        
        // 加载动态媒体（视频）
        loadActiveMedia(activeImage);
      }
    });
  });
  
  // 加载活跃元素的媒体（视频）
  function loadActiveMedia(activeElement) {
    const step = activeElement.dataset.step;
    
    console.log('开始加载步骤', step, '的媒体内容');
    
    // 使用视频
    if (imageCache[step] && imageCache[step].video) {
      const videoSrc = imageCache[step].video;
      // 添加时间戳参数，避免缓存问题
      const videoSrcWithTimestamp = videoSrc + '?t=' + new Date().getTime();
      console.log('加载视频:', videoSrcWithTimestamp);
      
      // 获取已有的视频元素和图片元素
      const video = activeElement.querySelector('video');
      const img = activeElement.querySelector('img');
      
      if (video) {
        // 隐藏图片，显示视频
        if (img) img.style.display = 'none';
        
        // 更新视频源以避免缓存问题
        const source = video.querySelector('source');
        if (source) {
          source.src = videoSrcWithTimestamp;
        } else {
          const newSource = document.createElement('source');
          newSource.src = videoSrcWithTimestamp;
          newSource.type = 'video/mp4';
          video.appendChild(newSource);
        }
        
        // 重置视频并重新加载
        video.pause();
        video.currentTime = 0;
        video.load();
        video.style.display = 'block';
        
        // 尝试播放视频
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            console.log('视频播放成功:', videoSrc);
          }).catch(err => {
            console.error('视频播放失败:', err);
            // 如果视频播放失败，显示静态图片
            if (img) img.style.display = 'block';
            video.style.display = 'none';
          });
        }
      }
    } else {
      // 如果没有视频，显示静态图片
      const img = activeElement.querySelector('img');
      const video = activeElement.querySelector('video');
      
      if (img) img.style.display = 'block';
      if (video) video.style.display = 'none';
    }
  }
  
  // 显示静态图片（作为视频的后备选项）
  function showStaticImage(activeElement, step, loadingIndicator) {
    const img = activeElement.querySelector('img');
    if (img && imageCache[step] && imageCache[step].static) {
      img.style.display = 'block';
      
      // 图片已经加载，移除加载指示器
      if (loadingIndicator && loadingIndicator.parentNode) {
        loadingIndicator.parentNode.removeChild(loadingIndicator);
      }
    } else {
      // 如果静态图片也不存在，移除加载指示器
      if (loadingIndicator && loadingIndicator.parentNode) {
        loadingIndicator.parentNode.removeChild(loadingIndicator);
      }
    }
    
    // 隐藏可能存在的视频元素
    const video = activeElement.querySelector('video');
    if (video) video.style.display = 'none';
  }
  
  // 重置元素为静态图片
  function resetToStaticMedia(element) {
    const step = element.dataset.step;
    
    // 隐藏视频，显示静态图片
    const video = element.querySelector('video');
    if (video) video.style.display = 'none';
    
    const img = element.querySelector('img');
    if (img && imageCache[step] && imageCache[step].static) {
      img.style.display = 'block';
      img.src = imageCache[step].static;
    }
  }
  
  // 添加hover预加载图片效果（仅预加载静态图片，不预加载视频）
  devFlowSteps.forEach(step => {
    step.addEventListener('mouseenter', function() {
      const stepNumber = this.getAttribute('data-step');
      
      // 预加载静态图片
      if (imageCache[stepNumber] && imageCache[stepNumber].static) {
        const preloadImg = new Image();
        preloadImg.src = imageCache[stepNumber].static;
      }
    });
  });
}); 

// 创建lightbox元素
function createLightbox() {
  console.log('创建lightbox元素');
  
  // 检查lightbox是否已存在，如果存在则先移除
  const existingLightbox = document.getElementById('media-lightbox');
  if (existingLightbox) {
    existingLightbox.remove();
  }
  
  // 创建lightbox容器
  const lightbox = document.createElement('div');
  lightbox.id = 'media-lightbox';
  lightbox.className = 'media-lightbox';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  lightbox.style.zIndex = '9999';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.display = 'none'; // 初始隐藏
  
  // 创建媒体容器
  const mediaContainer = document.createElement('div');
  mediaContainer.className = 'lightbox-content';
  mediaContainer.style.position = 'relative';
  mediaContainer.style.maxWidth = '90%';
  mediaContainer.style.maxHeight = '90%';
  
  // 创建图片元素
  const img = document.createElement('img');
  img.id = 'lightbox-img';
  img.style.maxWidth = '100%';
  img.style.maxHeight = '90vh';
  img.style.objectFit = 'contain';
  img.style.border = '2px solid white';
  img.style.borderRadius = '4px';
  img.style.display = 'none'; // 初始隐藏
  
  // 创建视频元素
  const video = document.createElement('video');
  video.id = 'lightbox-video';
  video.style.maxWidth = '100%';
  video.style.maxHeight = '90vh';
  video.style.objectFit = 'contain';
  video.style.border = '2px solid white';
  video.style.borderRadius = '4px';
  video.style.display = 'none'; // 初始隐藏
  video.controls = true;
  video.autoplay = true;
  
  // 创建标题元素
  const caption = document.createElement('div');
  caption.id = 'lightbox-caption';
  caption.style.color = 'white';
  caption.style.textAlign = 'center';
  caption.style.padding = '10px';
  caption.style.fontWeight = 'bold';
  
  // 创建关闭按钮
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '-30px';
  closeBtn.style.right = '0';
  closeBtn.style.color = 'white';
  closeBtn.style.fontSize = '30px';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.cursor = 'pointer';
  
  // 添加关闭事件
  closeBtn.onclick = function() {
    document.getElementById('media-lightbox').style.display = 'none';
    
    // 停止视频播放
    const lightboxVideo = document.getElementById('lightbox-video');
    if (lightboxVideo) lightboxVideo.pause();
    
    console.log('关闭lightbox');
  };
  
  // 点击lightbox背景也关闭
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      
      // 停止视频播放
      const lightboxVideo = document.getElementById('lightbox-video');
      if (lightboxVideo) lightboxVideo.pause();
      
      console.log('点击背景关闭lightbox');
    }
  };
  
  // 组合元素
  mediaContainer.appendChild(img);
  mediaContainer.appendChild(video);
  mediaContainer.appendChild(closeBtn);
  lightbox.appendChild(mediaContainer);
  lightbox.appendChild(caption);
  
  // 添加到body
  document.body.appendChild(lightbox);
  console.log('lightbox已添加到页面');
  
  // 添加按键监听，按ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('media-lightbox').style.display !== 'none') {
      document.getElementById('media-lightbox').style.display = 'none';
      
      // 停止视频播放
      const lightboxVideo = document.getElementById('lightbox-video');
      if (lightboxVideo) lightboxVideo.pause();
      
      console.log('按ESC键关闭lightbox');
    }
  });
}

// 显示图片lightbox
function showLightbox(imgSrc, imgAlt) {
  console.log('显示图片lightbox，图片源:', imgSrc);
  
  const lightbox = document.getElementById('media-lightbox');
  if (!lightbox) {
    console.error('找不到lightbox元素，重新创建');
    createLightbox();
  }
  
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const caption = document.getElementById('lightbox-caption');
  
  // 隐藏视频，显示图片
  if (lightboxVideo) lightboxVideo.style.display = 'none';
  if (lightboxImg) lightboxImg.style.display = 'block';
  
  // 设置加载指示器
  lightbox.style.display = 'flex';
  lightboxImg.style.opacity = '0.2';
  caption.textContent = '加载中...';
  
  // 设置图片源和标题
  lightboxImg.onload = function() {
    lightboxImg.style.opacity = '1';
    caption.textContent = imgAlt || '';
  };
  
  lightboxImg.src = imgSrc;
}

// 显示视频lightbox
function showVideoLightbox(videoSrc, videoAlt) {
  console.log('显示视频lightbox，视频源:', videoSrc);
  
  // 添加时间戳参数，避免缓存问题
  const videoSrcWithTimestamp = videoSrc + '?t=' + new Date().getTime();
  
  const lightbox = document.getElementById('media-lightbox');
  if (!lightbox) {
    console.error('找不到lightbox元素，重新创建');
    createLightbox();
  }
  
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const caption = document.getElementById('lightbox-caption');
  
  // 隐藏图片，显示视频
  if (lightboxImg) lightboxImg.style.display = 'none';
  if (lightboxVideo) {
    lightboxVideo.style.display = 'block';
    
    // 清除现有的source元素
    while (lightboxVideo.firstChild) {
      lightboxVideo.removeChild(lightboxVideo.firstChild);
    }
    
    // 创建新的source元素
    const source = document.createElement('source');
    source.src = videoSrcWithTimestamp;
    source.type = 'video/mp4';
    lightboxVideo.appendChild(source);
    
    // 重置视频并重新加载
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.load();
    
    // 尝试播放视频
    const playPromise = lightboxVideo.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        console.log('Lightbox视频播放成功');
      }).catch(err => {
        console.error('Lightbox视频播放失败:', err);
      });
    }
  }
  
  // 显示lightbox和设置标题
  lightbox.style.display = 'flex';
  caption.textContent = videoAlt || '';
} 