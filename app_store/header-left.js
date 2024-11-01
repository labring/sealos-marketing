document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
        <nav class="sidebar">
      <ul class="nav-list">
        <li class="nav-item"> <a href="#" class="nav-link"> <i class="icon briefcase"></i> <span class="link-text">工具</span> <span class="badge">42</span> </a>
          <ul class="sub-menu" id="menu_sub">
            <li><a href="../alist">
              <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                <p>Alist <span class="sub-muen-desctie">- 在线网盘管理系统</span></p>
              </div>
              </a> </li>
            <li><a href="../affine">
              <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                <p>Affine <span class="sub-muen-desctie">- 开源笔记软件</span></p>
              </div>
              </a> </li>
            <li><a href="../headscale">
              <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                <p>Headscale <span class="sub-muen-desctie">- 构建 WireGuard 网络</span></p>
              </div>
              </a> </li>
            <li><a href="../deeplx">
              <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                <p>DeeplX <span class="sub-muen-desctie">- 翻译API</span></p>
              </div>
              </a> </li>
            <li><a href="../vaultwarden">
              <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                <p>Vaultwarden <span class="sub-muen-desctie">- 密码管理器</span></p>
              </div>
              </a> </li>
            <li><a href="../kuboard">
              <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                <p>kuboard <span class="sub-muen-desctie">- Kubernetes管理界面</span></p>
              </div>
              </a> </li>
            <li><a href="../blossom">
              <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                <p>blossom <span class="sub-muen-desctie">- 笔记软件</span></p>
              </div>
              </a> </li>
            <li><a href="../code-server">
              <div class="sub-menu-lef"> <span class="dot code-color"></span>
                <p>code-server <span class="sub-muen-desctie">- VS-Code</span></p>
              </div>
              </a> </li>
          </ul>
        </li>
        <li class="nav-item"> <a href="#" class="nav-link"> <i class="icon briefcase-1"></i> <span class="link-text">AI</span> <span class="badge">17</span> </a>
          <ul class="sub-menu" id="menu_sub">
            <li><a href="../chatgpt-next-web">
              <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                <p>Chatgpt-next-web <span class="sub-muen-desctie"> - 私人GPT网页</span></p>
              </div>
              </a> </li>
            <li><a href="../fastgpt">
              <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                <p>FastGPT<span class="sub-muen-desctie">- 智能问答知识库</span></p>
              </div>
              </a> </li>
            <li><a href="../chatgpt-on-wechat">
              <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                <p>Chatgpt-on-wechat <span class="sub-muen-desctie"> - 智能对话机器人</span></p>
              </div>
              </a> </li>
            <li><a href="../chatgpt-web">
              <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                <p>Chatgpt-web<span class="sub-muen-desctie">- 聊天机器人</span> </p>
              </div>
              </a> </li>
            <li><a href="../chatgpt-midjourney">
              <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                <p>Chatgpt-midjourney <span class="sub-muen-desctie">- 人工智能网页框架</span></p>
              </div>
              </a> </li>
            <li><a href="../gpt-academic">
              <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                <p>Gpt-academic<span class="sub-muen-desctie"> - 论文润色的学术GPT</span></p>
              </div>
              </a> </li>
            <li><a href="../libreChat">
              <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                <p>LibreChat<span class="sub-muen-desctie"> - 增强版的 ChatGPT</span></p>
              </div>
              </a> </li>
            <li><a href="../one-api">
              <div class="sub-menu-lef"> <span class="dot code-color"></span>
                <p>one-api<span class="sub-muen-desctie"> - 管理和分发 API 密钥</span></p>
              </div>
              </a> </li>
          </ul>
        </li>
        <li class="nav-item"> <a href="#" class="nav-link"> <i class="icon briefcase-2"></i> <span class="link-text">数据库</span> <span class="badge">10</span> </a>
          <ul class="sub-menu" id="menu_sub">
            <li><a href="../teable">
              <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                <p>Teable <span class="sub-muen-desctie">- 高性能多维表格</span></p>
              </div>
              </a> </li>
            <li><a href="../pgadmin4">
              <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                <p>Pgadmin4 <span class="sub-muen-desctie">- 数据库可视化管理神器</span></p>
              </div>
              </a> </li>
            <li><a href="../nocoDB">
              <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                <p>NocoDB<span class="sub-muen-desctie"> - 将数据库转为电子表格</span></p>
              </div>
              </a> </li>
            <li><a href="../redisInsight">
              <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                <p>RedisInsight<span class="sub-muen-desctie"> - redis的可视化工具</span></p>
              </div>
              </a> </li>
            <li><a href="../influxdb">
              <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                <p>Influxdb<span class="sub-muen-desctie"> - 分布式时序、事件和指标数据库</span></p>
              </div>
              </a> </li>
            <li><a href="../bytebase">
              <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                <p>Bytebase<span class="sub-muen-desctie"> - 数据库版本控制、更改和修改</span></p>
              </div>
              </a> </li>
            <li><a href="../dataEase">
              <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                <p>DataEase<span class="sub-muen-desctie"> - 数据可视化分析工具</span></p>
              </div>
              </a> </li>
            <li><a href="../metabase">
              <div class="sub-menu-lef"> <span class="dot code-color"></span>
                <p>Metabase<span class="sub-muen-desctie"> - 数据分析和商业智能工具</span></p>
              </div>
              </a> </li>
          </ul>
        </li>
        <li class="nav-item"> <a href="#" class="nav-link"> <i class="icon briefcase-3"></i> <span class="link-text">低代码</span> <span class="badge">8</span> </a>
          <ul class="sub-menu" id="menu_sub">
            <li><a href="../appsmith">
              <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                <p>Appsmith<span class="sub-muen-desctie"> - 工作流管理面板</span></p>
              </div>
              </a> </li>
            <li><a href="../pageplug">
              <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                <p>PagePlug<span class="sub-muen-desctie"> - 汉化版Appsmith</span></p>
              </div>
              </a> </li>
            <li><a href="../fireboom">
              <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                <p>Fireboom<span class="sub-muen-desctie"> - API公有云平台</span></p>
              </div>
              </a> </li>
            <li><a href="../illa-builder">
              <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                <p>ILLA Builder<span class="sub-muen-desctie"> - 低代码开发工具</span></p>
              </div>
              </a> </li>
            <li><a href="../halo">
              <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                <p>Halo<span class="sub-muen-desctie"> - 开源建站工具</span></p>
              </div>
              </a> </li>
            <li><a href="../wordpress">
              <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                <p>WordPress<span class="sub-muen-desctie"> - 博客建站工具</span></p>
              </div>
              </a> </li>
            <li><a href="../flarum">
              <div class="sub-menu-lef"> <span class="dot code-color"></span>
                <p>Flarum<span class="sub-muen-desctie"> - 论坛软件</span></p>
              </div>
              </a> </li>
          </ul>
        </li>
      </ul>
    </nav>
    `;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('left-header');
    if (navContainer) {
        navContainer.innerHTML = navbarHtml;
    }
});