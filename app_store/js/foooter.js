document.addEventListener('DOMContentLoaded', function() {
    const footerHtml = `<div class="h5_footer">
    <div class="h5footkj">
      <div class="h5footerlogo"><div class="h5footerlogo2"><img src="/app_store/img/sealos.svg"><h2 class="footer-title">Sealos</h2></div>
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
           <li><a href="/customers">案例</a></li>
          <li><a href="https://sealos.run/blog">博客</a></li>  
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
          <a href="https://discord.gg/wdUn538zVP" target="_blank">
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
          </a>
        </div>
        <div class="h5footerico">
          <a href="https://oss.laf.run/htr4n1-images/sealos-qr-code.jpg" target="_blank">
            <svg width="20" height="21" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_280_54)"><path d="M21.6696 15.9962C21.9464 15.9925 22.2107 15.881 22.4064 15.6853C22.6021 15.4896 22.7137 15.2252 22.7173 14.9485C22.7173 14.3675 22.2518 13.9008 21.6696 13.9008C21.0875 13.9008 20.622 14.3675 20.622 14.9485C20.622 15.5318 21.0886 15.9962 21.6696 15.9962ZM16.5071 15.9962C16.7839 15.9925 17.0482 15.881 17.2439 15.6853C17.4396 15.4896 17.5512 15.2252 17.5548 14.9485C17.5548 14.3675 17.0881 13.9008 16.5071 13.9008C15.9238 13.9008 15.4595 14.3675 15.4595 14.9485C15.4595 15.5318 15.925 15.9962 16.5071 15.9962ZM24.1686 21.8762C24.0939 21.9177 24.0342 21.9818 23.9981 22.0594C23.9621 22.1369 23.9515 22.2239 23.968 22.3078C23.968 22.3638 23.968 22.421 23.9971 22.4793C24.1115 22.9658 24.3401 23.7405 24.3401 23.7697C24.3401 23.8548 24.3693 23.912 24.3693 23.9703C24.3693 24.0041 24.3626 24.0376 24.3496 24.0688C24.3367 24.1 24.3177 24.1284 24.2937 24.1522C24.2697 24.1761 24.2413 24.195 24.21 24.2078C24.1788 24.2206 24.1453 24.2272 24.1115 24.227C24.0531 24.227 24.0251 24.199 23.968 24.171L22.2775 23.1957C22.154 23.1277 22.0168 23.0886 21.8761 23.0813C21.791 23.0813 21.7046 23.0813 21.6475 23.1093C20.8448 23.3392 20.0141 23.4535 19.1263 23.4535C14.8563 23.4535 11.4181 20.587 11.4181 17.031C11.4181 13.4762 14.8563 10.6085 19.1263 10.6085C23.3951 10.6085 26.8333 13.4762 26.8333 17.031C26.8333 18.9525 25.802 20.7013 24.1686 21.8773V21.8762ZM19.4518 9.44883C19.3429 9.44521 19.234 9.44327 19.1251 9.443C14.2555 9.443 10.2515 12.7797 10.2515 17.0322C10.2515 17.6785 10.3448 18.3038 10.5175 18.8988H10.4136C9.39426 18.8885 8.38067 18.7442 7.39896 18.4695C7.31263 18.4403 7.22629 18.4403 7.13996 18.4403C6.96754 18.444 6.79921 18.4935 6.65229 18.5838L4.61296 19.7563C4.55463 19.7855 4.49746 19.8147 4.44029 19.8147C4.35703 19.8138 4.27744 19.7803 4.21856 19.7214C4.15968 19.6625 4.1262 19.5829 4.12529 19.4997C4.12529 19.4133 4.15329 19.3562 4.18246 19.2698C4.21046 19.2418 4.46946 18.2968 4.61296 17.7252C4.61296 17.6668 4.64096 17.5817 4.64096 17.5245C4.64065 17.4245 4.61721 17.3259 4.57248 17.2364C4.52775 17.147 4.46295 17.0691 4.38313 17.0088C2.40096 15.6053 1.16663 13.517 1.16663 11.1977C1.16663 6.93583 5.33163 3.5 10.4416 3.5C14.8341 3.5 18.5266 6.0305 19.4518 9.44767V9.44883ZM13.4388 9.9365C14.1073 9.9365 14.6358 9.38 14.6358 8.7395C14.6358 8.071 14.1073 7.5425 13.4388 7.5425C12.7703 7.5425 12.2418 8.071 12.2418 8.7395C12.2418 9.408 12.7703 9.9365 13.4388 9.9365ZM7.30213 9.9365C7.97063 9.9365 8.50029 9.38 8.50029 8.7395C8.50029 8.071 7.97063 7.5425 7.30213 7.5425C6.63479 7.5425 6.10513 8.071 6.10513 8.7395C6.10513 9.408 6.63479 9.9365 7.30213 9.9365Z" fill="#2CE25E"></path></g><defs><clipPath id="clip0_280_54"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2X5FW9W');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2X5FW9W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


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