# 茅台Meme网站项目

## 项目简介

这是一个像素风格的茅台Meme网站，以幽默的方式展示茅台股票和$MOUTAI币的概念。网站采用单页滚动设计，包含三个主要部分：

1. **首页 (Home)** - 展示茅台品牌理念和$MOUTAI币介绍
2. **行情图 (Chart)** - 展示模拟的茅台股票和$MOUTAI币K线图
3. **分享 (Share)** - 提供分享功能，可一键分享到Twitter

## 技术特点

- **像素风格设计** - 使用Press Start 2P字体和像素化CSS效果
- **响应式布局** - 适配桌面和移动设备
- **动态K线图** - 使用Canvas绘制模拟的股票和币价走势
- **交互效果** - 丰富的动画和交互体验
- **分享功能** - 集成Twitter分享API

## 文件结构

```
maotai/
├── src/
│   ├── index.html          # 主页面
│   ├── css/
│   │   └── style.css       # 样式文件
│   └── js/
│       ├── chart.js        # K线图绘制
│       └── main.js         # 主要功能
├── start_server.py         # 启动脚本
├── README.md              # 项目说明
├── requirements.txt       # Python依赖
└── .gitignore            # Git忽略文件
```

## 运行方式

### 方法1：使用Python服务器
```bash
python start_server.py
```

### 方法2：使用Node.js服务器
```bash
cd src
npx http-server -p 8000
```

### 方法3：直接打开文件
直接在浏览器中打开 `src/index.html` 文件

## 功能说明

### 1. 首页部分
- 像素风格的茅台瓶动画
- 品牌标语："A sip of tradition, a shot of speculation."
- 茅台投资理念介绍
- 浮动金币动画效果

### 2. 行情图部分
- 模拟茅台股票万年长牛走势
- 模拟$MOUTAI币暴涨走势
- 实时价格更新动画
- 幽默的行情评论

### 3. 分享部分
- 三个预设分享文案
- 一键分享到Twitter功能
- 随机选择分享内容

## 设计理念

这个项目以幽默的方式调侃了：
- 茅台股票在A股市场的"神话"地位
- 币圈meme币的暴涨文化
- 中产阶级对茅台的投资幻想
- Web3时代年轻人的投资热情

## 注意事项

- 这是一个娱乐性质的Meme网站
- 所有数据都是模拟的，不构成投资建议
- 仅供学习和娱乐使用

## 技术栈

- HTML5
- CSS3 (动画、渐变、响应式)
- JavaScript (ES6+)
- Canvas API (图表绘制)
- Twitter Web Intent API (分享功能)

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License - 仅供学习和娱乐使用 