/**
 * code-hosting.js - 代码托管模块交互脚本
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('代码托管模块初始化开始');
  // 初始化代码托管模块的步骤交互
  initCodeHostingSteps();
  console.log('代码托管模块初始化完成');
});

/**
 * 初始化代码托管模块的步骤交互
 */
function initCodeHostingSteps() {
  console.log('正在初始化代码托管模块步骤交互');
  
  // 直接获取代码托管模块内的所有步骤按钮
  const stepButtons = document.querySelectorAll('#code-hosting .docker-step');
  console.log(`找到 ${stepButtons.length} 个步骤按钮`);
  
  if (stepButtons.length === 0) {
    console.log('没有找到步骤按钮，尝试使用备用方法');
    bindCodeStepEvents();
    return;
  }
  
  // 为每个步骤按钮添加点击事件
  stepButtons.forEach(button => {
    button.addEventListener('click', function() {
      const step = parseInt(this.getAttribute('data-step'), 10);
      const panel = this.getAttribute('data-panel');
      
      console.log(`点击了步骤按钮: ${step}, 面板: ${panel}`);
      
      // 切换步骤显示
      switchCodeStep(step, panel);
    });
    console.log(`已为步骤按钮 ${button.textContent} 添加点击事件`);
  });
  
  // 默认显示第一步
  switchCodeStep(1, 'code');
}

/**
 * 备用方法：直接绑定代码托管模块的步骤点击事件
 */
function bindCodeStepEvents() {
  console.log('使用备用方法绑定代码托管模块步骤点击事件');
  
  // 直接获取代码托管面板
  const codeHostingPanel = document.getElementById('code-hosting');
  
  if (!codeHostingPanel) {
    console.error('未找到代码托管面板元素');
    return;
  }
  
  // 创建步骤按钮的点击事件处理函数
  function createStepClickHandler(stepNumber) {
    return function() {
      console.log(`点击了步骤 ${stepNumber}`);
      switchCodeStep(stepNumber, 'code');
    };
  }
  
  // 为每个步骤按钮添加点击事件
  for (let i = 1; i <= 4; i++) {
    // 查找步骤按钮
    const stepButton = codeHostingPanel.querySelector(`.docker-step:nth-child(${i})`);
    
    if (stepButton) {
      // 移除可能存在的旧事件处理函数
      const newStepButton = stepButton.cloneNode(true);
      stepButton.parentNode.replaceChild(newStepButton, stepButton);
      
      // 添加新的事件处理函数
      newStepButton.addEventListener('click', createStepClickHandler(i));
      console.log(`已为步骤按钮 ${i} 添加点击事件`);
    } else {
      console.error(`未找到步骤按钮 ${i}`);
    }
  }
  
  // 默认显示第一步
  switchCodeStep(1, 'code');
}

/**
 * 切换代码托管模块的步骤显示
 */
function switchCodeStep(stepNumber, panelType) {
  console.log(`切换到步骤 ${stepNumber}, 面板类型: ${panelType}`);
  
  // 获取代码托管面板
  const codeHostingPanel = document.getElementById('code-hosting');
  
  if (!codeHostingPanel) {
    console.error('未找到代码托管面板元素');
    return;
  }
  
  // 获取所有步骤内容
  const stepContents = codeHostingPanel.querySelectorAll('.docker-step-content-wrapper');
  console.log(`找到 ${stepContents.length} 个步骤内容元素`);
  
  // 隐藏所有步骤内容
  stepContents.forEach(content => {
    content.style.display = 'none';
    console.log(`隐藏步骤内容: ${content.id}`);
  });
  
  // 获取所有步骤按钮
  const stepButtons = codeHostingPanel.querySelectorAll('.docker-step');
  console.log(`找到 ${stepButtons.length} 个步骤按钮`);
  
  // 更新步骤按钮状态
  stepButtons.forEach(button => {
    // 移除所有状态类
    button.classList.remove('active', 'completed');
    
    const buttonStep = parseInt(button.getAttribute('data-step'), 10) || stepButtons.indexOf(button) + 1;
    
    // 如果是当前步骤之前的步骤，标记为已完成
    if (buttonStep < stepNumber) {
      button.classList.add('completed');
      console.log(`步骤 ${buttonStep} 标记为已完成`);
    }
    // 如果是当前步骤，标记为活动
    else if (buttonStep === stepNumber) {
      button.classList.add('active');
      console.log(`步骤 ${buttonStep} 标记为活动`);
    }
  });
  
  // 显示当前步骤内容
  const currentStepContent = document.getElementById(`docker-step-${panelType}-${stepNumber}`);
  if (currentStepContent) {
    currentStepContent.style.display = 'block';
    console.log(`显示当前步骤内容: ${currentStepContent.id}`);
  } else {
    console.error(`未找到步骤内容元素: docker-step-${panelType}-${stepNumber}`);
    
    // 尝试使用索引查找步骤内容
    const stepContentByIndex = stepContents[stepNumber - 1];
    if (stepContentByIndex) {
      stepContentByIndex.style.display = 'block';
      console.log(`使用索引显示步骤内容: ${stepContentByIndex.id}`);
    } else {
      console.error(`未找到索引为 ${stepNumber - 1} 的步骤内容元素`);
    }
  }
}

// 代码托管相关的JavaScript功能

document.addEventListener('DOMContentLoaded', function() {
    // 为代码托管面板的步骤按钮添加事件监听
    const codeSteps = document.querySelectorAll('#code-hosting .docker-step');
    
    codeSteps.forEach(step => {
        step.addEventListener('click', function() {
            // 获取步骤编号
            const stepNumber = this.getAttribute('data-step');
            if (stepNumber) {
                // 隐藏所有步骤内容
                document.querySelectorAll('#code-hosting .docker-step-content-wrapper').forEach(content => {
                    content.style.display = 'none';
                });
                
                // 显示当前步骤内容
                document.getElementById(`docker-step-code-${stepNumber}`).style.display = 'block';
                
                // 更新步骤按钮状态
                codeSteps.forEach(s => s.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}); 