/**
 * 字体粗细过渡效果增强脚本
 * 为Sealos网站提供更平滑的字体粗细过渡体验
 */

document.addEventListener('DOMContentLoaded', function () {
  // 字体粗细过渡效果
  function addFontWeightTransitions() {
    // 创建样式元素
    const style = document.createElement('style');
    style.textContent = `
      /* 添加字体粗细过渡效果 */
      .tab-button, .cloud-module h3, .feature h3, .card-title, .btn-primary, .btn-secondary, 
      .cta-button, .login-footer, .login-footer2, .hero-content h1, .tab-h3, .contai h2, 
      .specification h2, .container3 h2, .stat span, strong, b, em {
        transition: font-weight 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease;
      }
      
      /* 交互状态字体粗细微调 */
      .tab-button:hover, .cloud-module:hover h3, .feature:hover h3 {
        letter-spacing: -0.01em;
      }
      
      /* 确保过渡效果顺畅 */
      @supports (font-variation-settings: normal) {
        .tab-button, .cloud-module h3, .feature h3, .card-title, .hero-content h1 {
          font-variation-settings: "wght" var(--font-weight, 500);
          transition: font-variation-settings 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease;
        }
        
        .tab-button.active {
          --font-weight: 600;
        }
        
        .tab-button:hover {
          --font-weight: 600;
        }
        
        .cloud-module:hover h3, .feature:hover h3 {
          --font-weight: 600;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 添加字体粗细对比动画
  function addTextEmphasisEffects() {
    // 找到所有需要增强的元素
    const tabs = document.querySelectorAll('.tab-button');
    const features = document.querySelectorAll('.feature');
    const cloudModules = document.querySelectorAll('.cloud-module');

    // Tab按钮增强
    tabs.forEach((tab) => {
      tab.addEventListener('mouseenter', function () {
        // 非活动状态下字体稍微加粗以增强反馈
        if (!this.classList.contains('active')) {
          this.style.fontWeight = '550';
        }
      });

      tab.addEventListener('mouseleave', function () {
        // 恢复原有字重
        if (!this.classList.contains('active')) {
          this.style.fontWeight = '500';
        }
      });
    });

    // 功能模块标题增强
    [...features, ...cloudModules].forEach((item) => {
      const title = item.querySelector('h3');
      if (title) {
        item.addEventListener('mouseenter', function () {
          title.style.fontWeight = '550';
          title.style.letterSpacing = '-0.01em';
        });

        item.addEventListener('mouseleave', function () {
          title.style.fontWeight = '500';
          title.style.letterSpacing = '0';
        });
      }
    });
  }

  // 初始化
  setTimeout(function () {
    addFontWeightTransitions();
    // 检查是否在触摸设备上，触摸设备不应用悬停效果
    if (!('ontouchstart' in window)) {
      addTextEmphasisEffects();
    }
  }, 500); // 延迟执行以确保DOM完全加载
});
