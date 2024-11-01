document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
        <nav class="navbar">
    <div class="navtop">
      <div class="header-title">
        <div class="logo"> <img src="../img/sealos.svg" alt="Sealos Logo"> Sealos </div>
        <ul class="nav-links">
          <li><a href="/">首页</a></li>
          <li class="dropdown"> <a href="#appstore">应用商店</a>
            <div class="dropdown-content">
            <div class="navbar-list">
              <ul class="menu">
                <div class="menu-left">应用商店</div>
                <div class="menu-list">
                  <li onmouseover="showTools('tool1')" onmouseout="hideTools('tool1')"><img src="../img/toolkit.svg"
                          alt="工具">工具</li>
                  <li onmouseover="showTools('ai')" onmouseout="hideTools('ai')"><img src="../img/robot.svg"
                          alt="AI">AI</li>
                  <li onmouseover="showTools('sjk')" onmouseout="hideTools('sjk')"><img src="../img/database.svg"
                          alt="数据库">数据库</li>
                  <li onmouseover="showTools('ddm')" onmouseout="hideTools('ddm')"><img src="../img/params.svg"
                          alt="低代码">低代码</li>
                  <!--<li onmouseover="showTools('blgo')" onmouseout="hideTools('blgo')"><img src="../img/quote.svg" alt="博客">博客</li>
                  <li onmouseover="showTools('cunchu')" onmouseout="hideTools('cunchu')"><img src="../img/hard-drive.svg" alt="存储">存储</li>
                  <li onmouseover="showTools('jiankong')" onmouseout="hideTools('jiankong')"><img src="../img/linechart.svg" alt="监控">监控</li>
                  <li onmouseover="showTools('yunwei')" onmouseout="hideTools('yunwei')"><img src="../img/running.svg" alt="运维">运维</li>--> 
                </div>
              </ul>
              <!--appstore-开始-->
              <div id="tool-content" class="tool-content1">
                <div id="tool1" class="tool-item active">
                  <div class="menu-right">
                    <div class="menu-title">工具</div>
                    <div class="menu-more">查看更多<img src="../img/ico-jt.svg" alt="更多"></div>
                  </div>
                  <div class="list-gj1">
                    <ul>
                      <li> <img src="../img/Alist.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../alist">Alist </a>🔥</h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+68.5k</div>
                          </div>
                          <p>支持多种云盘存储的在线网盘管理系统</p>
                        </div>
                      </li>
                      <li> <img src="../img/favicon-144.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../affine">Affine</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+19.6k</div>
                          </div>
                          <p>基于现代技术栈开发的开源笔记软件</p>
                        </div>
                      </li>
                      <li> <img src="../img/headscale3-dots.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../headscale">Headscale</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+48.2k</div>
                          </div>
                          <p>用于构建自己的 WireGuard 网络</p>
                        </div>
                      </li>
                      <li> <img src="../img/DeeplX.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../deeplx">DeeplX</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+22.2k</div>
                          </div>
                          <p>基于自然语言的翻译API</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li> <img src="../img/vaultwarden-icon.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Vaultwarden">Vaultwarden</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+16.1k</div>
                          </div>
                          <p>开源密码管理器</p>
                        </div>
                      </li>
                      <li> <img src="../img/favicon.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../kuboard">kuboard</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+2.7k</div>
                          </div>
                          <p>专为 Kubernetes 设计的免费管理界面</p>
                        </div>
                      </li>
                      <li> <img src="../img/141598483.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../blossom">blossom</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+7.3k</div>
                          </div>
                          <p>创建和管理双向链接的笔记软件</p>
                        </div>
                      </li>
                      <li> <img src="../img/favicon11.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../code-server">code-server</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+8.8k</div>
                          </div>
                          <p>VS Code</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="ai" class="tool-item">
                  <div class="menu-right">
                    <div class="menu-title">AI</div>
                    <div class="menu-more">查看更多<img src="../img/ico-jt.svg" alt="更多"></div>
                  </div>
                  <div class="list-gj1">
                    <ul>
                      <li> <img src="../img/iconchatgpt.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Chatgpt-next-web">Chatgpt-next-web</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+9.6k</div>
                          </div>
                          <p>跨平台的 ChatGPT/Gemini UI</p>
                        </div>
                      </li>
                      <li> <img src="../img/fastgpt.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../FastGPT">FastGPT </a> 🔥</h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+200.2k</div>
                          </div>
                          <p>大语言AI模型的企业级智能问答知识库</p>
                        </div>
                      </li>
                      <li> <img src="../img/26161723.jpeg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Gpt-on-wechat">Gpt-on-wechat</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+12.2k</div>
                          </div>
                          <p>基于大模型的智能对话机器人</p>
                        </div>
                      </li>
                      <li> <img src="../img/chat-web.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Chatgpt-web">Chatgpt-web</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+49.6k</div>
                          </div>
                          <p>基于Python的开源聊天机器人框架</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li> <img src="../img/chatmidjourney.ico" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Chatgpt-midjourney">Chatgpt-midjourney</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.2k</div>
                          </div>
                          <p>集成了多种人工智能技术的网页服务框架</p>
                        </div>
                      </li>
                      <li> <img src="../img/chatacademic.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Gpt-academic">Gpt-academic</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+5.6k</div>
                          </div>
                          <p>论文阅读/写作润色优化的学术GPT</p>
                        </div>
                      </li>
                      <li> <img src="../img/librechat.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../LibreChat">LibreChat</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+68.8k</div>
                          </div>
                          <p>增强版的 ChatGPT</p>
                        </div>
                      </li>
                      <li> <img src="../img/oneapi.ico" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../one-api">one-api 🔥</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+29.9k</div>
                          </div>
                          <p>方便管理和分发 API 密钥的工具</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="sjk" class="tool-item">
                  <div class="menu-right">
                    <div class="menu-title">数据库</div>
                    <div class="menu-more">查看更多<img src="../img/ico-jt.svg" alt="更多"></div>
                  </div>
                  <div class="list-gj1">
                    <ul>
                      <li> <img src="../img/x9gZmjwbtvaGd95qbfUmsZ8Jc.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Teable">Teable</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+6.7k</div>
                          </div>
                          <p>企业级高性能多维表格解决方案</p>
                        </div>
                      </li>
                      <li> <img src="../img/logo-128.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Pgadmin4">Pgadmin4</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+2.6k</div>
                          </div>
                          <p>数据库可视化管理神器</p>
                        </div>
                      </li>
                      <li> <img src="../img/nocodb-logo.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../NocoDB">NocoDB</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.2k</div>
                          </div>
                          <p>将数据库转换为易于操作的在线电子表格</p>
                        </div>
                      </li>
                      <li> <img src="../img/redisinsight.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../RedisInsight">RedisInsight</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.1k</div>
                          </div>
                          <p>redis官方出品的操作redis的可视化工具</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li> <img src="../img/5713248.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Influxdb">Influxdb</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+0.4k</div>
                          </div>
                          <p>开源分布式时序、事件和指标数据库</p>
                        </div>
                      </li>
                      <li> <img src="../img/bytebase.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Bytebase">Bytebase</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.3k</div>
                          </div>
                          <p>数据库版本控制、更改跟踪和实时修改</p>
                        </div>
                      </li>
                      <li> <img src="../img/DataEase.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../DataEase">DataEase</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">1.4k</div>
                          </div>
                          <p>人人可用的开源数据可视化分析工具</p>
                        </div>
                      </li>
                      <li> <img src="../img/metabase.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Metabase">Metabase</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.4k</div>
                          </div>
                          <p>企业级数据分析和商业智能工具</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="ddm" class="tool-item">
                  <div class="menu-right">
                    <div class="menu-title">低代码</div>
                    <div class="menu-more">查看更多<img src="../img/ico-jt.svg" alt="更多"></div>
                  </div>
                  <div class="list-gj1">
                    <ul>
                      <li> <img src="../img/Appsmith.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Appsmith">Appsmith</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+6.5k</div>
                          </div>
                          <p>构建管理面板/CRUD/应用程序和工作流</p>
                        </div>
                      </li>
                      <li> <img src="../img/PagePlug.ico" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../PagePlug">PagePlug</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+5.7k</div>
                          </div>
                          <p>基于Appsmith进行汉化的低代码工具</p>
                        </div>
                      </li>
                      <li> <img src="../img/Fireboom.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Fireboom">Fireboom</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.2k</div>
                          </div>
                          <p>API公有云平台,可视化开发和AI辅助</p>
                        </div>
                      </li>
                      <li> <img src="../img/ILLA Builder.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../ILLA-Builder">ILLA Builder</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+1.6k</div>
                          </div>
                          <p>开源的低代码开发工具</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li> <img src="../img/Halo.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Halo">Halo</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+13.2k</div>
                          </div>
                          <p>强大易用的开源建站工具</p>
                        </div>
                      </li>
                      <li> <img src="../img/WordPress.svg" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../WordPress">WordPress</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+17.3k</div>
                          </div>
                          <p>博客建站工具</p>
                        </div>
                      </li>
                      <li> <img src="../img/Flarum.png" class="list-gijtitleico">
                        <div class="list-gij-title">
                          <div class="title-top">
                            <h2><a href="../Flarum">Flarum</a></h2>
                            <div class="list-bsrs"><img src="../img/Icon (Stroke).svg">+4.4k</div>
                          </div>
                          <p>轻量级、快速且易于使用的论坛软件</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!--appstore-结束--> 
                
              </div>
            </div>
          </li>
          <!---<li><a href="#blog">客户案例</a></li>-->
          <li><a href="https://sealos.run/docs/Intro/" target="_blank">学习&帮助</a></li>
          <li><a href="https://forum.laf.run/" target="_blank">社区</a></li>
        </ul>
      </div>
      <div class="actions">
        <p> <img src="../img/github.svg" alt="GitHub Icon"> <span>10.4k</span> </p>
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