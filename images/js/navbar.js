document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
<nav class="navbar">
  <div class="navtop">
    <div class="header-title">
      <div class="logo"> <img src="/images/img/sealos.svg" alt="Sealos Logo"> Sealos </div>
      <ul class="nav-links">
        <li><a href="/">首页</a></li>
        <li class="dropdown"> <a href="#appstore">应用商店</a>
          <div class="dropdown-content">
          <div class="navbar-list">
            <ul class="menu navlefttitle">
              <div class="menu-left">应用商店</div>
              <div class="menu-list">
                <li onmouseover="showTools('tool1')" onmouseout="hideTools('tool1')"><img src="/images/img/toolkit.svg"
                          alt="工具">工具</li>
                <li onmouseover="showTools('ai')" onmouseout="hideTools('ai')"><img src="/images/img/robot.svg"
                          alt="AI">AI</li>
                <li onmouseover="showTools('sjk')" onmouseout="hideTools('sjk')"><img src="/images/img/database.svg"
                          alt="数据库">数据库</li>
                <li onmouseover="showTools('ddm')" onmouseout="hideTools('ddm')"><img src="/images/img/params.svg"
                          alt="低代码">低代码</li>
                <!--<li onmouseover="showTools('blgo')" onmouseout="hideTools('blgo')"><img src="/images/img/quote.svg" alt="博客">博客</li>
                  <li onmouseover="showTools('cunchu')" onmouseout="hideTools('cunchu')"><img src="/images/img/hard-drive.svg" alt="存储">存储</li>
                  <li onmouseover="showTools('jiankong')" onmouseout="hideTools('jiankong')"><img src="/images/img/linechart.svg" alt="监控">监控</li>
                  <li onmouseover="showTools('yunwei')" onmouseout="hideTools('yunwei')"><img src="/images/img/running.svg" alt="运维">运维</li>--> 
              </div>
            </ul>
            <!--appstore-开始-->
            <div id="tool-content" class="tool-content1">
              <div id="tool1" class="tool-item active">
                <div class="menu-right">
                  <div class="menu-title">工具</div>
                  <div class="menu-more"><a href="./app_store/tool/alist" target="_blank">查看更多</a><img src="/images/img/ico-jt.svg" alt="更多"></div>
                </div>
                <div class="list-gj1">
                  <ul>
                    <a href="./app_store/tool/alist">
                    <li> <img src="/images/img/Alist.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Alist 🔥</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+43.5k</div>
                        </div>
                        <p>支持多种云盘存储的在线网盘管理系统</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/affine">
                    <li> <img src="/images/img/favicon-144.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Affine</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+41.8k</div>
                        </div>
                        <p>基于现代技术栈开发的开源笔记软件</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/headscale">
                    <li> <img src="/images/img/headscale3-dots.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Headscale</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+23.2k</div>
                        </div>
                        <p>用于构建自己的 WireGuard 网络</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/deeplx">
                    <li> <img src="/images/img/DeeplX.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>DeeplX</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+6.6k</div>
                        </div>
                        <p>基于自然语言的翻译API</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                  <ul>
                    <a href="./app_store/tool/Vaultwarden">
                    <li> <img src="/images/img/vaultwarden-icon.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Vaultwarden</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+38.6k</div>
                        </div>
                        <p>开源密码管理器</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/kuboard">
                    <li> <img src="/images/img/favicon.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>kuboard</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+22.4k</div>
                        </div>
                        <p>专为 Kubernetes 设计的免费管理界面</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/blossom">
                    <li> <img src="/images/img/141598483.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>blossom</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+3.1k</div>
                        </div>
                        <p>创建和管理双向链接的笔记软件</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/tool/code-server">
                    <li> <img src="/images/img/favicon11.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>code-server</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+68.4k</div>
                        </div>
                        <p>VS Code</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div id="ai" class="tool-item">
                <div class="menu-right">
                  <div class="menu-title">AI</div>
                  <div class="menu-more"><a href="./app_store/ai/chatgpt-next-web" target="_blank">查看更多</a><img src="/images/img/ico-jt.svg" alt="更多"></div>
                </div>
                <div class="list-gj1">
                  <ul>
                    <a href="./app_store/ai/chatgpt-next-web">
                    <li> <img src="/images/img/iconchatgpt.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Chatgpt-next-web</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+76.2k</div>
                        </div>
                        <p>跨平台的 ChatGPT/Gemini UI</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/fastgpt">
                    <li> <img src="/images/img/fastgpt.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>FastGPT  🔥</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+17.9k</div>
                        </div>
                        <p>大语言AI模型的企业级智能问答知识库</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/chatgpt-on-wechat">
                    <li> <img src="/images/img/26161723.jpeg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>ChatGpt-on-Wechat</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+30.9k</div>
                        </div>
                        <p>基于大模型的智能对话机器人</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/chatgpt-web">
                    <li> <img src="/images/img/chat-web.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Chatgpt-Web</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+31.5k</div>
                        </div>
                        <p>基于Python的开源聊天机器人框架</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                  <ul>
                    <a href="./app_store/ai/chatgpt-midjourney">
                    <li> <img src="/images/img/chatmidjourney.ico" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Chatgpt-Midjourney</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+6.4k</div>
                        </div>
                        <p>集成了多种人工智能技术的网页服务框架</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/gpt-academic">
                    <li> <img src="/images/img/chatacademic.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Gpt-Academic</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+65.4k</div>
                        </div>
                        <p>论文阅读/写作润色优化的学术GPT</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/librechat">
                    <li> <img src="/images/img/librechat.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>LibreChat</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+18.8k</div>
                        </div>
                        <p>增强版的 ChatGPT</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/ai/one-api">
                    <li> <img src="/images/img/oneapi.ico" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>One-api 🔥</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+18.9k</div>
                        </div>
                        <p>方便管理和分发 API 密钥的工具</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div id="sjk" class="tool-item">
                <div class="menu-right">
                  <div class="menu-title">数据库</div>
                  <div class="menu-more"><a href="./app_store/mysql/teable" target="_blank">查看更多</a><img src="/images/img/ico-jt.svg" alt="更多"></div>
                </div>
                <div class="list-gj1">
                  <ul>
                    <a href="./app_store/mysql/teable">
                    <li> <img src="/images/img/x9gZmjwbtvaGd95qbfUmsZ8Jc.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Teable</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+12.1k</div>
                        </div>
                        <p>企业级高性能多维表格解决方案</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/pgadmin4">
                    <li> <img src="/images/img/logo-128.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Pgadmin4</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+2.5k</div>
                        </div>
                        <p>数据库可视化管理神器</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/nocodb">
                    <li> <img src="/images/img/nocodb-logo.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>NocoDB</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+49.5k</div>
                        </div>
                        <p>将数据库转换为易于操作的在线电子表格</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/redisInsight">
                    <li> <img src="/images/img/redisinsight.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>RedisInsight</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+6.2k</div>
                        </div>
                        <p>redis官方出品的操作redis的可视化工具</p>
                      </div>
                    </li>
                    t</a>
                  </ul>
                  <ul>
                    <a href="./app_store/mysql/influxdb">
                    <li> <img src="/images/img/5713248.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Influxdb</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+28.9k</div>
                        </div>
                        <p>开源分布式时序、事件和指标数据库</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/bytebase">
                    <li> <img src="/images/img/bytebase.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Bytebase</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+1.3k</div>
                        </div>
                        <p>数据库版本控制、更改跟踪和实时修改</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/dataease">
                    <li> <img src="/images/img/DataEase.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>DataEase</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">1.4k</div>
                        </div>
                        <p>人人可用的开源数据可视化分析工具</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/mysql/metabase">
                    <li> <img src="/images/img/metabase.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Metabase</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+38.6k</div>
                        </div>
                        <p>企业级数据分析和商业智能工具</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div id="ddm" class="tool-item">
                <div class="menu-right">
                  <div class="menu-title">低代码</div>
                  <div class="menu-more"><a href="./app_store/pass/appsmith" target="_blank">查看更多</a><img src="/images/img/ico-jt.svg" alt="更多"></div>
                </div>
                <div class="list-gj1">
                  <ul>
                    <a href="./app_store/pass/appsmith">
                    <li> <img src="/images/img/Appsmith.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Appsmith</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+34.3k</div>
                        </div>
                        <p>构建管理面板/CRUD/应用程序和工作流</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/pass/pageplug">
                    <li> <img src="/images/img/PagePlug.ico" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>PagePlug</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+1.5k</div>
                        </div>
                        <p>基于Appsmith进行汉化的低代码工具</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/pass/fireboom">
                    <li> <img src="/images/img/Fireboom.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Fireboom</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+1.2k</div>
                        </div>
                        <p>API公有云平台,可视化开发和AI辅助</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/pass/illabuilder">
                    <li> <img src="/images/img/ILLA Builder.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>ILLA Builder</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+11.6k</div>
                        </div>
                        <p>开源的低代码开发工具</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                  <ul>
                    <a href="./app_store/pass/halo">
                    <li> <img src="/images/img/Halo.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Halo</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+33.9k</div>
                        </div>
                        <p>强大易用的开源建站工具</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/pass/wordpress">
                    <li> <img src="/images/img/WordPress.svg" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>WordPress</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+19.5k</div>
                        </div>
                        <p>博客建站工具</p>
                      </div>
                    </li>
                    </a> <a href="./app_store/pass/flarum">
                    <li> <img src="/images/img/Flarum.png" class="list-gijtitleico">
                      <div class="list-gij-title">
                        <div class="title-top">
                          <h2>Flarum</h2>
                          <div class="list-bsrs"><img src="/images/img/Icon (Stroke).svg">+0.193k</div>
                        </div>
                        <p>轻量级、快速且易于使用的论坛软件</p>
                      </div>
                    </li>
                    </a>
                  </ul>
                </div>
              </div>
              
              <!--appstore-结束--> 
              
            </div>
          </div>
        </li>
        <!---<li><a href="#blog">客户案例</a></li>-->
        <li><a href="/price" target="_blank">定价</a></li>
        <li><a href="https://sealos.run/docs/Intro/" target="_blank">文档</a></li>
        <li><a href="https://forum.laf.run/" target="_blank">社区</a></li>
        <li><a href="https://fael3z0zfze.feishu.cn/share/base/form/shrcn5oHHTKCf3VREMKOhEy6fmf" target="_blank">商务咨询</a></li>
      </ul>
    </div>
    <div class="actions">
      <p> <img src="/images/img/github.svg" alt="GitHub Icon"> <span>14.1k</span> </p>
      <a href="https://hzh.sealos.run/" target="_blank" class="login-link">
      <button class="btn"> 登录 </button>
      </a> </div>
  </div>
</nav>
<script>// 添加滚动事件监听
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) { // 当滚动超过50px时
        navbar.classList.add('navbar-scrolled')
      } else {
        navbar.classList.remove('navbar-scrolled')
      }
    });
</script>
`;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        navContainer.innerHTML = navbarHtml;
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // ... 其他代码 ...

  // 添加工具菜单的显示/隐藏功能
  function hideTools() {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent) {
          dropdownContent.style.display = 'none';
      }
  }

  function showTools() {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent) {
          dropdownContent.style.display = 'block';
      }
  }

  // 获取所有需要添加事件的元素
  const toolsDropdown = document.querySelector('.dropdown');
  if (toolsDropdown) {
      toolsDropdown.addEventListener('mouseover', showTools);
      toolsDropdown.addEventListener('mouseout', hideTools);
  }
});