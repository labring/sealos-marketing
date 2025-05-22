# Sealos 营销网站

本仓库包含 Sealos 的营销网站，旨在向潜在用户和客户展示 Sealos 产品和服务。

## 功能特点

- 现代化 UI 设计与响应式布局
- SEO 优化的页面
- 交互式价格计算器
- 产品展示和文档

## 项目结构

```
/
├── index.html              # 网站主页
├── price/                  # 价格计算器页面
├── devbox/                 # DevBox产品页面
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

## SEO 增强

当前开发分支 (`enhance-image-alt-seo`) 专注于改进整个网站的图片 alt 文本，以提高 SEO 性能和可访问性。

## 分支说明

- `main`: 生产就绪代码
- `enhance-image-alt-seo`: 当前用于 SEO 改进的开发分支

## 贡献指南

在为此仓库做贡献时，请遵循已建立的代码风格和提交信息约定。