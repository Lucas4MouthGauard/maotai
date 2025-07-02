# GitHub 仓库设置指南

## 手动创建GitHub仓库步骤

1. **访问 GitHub.com**
   - 登录您的GitHub账户

2. **创建新仓库**
   - 点击右上角的 "+" 号
   - 选择 "New repository"

3. **仓库设置**
   - Repository name: `maotai-meme-site`
   - Description: `像素风格茅台Meme网站 - 一个有趣的Web3项目`
   - 选择 Public（公开）
   - 不要勾选 "Add a README file"（我们已经有了）
   - 不要勾选 "Add .gitignore"（我们已经有了）

4. **创建仓库**
   - 点击 "Create repository"

5. **获取仓库URL**
   - 复制仓库URL，格式类似：`https://github.com/您的用户名/maotai-meme-site.git`

## 推送代码到GitHub

创建仓库后，运行以下命令：

```bash
# 添加远程仓库
git remote add origin https://github.com/您的用户名/maotai-meme-site.git

# 推送代码
git branch -M main
git push -u origin main
```

## 仓库信息

- **项目名称**: maotai-meme-site
- **描述**: 像素风格茅台Meme网站
- **技术栈**: HTML5 + CSS3 + JavaScript
- **特色**: 像素风格设计、K线图动画、Twitter分享功能

## 部署选项

### 1. GitHub Pages（推荐）
- 在仓库设置中启用GitHub Pages
- 选择 `main` 分支作为源
- 网站将自动部署到：`https://您的用户名.github.io/maotai-meme-site`

### 2. Netlify
- 连接GitHub仓库
- 自动部署和更新

### 3. Vercel
- 导入GitHub仓库
- 自动部署和CDN加速 