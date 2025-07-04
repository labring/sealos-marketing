document.addEventListener('DOMContentLoaded', function () {
  const aboutHtml = `
         <div class="app-h5-left">
      <h3>什么是Sealos？</h3>
      <p class="sealos-detice">提供高性能可伸缩的容器应用管理能力，支持企业级 Kubernetes 容器化应用的全生命周期管理,一站式集成应用创建、开发、部署、上线等功能，提供了应用引擎、前后端开发框架、API网关、调度引擎等模块，一键部署Helm应用。</p>
      <span class="sealos-detice-span"><a href="/">了解更多 ></a></span> </div>
    <div class="app-h5-left">
      <h3>Sealos部署优势</h3>
      <p class="sealos-detice"> 💰 快速上云：一键创建容器，自动化部署应用<br/>
        <br/>
        🌐 成本缩减：仅容器付费，资源成本减少 80%<br/>
        <br/>
        🛡️ 安全稳定：应用级和租户级网络隔离能力。 </p>
    </div>

    `;

  // 获取导航栏容器并插入内容
  const navContainer = document.getElementById('about-right');
  if (navContainer) {
    navContainer.innerHTML = aboutHtml;
  }
});
