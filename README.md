# 格尼斯 AI (ai.gnnis.com)

一个简洁优雅的 AI 工具导航网站，帮助用户快速发现和使用优质 AI 服务。

![预览](img/home.png)

## 功能特点

- 动态展示 AI 工具卡片（Hero、Feature、Compact 三种布局）
- 提示词库（Prompt Library）支持一键复制
- 深度专栏博客文章展示
- 沉浸式 3D 粒子动画背景
- 响应式设计，支持移动端访问
- 数据与页面分离，通过 JSON 文件管理内容

## 技术栈

- **前端**: 原生 HTML5 + CSS3 + JavaScript
- **样式**: 自定义 CSS + Tailwind 风格类名
- **动画**: Canvas 2D 3D 粒子系统
- **数据**: JSON 静态数据源
- **内容管理**: Python 脚本辅助录入

## 项目结构

```
.
├── index.html          # 首页 - AI 工具展示
├── prompts.html        # 提示词库页面
├── blog.html           # 深度专栏页面
├── content.json        # 数据文件（工具、文章、提示词）
├── add_post.py         # 内容管理助手脚本
├── static/             # 静态资源
│   ├── index.082d951a.css
│   ├── iconfont.css
│   └── iconfont.woff2
├── img/                # 图片资源
│   ├── home.png
│   ├── home1.png ~ home5.png
└── nextjs-app/         # Next.js 版本（独立）
```

## 快速开始

### 1. 本地预览

直接使用浏览器打开 `index.html` 即可预览：

```bash
# macOS
open index.html

# 或使用本地服务器（推荐）
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

### 2. 添加 AI 工具

方式一：直接编辑 `content.json`

```json
{
  "tools": {
    "hero": [{"title": "...", "subtitle": "...", "img": "...", "url": "...", "btnText": "..."}],
    "feature": [...],
    "compact": [...]
  }
}
```

方式二：使用 Python 脚本交互式添加

```bash
python3 add_post.py
```

### 3. 添加博客文章

同样可以通过 `add_post.py` 脚本或编辑 `content.json`：

```json
{
  "articles": [
    {
      "title": "文章标题",
      "category": "分类",
      "date": "Apr 15, 2026",
      "excerpt": "摘要内容",
      "url": "#"
    }
  ]
}
```

### 4. 添加提示词

编辑 `content.json` 中的 `prompts` 数组：

```json
{
  "prompts": [
    {
      "title": "提示词标题",
      "models": ["模型1", "模型2"],
      "skills": "使用技巧说明",
      "content": "具体的提示词内容"
    }
  ]
}
```

## 部署

### 静态部署

本项目为纯静态网站，可部署到任何静态托管平台：

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

### 部署步骤（以 Vercel 为例）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

## Next.js 版本

项目同时包含一个 Next.js 版本（位于 `nextjs-app/` 目录）：

```bash
cd nextjs-app
npm install
npm run dev        # 开发模式
npm run build      # 构建静态导出
```

Next.js 版本特性：
- TypeScript 支持
- 服务端渲染 (SSG)
- 更好的 SEO 优化
- 组件化架构

## 自定义配置

### 修改主题色

在 `index.html` 的 `<style>` 标签中搜索 `#14b8a6`（青色主题色），替换为你喜欢的颜色。

### 调整背景动画

在 `index.html` 的 `<script>` 标签中找到 `frame()` 函数，修改以下参数：

```javascript
vars = {
  initParticles: 700,    // 粒子数量
  vortexHeight: 25,      // 漩涡高度
  distributionRadius: 800  // 分布半径
}
```

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License © 2026 ai.gnnis.com
