/**
 * docker.js - Sealos 云原生应用部署平台营销网站交互脚本
 */

document.addEventListener('DOMContentLoaded', function() {
  // 初始化各个功能
  initNavbar();
  initAnimationBackground();
  initScrollAnimations();
  initParallaxEffect();
  initMobileMenu();
  initCounters();
  initSolutionTabs(); // 解决方案标签页功能
  initFadeInElements(); // 添加滚动淡入动画
  

  // 初始化所有面板的第一个步骤
  ['docker', 'project', 'code', 'serverless', 'database'].forEach(panelType => {
    const panel = document.querySelector(`#${panelType}-deploy`);
    if (panel) {
      switchDockerStep(1, panelType);
    }
  });


  // 标签切换功能
  const tabs = document.querySelectorAll('.docker-solution-tab');
  const panels = document.querySelectorAll('.docker-solution-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有标签的active类
      tabs.forEach(t => t.classList.remove('active'));
      // 为当前点击的标签添加active类
      this.classList.add('active');
      
      // 隐藏所有面板
      panels.forEach(panel => panel.classList.remove('active'));
      
      // 显示对应的面板
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  // 为所有步骤按钮添加点击事件
  document.querySelectorAll('.docker-step').forEach(step => {
    step.addEventListener('click', function() {
      const stepNumber = this.getAttribute('data-step');
      const panelType = this.getAttribute('data-panel');
      if (stepNumber && panelType) {

        switchDockerStep(parseInt(stepNumber), panelType);

      }
    });
  });
  
  // 添加滚动动画
  const fadeElements = document.querySelectorAll('.docker-fade-in');
  
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  // 初始检查
  checkFade();
  
  // 滚动时检查
  window.addEventListener('scroll', checkFade);
});

/**
 * 步骤切换函数
 */
function switchDockerStep(stepNumber, panelType) {
  // 隐藏所有步骤内容
  const steps = document.querySelectorAll(`#docker-step-${panelType}-1, #docker-step-${panelType}-2, #docker-step-${panelType}-3, #docker-step-${panelType}-4`);
  steps.forEach(step => step.style.display = 'none');
  
  // 显示当前步骤
  document.getElementById(`docker-step-${panelType}-${stepNumber}`).style.display = 'block';
  

  // 更新步骤指示器 - 只更新当前面板的步骤按钮
  const panel = document.getElementById(`${panelType}-deploy`);
  if (panel) {
    const stepIndicators = panel.querySelectorAll(`.docker-step`);
    stepIndicators.forEach((indicator, index) => {
      if (index + 1 <= stepNumber) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

}

/**
 * 初始化滚动淡入动画
 */
function initFadeInElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  document.querySelectorAll('.docker-fade-in').forEach(el => {
    observer.observe(el);
  });
}

/**
 * 初始化解决方案标签页切换功能
 */
function initSolutionTabs() {
  const tabs = document.querySelectorAll('.docker-solution-tab');
  if (!tabs.length) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有标签和面板的活动状态
      document.querySelectorAll('.docker-solution-tab').forEach(t => {
        t.classList.remove('active');
      });
      document.querySelectorAll('.docker-solution-panel').forEach(p => {
        p.classList.remove('active');
      });
      
      // 为当前标签添加活动状态
      this.classList.add('active');
      
      // 显示对应的面板
      const targetId = this.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        
        // 重新触发该面板内的动画
        targetPanel.querySelectorAll('.docker-fade-in').forEach(el => {
          el.classList.remove('visible');
          // 使用setTimeout确保DOM更新后再添加visible类
          setTimeout(() => {
            el.classList.add('visible');
          }, 50);
        });

        
        // 重新初始化该面板的步骤按钮状态
        const panelType = targetId.replace('-deploy', '');
        if (['docker', 'project', 'code', 'serverless', 'database'].includes(panelType)) {
          // 获取当前显示的步骤
          const activeStepContent = targetPanel.querySelector('.docker-step-content-wrapper[style*="display: block"]');
          if (activeStepContent) {
            const stepMatch = activeStepContent.id.match(/docker-step-(\w+)-(\d+)/);
            if (stepMatch && stepMatch[2]) {
              const currentStep = parseInt(stepMatch[2]);
              switchDockerStep(currentStep, panelType);
            } else {
              // 默认显示第一步
              switchDockerStep(1, panelType);
            }
          } else {
            // 默认显示第一步
            switchDockerStep(1, panelType);
          }
        }


      }
    });
  });
}

/**
 * 导航栏固定效果
 */
function initNavbar() {
  const navbar = document.querySelector('.docker-navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 平滑滚动导航
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // 移动端菜单关闭
        const mobileMenu = document.querySelector('.docker-mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });
}

/**
 * 移动端菜单控制
 */
function initMobileMenu() {
  const mobileToggle = document.querySelector('.docker-mobile-toggle');
  const mobileMenu = document.querySelector('.docker-mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
}

/**
 * 创建动画背景
 */
function initAnimationBackground() {
  const animationBg = document.querySelector('.docker-animation-bg');
  
  if (!animationBg) return;
  
  // 创建背景点 - 使用蓝色主题
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.classList.add('docker-animation-dot');
    
    // 随机大小
    const size = Math.random() * 20 + 5;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    
    // 随机位置
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    
    // 随机动画延迟
    dot.style.animation = `floatAnimation ${6 + Math.random() * 5}s ease-in-out infinite`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    
    // 随机蓝色调
    const blueColor = getRandomBlueShade();
    dot.style.backgroundColor = blueColor;
    
    animationBg.appendChild(dot);
  }
}

/**
 * 生成随机的蓝色色调
 */
function getRandomBlueShade() {
  // 蓝色范围: rgb(30-100, 130-200, 230-255)
  const r = Math.floor(Math.random() * 70) + 30;
  const g = Math.floor(Math.random() * 70) + 130;
  const b = Math.floor(Math.random() * 25) + 230;
  const opacity = (Math.random() * 0.15) + 0.05; // 0.05 - 0.2 的透明度
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * 滚动触发动画
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.docker-fade-in-up');
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
    // 设置初始状态
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
}

/**
 * 视差滚动效果
 */
function initParallaxEffect() {
  const parallaxItems = document.querySelectorAll('.docker-parallax-item');
  
  if (!parallaxItems.length) return;
  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    parallaxItems.forEach((item, index) => {
      // 根据索引创建不同的视差效果
      const speed = 0.1 * (index % 3 + 1);
      item.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

/**
 * 数字计数器动画
 */
function initCounters() {
  const counters = document.querySelectorAll('.docker-stat-number');
  
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.textContent, 10);
        
        if (isNaN(targetValue)) return;
        
        let count = 0;
        const duration = 2000; // 动画持续2秒
        const interval = 50; // 每50ms更新一次
        const increment = Math.ceil(targetValue / (duration / interval));
        
        // 保存原始内容
        const originalContent = target.textContent;
        
        const timer = setInterval(() => {
          count += increment;
          if (count >= targetValue) {
            // 如果是带单位的，恢复原内容
            if (originalContent.indexOf('%') > -1 || 
                originalContent.indexOf('+') > -1 || 
                isNaN(targetValue)) {
              target.textContent = originalContent;
            } else {
              target.textContent = targetValue.toLocaleString();
            }
            clearInterval(timer);
          } else {
            target.textContent = count.toLocaleString();
          }
        }, interval);
        
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/**
 * 创建视差背景元素
 */
function createParallaxBackground() {
  const parallaxContainer = document.querySelector('.docker-parallax');
  
  if (!parallaxContainer) return;
  
  // 创建多个视差元素 - 使用蓝色主题
  for (let i = 0; i < 10; i++) {
    const item = document.createElement('div');
    item.classList.add('docker-parallax-item');
    
    // 随机大小
    const size = Math.random() * 200 + 50;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    
    // 随机位置
    item.style.left = `${Math.random() * 100}%`;
    item.style.top = `${Math.random() * 100}%`;
    
    // 随机蓝色调
    const blueColor = getRandomBlueShade();
    item.style.backgroundColor = blueColor;
    
    parallaxContainer.appendChild(item);
  }
}

/**
 * 图片懒加载
 */
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img.lazy-image');
  
  if (!lazyImages.length) return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy-image');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
}

// 窗口加载完成后初始化额外功能
window.addEventListener('load', function() {
  createParallaxBackground();
  lazyLoadImages();
  
  // 初始加载时显示首个面板的动画
  setTimeout(() => {
    document.querySelectorAll('.docker-solution-panel.active .docker-fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
});
