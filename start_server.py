#!/usr/bin/env python3
"""
简单的HTTP服务器来运行茅台Meme网站
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

def start_server():
    # 切换到src目录
    os.chdir('src')
    
    # 设置端口
    PORT = 8000
    
    # 创建HTTP服务器
    Handler = http.server.SimpleHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 茅台Meme网站启动成功！")
        print(f"📱 访问地址: http://localhost:{PORT}")
        print(f"🛑 按 Ctrl+C 停止服务器")
        
        # 自动打开浏览器
        try:
            webbrowser.open(f'http://localhost:{PORT}')
        except:
            pass
        
        # 启动服务器
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 服务器已停止")

if __name__ == "__main__":
    start_server() 