document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
      
       <nav class="sidebar">
        <ul class="nav-list">
          <li class="nav-item" data-page="tool"> <a href="#" class="nav-link"> <i class="icon briefcase"></i> <span class="link-text">工具</span>  </a>
            <ul class="sub-menu">
              <li data-page="alist"><a href="/app_store/tool/alist">
                <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                  <p>Alist <span class="sub-muen-desctie">- 在线网盘管理系统</span></p>
                </div>
                </a> </li>
              <li data-page="affine"><a href="/app_store/tool/affine">
                <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                  <p>Affine <span class="sub-muen-desctie">- 开源笔记软件</span></p>
                </div>
                </a> </li>
              <li data-page="Headscale"><a href="/app_store/tool/headscale">
                <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                  <p>Headscale <span class="sub-muen-desctie">- 构建 WireGuard 网络</span></p>
                </div>
                </a> </li>
              <li data-page="DeeplX"><a href="/app_store/tool/deeplx">
                <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                  <p>DeeplX <span class="sub-muen-desctie">- 翻译API</span></p>
                </div>
                </a> </li>
              <li data-page="Vaultwarden"><a href="/app_store/tool/vaultwarden">
                <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                  <p>Vaultwarden <span class="sub-muen-desctie">- 密码管理器</span></p>
                </div>
                </a> </li>
              <li data-page="kuboard"><a href="/app_store/tool/kuboard">
                <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                  <p>kuboard <span class="sub-muen-desctie">- Kubernetes管理界面</span></p>
                </div>
                </a> </li>
              <li data-page="blossom"><a href="/app_store/tool/blossom">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>blossom <span class="sub-muen-desctie">- 笔记软件</span></p>
                </div>
                </a> </li>
              <li data-page="code-server"><a href="/app_store/tool/code-server">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>code-server <span class="sub-muen-desctie">- VS-Code</span></p>
                </div>
                </a> 
              </li>
              <li data-page="ubuntu"><a href="/app_store/tool/ubuntu">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>Ubuntu <span class="sub-muen-desctie">- Linux发行版操作系统</span></p>
                </div>
                </a> 
              </li>
              <li data-page="plane"><a href="/app_store/tool/plane">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>Plane <span class="sub-muen-desctie">- AI驱动的开源项目管理系统</span></p>
                </div>
                </a> 
              </li>
              <li data-page="nexus"><a href="/app_store/tool/nexus">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>Nexus <span class="sub-muen-desctie">- Maven库管理器</span></p>
                </div>
                </a> 
              </li>
              <li data-page="overleaf"><a href="/app_store/tool/overleaf">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>Overleaf<span class="sub-muen-desctie">-LaTeX编辑器</span></p>
                </div>
                </a> 
              </li>
              <li data-page="plausible"><a href="/app_store/tool/plausible">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>Plausible<span class="sub-muen-desctie">-流量分析工具</span></p>
                </div>
                </a> 
              </li>
              <li data-page="anki"><a href="/app_store/tool/anki">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>Anki<span class="sub-muen-desctie">-个人化Anki同步服务器</span></p>
                </div>
                </a> 
              </li>
              <li data-page="frp"><a href="/app_store/tool/frp">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>Frp<span class="sub-muen-desctie">-反向代理工具</span></p>
                </div>
                </a> 
              </li>
              <li data-page="crmeb"><a href="/app_store/tool/crmeb">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>CRMEB<span class="sub-muen-desctie">-在线教育知识付费系统</span></p>
                </div>
                </a> 
              </li>
      </ul>
          </li>
          <li class="nav-item" data-page="AI"> <a href="#" class="nav-link"> <i class="icon briefcase-1"></i> <span class="link-text">AI</span>  </a>
            <ul class="sub-menu">
              <li data-page="Chatgpt-next-web"><a href="/app_store/ai/chatgpt-next-web">
                <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                  <p>Chatgpt-next-web <span class="sub-muen-desctie"> - 私人GPT网页</span></p>
                </div>
                </a> </li>
              <li data-page="fastgpt"><a href="/app_store/ai/fastgpt">
                <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                  <p>FastGPT<span class="sub-muen-desctie">- 智能问答知识库</span></p>
                </div>
                </a> </li>
              <li data-page="chatgpt-on-wechat"><a href="/app_store/ai/chatgpt-on-wechat">
                <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                  <p>Chatgpt-On-Wechat <span class="sub-muen-desctie"> - 智能对话机器人</span></p>
                </div>
                </a> </li>
              <li data-page="chatgpt-web"><a href="/app_store/ai/chatgpt-web">
                <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                  <p>Chatgpt-Web<span class="sub-muen-desctie">- 聊天机器人</span> </p>
                </div>
                </a> </li>
              <li data-page="chatgpt-midjourney"><a href="/app_store/ai/chatgpt-midjourney">
                <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                  <p>Chatgpt-midjourney <span class="sub-muen-desctie">- 人工智能网页框架</span></p>
                </div>
                </a> </li>
              <li data-page="gpt-academic"><a href="/app_store/ai/gpt-academic">
                <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                  <p>Gpt-Academic<span class="sub-muen-desctie"> - 论文润色的学术GPT</span></p>
                </div>
                </a> </li>
              <li data-page="librechat"><a href="/app_store/ai/librechat">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>LibreChat<span class="sub-muen-desctie"> - 增强版的 ChatGPT</span></p>
                </div>
                </a> </li>
              <li data-page="one-api"><a href="/app_store/ai/one-api">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>one-api<span class="sub-muen-desctie"> - 管理和分发 API 密钥</span></p>
                </div>
                </a> </li>
            </ul>
          </li>
          <li class="nav-item" data-page="mysql"> <a href="#" class="nav-link"> <i class="icon briefcase-2"></i> <span class="link-text">数据库</span> </a>
            <ul class="sub-menu">
              <li data-page="teable"><a href="/app_store/mysql/teable">
                <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                  <p>Teable <span class="sub-muen-desctie">- 高性能多维表格</span></p>
                </div>
                </a> </li>
              <li data-page="pgadmin4"><a href="/app_store/mysql/pgadmin4">
                <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                  <p>Pgadmin4 <span class="sub-muen-desctie">- 数据库可视化管理神器</span></p>
                </div>
                </a> </li>
              <li data-page="nocodb"><a href="/app_store/mysql/nocodb">
                <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                  <p>NocoDB<span class="sub-muen-desctie"> - 将数据库转为电子表格</span></p>
                </div>
                </a> </li>
              <li data-page="redisInsight"><a href="/app_store/mysql/redisInsight">
                <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                  <p>RedisInsight<span class="sub-muen-desctie"> - redis的可视化工具</span></p>
                </div>
                </a> </li>
              <li data-page="influxdb"><a href="/app_store/mysql/influxdb">
                <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                  <p>Influxdb<span class="sub-muen-desctie"> - 分布式时序、事件和指标数据库</span></p>
                </div>
                </a> </li>
              <li data-page="bytebase"><a href="/app_store/mysql/bytebase">
                <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                  <p>Bytebase<span class="sub-muen-desctie"> - 数据库版本控制、更改和修改</span></p>
                </div>
                </a> </li>
              <li data-page="dataease"><a href="/app_store/mysql/dataease">
                <div class="sub-menu-lef"> <span class="dot blossom-color"></span>
                  <p>DataEase<span class="sub-muen-desctie"> - 数据可视化分析工具</span></p>
                </div>
                </a> </li>
              <li data-page="metabase"><a href="/app_store/mysql/metabase">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>Metabase<span class="sub-muen-desctie"> - 数据分析和商业智能工具</span></p>
                </div>
                </a> </li>
            </ul>
          </li>
          <li class="nav-item" data-page="pass"> <a href="#" class="nav-link"> <i class="icon briefcase-3"></i> <span class="link-text">低代码</span> </a>
            <ul class="sub-menu">
              <li data-page="appsmith"><a href="/app_store/pass/appsmith">
                <div class="sub-menu-lef"> <span class="dot alist-color"></span>
                  <p>Appsmith<span class="sub-muen-desctie"> - 工作流管理面板</span></p>
                </div>
                </a> </li>
              <li data-page="pageplug"><a href="/app_store/pass/pageplug">
                <div class="sub-menu-lef"> <span class="dot affine-color"></span>
                  <p>PagePlug<span class="sub-muen-desctie"> - 汉化版Appsmith</span></p>
                </div>
                </a> </li>
              <li data-page="fireboom"><a href="/app_store/pass/fireboom">
                <div class="sub-menu-lef"> <span class="dot Headscale-color"></span>
                  <p>Fireboom<span class="sub-muen-desctie"> - API公有云平台</span></p>
                </div>
                </a> </li>
              <li data-page="illabuilder"><a href="/app_store/pass/illabuilder">
                <div class="sub-menu-lef"> <span class="dot DeeplX-color"></span>
                  <p>ILLA Builder<span class="sub-muen-desctie"> - 低代码开发工具</span></p>
                </div>
                </a> </li>
              <li data-page="halo"><a href="/app_store/pass/halo">
                <div class="sub-menu-lef"> <span class="dot Vaultwarden-color"></span>
                  <p>Halo<span class="sub-muen-desctie"> - 开源建站工具</span></p>
                </div>
                </a> </li>
              <li data-page="wordpress"><a href="/app_store/pass/wordpress">
                <div class="sub-menu-lef"> <span class="dot kuboard-color"></span>
                  <p>WordPress<span class="sub-muen-desctie"> - 博客建站工具</span></p>
                </div>
                </a> </li>
              <li data-page="flarum"><a href="/app_store/pass/flarum">
                <div class="sub-menu-lef"> <span class="dot code-color"></span>
                  <p>Flarum<span class="sub-muen-desctie"> - 论坛软件</span></p>
                </div>
                </a> 
              </li>
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