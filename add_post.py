import json
import os
from datetime import datetime

CONTENT_FILE = 'content.json'

def load_content():
    if os.path.exists(CONTENT_FILE):
        with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"tools": {"hero": [], "feature": [], "compact": []}, "articles": []}

def save_content(data):
    with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def add_tool(data):
    print("\n--- 添加 AI 工具 ---")
    tool_type = input("工具类型 (hero/feature/compact): ").strip().lower()
    if tool_type not in data['tools']:
        print("错误: 类型必须是 hero, feature 或 compact")
        return

    item = {
        "id": input("唯一 ID (如: chatgpt): ").strip(),
        "title": input("标题: ").strip(),
        "subtitle": input("副标题/描述: ").strip(),
        "btnText": input("按钮文字 (默认: 开始创作): ").strip() or "开始创作",
        "img": input("图片路径 (如: img/home.png): ").strip(),
        "url": input("跳转链接: ").strip()
    }
    
    data['tools'][tool_type].append(item)
    print(f"成功添加工具: {item['title']}")

def add_article(data):
    print("\n--- 添加 博客文章 ---")
    item = {
        "id": f"art-{int(datetime.now().timestamp())}",
        "category": input("分类 (如: AI NEWS): ").strip().upper(),
        "date": datetime.now().strftime("%b %d, %Y").upper(),
        "title": input("标题: ").strip(),
        "excerpt": input("摘要: ").strip(),
        "url": input("文章链接 (如果有): ").strip() or "#"
    }
    
    data['articles'].insert(0, item) # 新文章排在前面
    print(f"成功添加文章: {item['title']}")

def main():
    data = load_content()
    
    while True:
        print("\n=== 格尼斯 AI 内容管理助手 ===")
        print("1. 添加工具 (Tool)")
        print("2. 添加文章 (Article)")
        print("3. 保存并退出")
        choice = input("请选择 (1-3): ").strip()
        
        if choice == '1':
            add_tool(data)
        elif choice == '2':
            add_article(data)
        elif choice == '3':
            save_content(data)
            print("数据已保存到 content.json")
            break
        else:
            print("无效输入，请重试。")

if __name__ == "__main__":
    main()
