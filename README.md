# Sealos 营销网站

本仓库包含 Sealos 的营销网站，旨在向潜在用户和客户展示 Sealos 云原生应用部署平台的产品和服务。

## 功能特点

- 现代化 UI 设计与响应式布局
- SEO 优化的页面结构和元数据
- 交互式价格计算器
- 产品展示和文档
- 多种应用部署方案展示（Docker容器化部署、DevBox云开发、静态代码托管、数据库部署）

## 项目结构

```
/
├── index.html              # 网站主页
├── price/                  # 价格计算器页面
├── devbox/                 # DevBox产品页面
├── docker/                 # Docker容器化部署页面
├── js/                     # JavaScript文件
│   ├── sem.js              # 主站点交互脚本
│   ├── sem-price.js        # 价格计算器脚本
│   ├── sem-devbox.js       # DevBox页面脚本
│   └── sem-aiproxy.js      # AIProxy页面脚本
├── imgs/                   # 图片资源
├── aiproxy/                # AIProxy产品页面
├── sealaf/                 # SealAF产品页面
├── docs/                   # 文档页面
├── case/                   # 客户案例页面
├── app_store/              # 应用商店页面
├── tools/                  # 工具脚本
├── sitemap.xml             # 网站地图
├── robots.txt              # 搜索引擎爬虫规则
├── nginx.conf              # Nginx配置文件
└── Dockerfile              # Docker构建文件
```

## 开发指南

本地开发启动方式：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 最近优化

### 页面自适应效果优化
- 增强了响应式设计，添加了更多媒体查询断点(1200px, 1024px, 768px, 576px, 480px)
- 优化了容器宽度、图片和视频显示、功能卡片布局和导航标签
- 改进了表格在移动设备上的滚动体验
- 修复了页面在不同设备上的显示问题

### 浏览器控制台错误修复
- 修复了字体图标加载错误，创建了本地CSS文件使用Unicode字符替代Font Awesome
- 修复了导航栏和页脚脚本路径问题
- 为固定导航栏添加了顶部内边距，确保内容不被遮挡

### SEO优化
- 改进了页面标题、描述和关键词，聚焦于核心业务关键词
- 优化了结构化数据，增加了相关关键词和URL
- 将次级标题改为h1标签作为主标题，提高SEO权重
- 为所有图片添加了alt属性，提高可访问性和SEO效果

## 分支说明

- `main`: 生产就绪代码
- `enhance-image-alt-seo`: SEO改进分支

## 贡献指南

在为此仓库做贡献时，请遵循已建立的代码风格和提交信息约定。