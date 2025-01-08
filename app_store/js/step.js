document.addEventListener('DOMContentLoaded', function() {
    const steperHtml = `<div class="step"> <span class="step-number"><i class="step1ico"></i>Step 1</span>
            <p>点击部署</p>
          </div>
          <div class="arrow"><img src="../../../app_store/img/Rectangle 34624252.svg"><img
              src="../../../app_store/img/Polygon 8.svg"></div>
          <div class="step"> <span class="step-number"><i class="step2ico"></i>Step 2</span>
            <p>系统自动部署</p>
          </div>
          <div class="arrow"><img src="../../../app_store/img/Rectangle 34624252.svg"><img
              src="../../../app_store/img/Polygon 8.svg"></div>
          <div class="step"> <span class="step-number"><i class="step3ico"></i>Step 3</span>
            <p>复制外网地址</p>
          </div>
          <div class="arrow"><img src="../../../app_store/img/Rectangle 34624252.svg"><img
              src="../../../app_store/img/Polygon 8.svg"></div>
          <div class="step"> <span class="step-number"><i class="step4ico"></i>Step 4</span>
            <p>输入默认账号密码</p>
          </div>
          <div class="arrow"><img src="../../../app_store/img/Rectangle 34624252.svg"><img
              src="../../../app_store/img/Polygon 8.svg"></div>
          <div class="step"> <span class="step-number"><i class="step5ico"></i>Step 5</span>
            <p>开始使用🎉</p>
          </div>
    `;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('steper');
    if (navContainer) {
        navContainer.innerHTML = steperHtml;
    }
});