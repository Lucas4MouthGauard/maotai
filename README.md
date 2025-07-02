# Maotai 项目

这是一个本地仓库项目，用于管理和组织代码。

## 项目结构

```
maotai/
├── README.md          # 项目说明文档
├── .gitignore         # Git忽略文件配置
├── requirements.txt   # Python依赖包列表
├── src/              # 源代码目录
│   ├── __init__.py
│   ├── main.py       # 主程序入口
│   └── utils.py      # 工具函数
├── tests/            # 测试目录
│   ├── __init__.py
│   └── test_main.py  # 测试文件
├── docs/             # 文档目录
│   └── api.md        # API文档
├── config/           # 配置文件目录
│   └── settings.py   # 配置文件
└── data/             # 数据目录
    └── sample.json   # 示例数据文件
```

## 安装和使用

1. 克隆仓库：
```bash
git clone <repository-url>
cd maotai
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

3. 运行程序：
```bash
python src/main.py
```

## 开发

- 源代码位于 `src/` 目录
- 测试文件位于 `tests/` 目录
- 配置文件位于 `config/` 目录

## 许可证

MIT License 