/**
 * Docker页面交互功能脚本
 */

// 步骤切换函数
function switchDockerStep(stepNumber, panelType) {
  // 获取当前面板内的元素
  const panelSelector = panelType ? `#${panelType}-deploy ` : '';

  // 隐藏当前面板内的所有步骤内容
  document
    .querySelectorAll(`${panelSelector} .docker-step-content-wrapper`)
    .forEach(function (content) {
      content.style.display = 'none';
    });

  // 移除当前面板内所有步骤按钮的active类和completed类
  document.querySelectorAll(`${panelSelector} .docker-step`).forEach(function (step, index) {
    step.classList.remove('active');

    // 如果是当前步骤之前的步骤，标记为已完成
    if (index + 1 < stepNumber) {
      step.classList.add('completed');
      step.classList.remove('active');
    }
    // 如果是当前步骤之后的步骤，移除所有特殊标记
    else if (index + 1 > stepNumber) {
      step.classList.remove('completed');
      step.classList.remove('active');
    }
    // 当前步骤标记为active
    else {
      step.classList.add('active');
      step.classList.remove('completed');
    }
  });

  // 显示选中的步骤内容
  const stepContentId = `docker-step-${panelType}-${stepNumber}`;
  const stepContent = document.getElementById(stepContentId);
  if (stepContent) {
    stepContent.style.display = 'block';
  }
}

// 初始化函数
document.addEventListener('DOMContentLoaded', function () {
  // 默认显示第一步
  switchDockerStep(1, 'docker');
  switchDockerStep(1, 'project');
  switchDockerStep(1, 'code');
  switchDockerStep(1, 'serverless');
  switchDockerStep(1, 'database');

  // 滚动监听，添加淡入动画效果
  const fadeElements = document.querySelectorAll('.docker-fade-in');

  function checkFade() {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {
        element.classList.add('visible');
      }
    });
  }

  // 初始检查
  checkFade();

  // 滚动时检查
  window.addEventListener('scroll', checkFade);
});
