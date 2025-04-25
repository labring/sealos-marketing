document.addEventListener('DOMContentLoaded', function() {
    const footerHtml = `<div class="h5_footer">
    <div class="h5footkj">
      <div class="h5footerlogo"><div class="h5footerlogo2"><img src="https://ads.sealos.run/app_store/img/sealos.svg"><h2 class="footer-title">Sealos</h2></div>
        <p>以 kubernetes 为内核的云操作系统</p>
      </div>
      <div class="h5footerlm">

      <ul>
      <li>
        <p>产品</p>
      </li>
      <li><a href="https://fastgpt.cn" target="_blank">FastGPT</a></li>
      <li><a href="/devbox" target="_blank">DevBox</a></li>
      <li><a href="/aiproxy" target="_blank">AI Proxy</a></li>
      
    </ul>
        <ul>
          <li>
            <p>快捷入口</p>
          </li>
          <li><a href="https://fael3z0zfze.feishu.cn/share/base/form/shrcn5oHHTKCf3VREMKOhEy6fmf?s=bd-sealos-marketing-appstore" target="_blank">商务咨询</a></li>
          <li><a
                href="https://affim.baidu.com/unique_57159132/chat?siteId=21229559&userId=57159132&siteToken=6763f865f8d80f27bf8adf840a3041b6&cp=%E9%A6%96%E9%A1%B5-%E5%BA%95%E9%83%A8-%E5%94%AE%E5%89%8D%E5%92%A8%E8%AF%A2%E6%8C%89%E9%92%AE&cr=&cw="
                target="_blank">售前咨询</a></li>
          <li><a href="https://sealos.run/docs/overview/intro" target="_blank">文档中心</a></li>
        </ul>
        <ul>
          <li>
            <p>联系我们</p>
          </li>
           <li><a href="/case">案例</a></li>
          <li><a href="https://blog.sealos.run/blog" target="_blank">博客</a></li>  
          <li><a href="https://forum.sealos.run/" target="_blank">社区</a></li>   
          <li><a href="https://github.com/labring/sealos/issues" target="_blank">问题反馈</a></li>
        </ul>
      </div>
    </div>
    <div class="h5footerdb">
      <div class="h5footerdbleft">Sealos. all rights reserved. <a href="https://beian.miit.gov.cn/"
            target="_blank">粤ICP备2023048773号 </a> 珠海环界云计算有限公司版权所有</div>
      <div class="h5footerdbright">
        <div class="h5footerico">
          <a href="https://github.com/labring/sealos" target="_blank"> <div class="headico2"> <img src="../../../app_store/img/github.svg" alt="GitHub Icon">
           
            </div></a>
        </div>
        <div class="h5footerico">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_2983_5971)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.5696 14.8306C12.3471 14.8848 12.1232 14.9329 11.8981 14.9748C10.6765 15.2048 9.42228 15.2001 8.20242 14.961C7.98878 14.9194 7.68636 14.8458 7.29654 14.7418L6.01886 16.4023C2.86559 16.3011 1.66699 14.1883 1.66699 14.1883C1.66699 9.4979 3.72154 5.69539 3.72154 5.69539C5.77609 4.12361 7.73075 4.16662 7.73075 4.16662L8.28982 4.89494C8.34135 4.88771 8.39321 4.88308 8.4452 4.88106C9.5109 4.7398 10.5909 4.74447 11.6553 4.89494L12.2685 4.16662C12.2685 4.16662 14.2246 4.12361 16.2777 5.69678C16.2777 5.69678 18.3337 9.4979 18.3337 14.1883C18.3337 14.1883 17.1198 16.2997 13.9665 16.4023L12.5696 14.8306ZM7.24466 9.86377C6.41091 9.86377 5.75195 10.488 5.75195 11.251C5.75195 12.014 6.42478 12.6383 7.24466 12.6383C8.07702 12.6383 8.73597 12.014 8.73597 11.251C8.74984 10.488 8.07841 9.86377 7.24466 9.86377ZM12.5829 9.86377C11.7505 9.86377 11.0916 10.488 11.0916 11.251C11.0916 12.014 11.7644 12.6383 12.5829 12.6383C13.4166 12.6383 14.0756 12.014 14.0756 11.251C14.0756 10.488 13.4166 9.86377 12.5829 9.86377Z"
                  fill="#6688FF"></path>
            </g>
            <defs>
              <clipPath id="clip0_2983_5971">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="h5footerico">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.3519 16.45C10.9134 16.5304 10.4614 16.5725 9.99961 16.5725C5.88681 16.5725 2.55273 13.2384 2.55273 9.12558C2.55273 5.01279 5.88681 1.67871 9.99961 1.67871C14.1124 1.67871 17.4465 5.01279 17.4465 9.12558C17.4465 11.6234 16.2167 13.8339 14.3297 15.1849L11.9262 18.2663C11.8501 18.3638 11.6946 18.3256 11.6724 18.204L11.3519 16.45ZM7.78078 6.56973C7.4752 6.56973 7.18899 6.71938 7.01463 6.97033L5.532 9.10414L5.52098 9.10987L5.5245 9.11494L5.52098 9.12001L5.53201 9.12574L7.0149 11.2596C7.18927 11.5105 7.47545 11.6601 7.78101 11.6601L8.94893 11.6601L7.62637 9.11494L8.94893 6.56973H7.78078ZM11.5907 11.6814C11.1026 11.6814 10.7068 11.2857 10.7068 10.7975C10.7068 10.3093 11.1026 9.91358 11.5907 9.91358H13.5943C14.0825 9.91358 14.4782 10.3093 14.4782 10.7975C14.4782 11.2857 14.0825 11.6814 13.5943 11.6814H11.5907Z"
                fill="#00C1B4"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d8e8ecf669c47dc2512d3f1417e761f9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
    `;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('footer');
    if (navContainer) {
        navContainer.innerHTML = footerHtml;
    }
});