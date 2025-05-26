// 存储原始GIF URL和静态图像URL
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
    const gifSrc = imageDiv.dataset.gifSrc;
    const staticSrc = img.src;
    
    // 缓存图片URL
      imageCache[step] = {
      gif: gifSrc,
      static: staticSrc
    };
    
    console.log(`图片缓存 [步骤${step}]:`, imageCache[step]);
  });
  
  // 为所有图片添加点击事件
  document.querySelectorAll('.dev-flow-image img').forEach(img => {
    // 设置鼠标指针样式，提示可点击
    img.style.cursor = 'pointer';
    
    // 移除可能存在的旧事件监听器
    img.removeEventListener('click', handleImageClick);
    
    // 添加新的点击事件
    img.addEventListener('click', handleImageClick);
    console.log('为图片添加点击事件:', img.src);
  });
  
  // 图片点击处理函数
  function handleImageClick(e) {
    console.log('图片被点击:', this.src);
      
    // 检查父元素是否是活跃的
    const parentDiv = this.closest('.dev-flow-image');
    if (parentDiv && parentDiv.classList.contains('active')) {
      console.log('显示lightbox，图片源:', this.src);
      
      // 获取当前加载的图片URL（可能是GIF或静态图）
      const step = parentDiv.dataset.step;
      const currentSrc = this.src;
      
      // 优先显示GIF版本
      if (imageCache[step] && imageCache[step].gif) {
        showLightbox(imageCache[step].gif, this.alt);
      } else {
        showLightbox(currentSrc, this.alt);
    }
    } else {
      console.log('图片父元素不是活跃状态，不显示lightbox');
    }
  }
  
  // 初始化第一个步骤为激活状态
  if (devFlowSteps.length > 0) {
    devFlowSteps[0].classList.add('active');
    
    // 确保第一个图片显示
    if (devFlowImages.length > 0) {
      const firstImage = devFlowImages[0];
      firstImage.classList.add('active');
      
      // 为第一个活跃图片延迟加载GIF
      const step = firstImage.dataset.step;
      if (imageCache[step] && imageCache[step].gif) {
        const img = firstImage.querySelector('img');
        
        // 添加加载提示
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'gif-loading';
        loadingIndicator.style.position = 'absolute';
        loadingIndicator.style.top = '50%';
        loadingIndicator.style.left = '50%';
        loadingIndicator.style.transform = 'translate(-50%, -50%)';
        loadingIndicator.style.color = '#666';
        loadingIndicator.style.fontSize = '14px';
        loadingIndicator.textContent = '加载中...';
        
        firstImage.appendChild(loadingIndicator);
        
        // 延迟1秒加载GIF，让页面其他元素先加载完
        setTimeout(() => {
          img.src = imageCache[step].gif;
          
          // 图片加载完成后移除加载指示器
          img.onload = function() {
            if (loadingIndicator && loadingIndicator.parentNode) {
              loadingIndicator.parentNode.removeChild(loadingIndicator);
            }
          };
        }, 1000);
      }
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
        
        // 如果这是图像元素，切换到静态图片
        if (el.classList.contains('dev-flow-image')) {
          const img = el.querySelector('img');
          const step = el.dataset.step;
          
          // 恢复为静态图片
          if (imageCache[step] && imageCache[step].static) {
            img.src = imageCache[step].static;
          }
        }
      });
      
      // 为点击的步骤和相应的图像添加active类
      this.classList.add('active');
      const activeImage = document.querySelector(`.dev-flow-image-${stepNum}`);
      activeImage.classList.add('active');
      console.log('激活图片元素:', `.dev-flow-image-${stepNum}`);
      
      // 为活动图像延迟加载GIF，避免同时加载多个GIF导致卡顿
      const img = activeImage.querySelector('img');
      const step = activeImage.dataset.step;
      
      // 如果我们已缓存此图像
      if (imageCache[step] && imageCache[step].gif) {
        // 显示加载中提示
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'gif-loading';
        loadingIndicator.style.position = 'absolute';
        loadingIndicator.style.top = '50%';
        loadingIndicator.style.left = '50%';
        loadingIndicator.style.transform = 'translate(-50%, -50%)';
        loadingIndicator.style.color = '#666';
        loadingIndicator.style.fontSize = '14px';
        loadingIndicator.textContent = '加载中...';
        
        activeImage.appendChild(loadingIndicator);
        
        // 延迟加载GIF
        setTimeout(() => {
        img.src = imageCache[step].gif;
          
          // 图片加载完成后移除加载指示器
          img.onload = function() {
            if (loadingIndicator && loadingIndicator.parentNode) {
              loadingIndicator.parentNode.removeChild(loadingIndicator);
            }
          };
        }, 100);
      }
    });
  });
  
  // 添加hover预加载图片效果（仅预加载静态图片，不预加载GIF）
  devFlowSteps.forEach(step => {
    step.addEventListener('mouseenter', function() {
      const stepNumber = this.getAttribute('data-step');
      
      // 预加载静态图片，不预加载GIF
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
  const existingLightbox = document.getElementById('image-lightbox');
  if (existingLightbox) {
    existingLightbox.remove();
  }
  
  // 创建lightbox容器
  const lightbox = document.createElement('div');
  lightbox.id = 'image-lightbox';
  lightbox.className = 'image-lightbox';
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
  
  // 创建图片容器
  const imgContainer = document.createElement('div');
  imgContainer.className = 'lightbox-content';
  imgContainer.style.position = 'relative';
  imgContainer.style.maxWidth = '90%';
  imgContainer.style.maxHeight = '90%';
  
  // 创建图片元素
  const img = document.createElement('img');
  img.id = 'lightbox-img';
  img.style.maxWidth = '100%';
  img.style.maxHeight = '90vh';
  img.style.objectFit = 'contain';
  img.style.border = '2px solid white';
  img.style.borderRadius = '4px';
  
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
    document.getElementById('image-lightbox').style.display = 'none';
    console.log('关闭lightbox');
  };
  
  // 点击lightbox背景也关闭
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      console.log('点击背景关闭lightbox');
    }
  };
  
  // 组合元素
  imgContainer.appendChild(img);
  imgContainer.appendChild(closeBtn);
  lightbox.appendChild(imgContainer);
  lightbox.appendChild(caption);
  
  // 添加到body
  document.body.appendChild(lightbox);
  console.log('lightbox已添加到页面');
  
  // 添加按键监听，按ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('image-lightbox').style.display !== 'none') {
      document.getElementById('image-lightbox').style.display = 'none';
      console.log('按ESC键关闭lightbox');
    }
  });
}

// 显示lightbox
function showLightbox(imgSrc, imgAlt) {
  console.log('显示lightbox，图片源:', imgSrc);
  
  const lightbox = document.getElementById('image-lightbox');
  if (!lightbox) {
    console.error('找不到lightbox元素，重新创建');
    createLightbox();
  }
  
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
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