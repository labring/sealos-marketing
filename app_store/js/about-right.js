document.addEventListener('DOMContentLoaded', function() {
    const aboutHtml = `
         <div class="app-h5-left">
      <h3>什么是Sealos？</h3>
      <p class="sealos-detice">基于Kubernetes为内核的云操作系统，独特的集群镜像，可将任意应用打包成 OCI 镜像，自由组合，轻松订制所需的云，一并解决各种依赖问题。</p>
      <span class="sealos-detice-span"><a href="/">了解更多 ></a></span> </div>
    <div class="app-h5-left">
      <h3>Sealos部署优势</h3>
      <p class="sealos-detice"> 💰 快速上云：一键创建容器集群，自动化部署容器应用<br/>
        <br/>
        🌐 成本缩减：仅容器付费，资源成本减少 80%<br/>
        <br/>
        🛡️ 安全稳定：应用级和租户级网络隔离能力。 </p>
    </div>
    <div class="app-h5-left">
      <h3>交流讨论</h3>
      <a href="#"><img src="../img/ewm.png">
      <p>开发者交流群</p>
      </a> </div>

    `;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('about-right');
    if (navContainer) {
        navContainer.innerHTML = aboutHtml;
    }
});