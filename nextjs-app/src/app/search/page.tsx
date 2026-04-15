"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

// 搜索结果卡片组件
function SearchResultItem({ type, title, excerpt, href }: { 
  type: '工具' | 'Prompt' | '文章';
  title: string;
  excerpt: string;
  href: string;
}) {
  const typeColors = {
    '工具': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Prompt': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    '文章': 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  };

  return (
    <Link href={href} className="block group">
      <article className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${typeColors[type]}`}>
            {type}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm line-clamp-2">{excerpt}</p>
      </article>
    </Link>
  );
}

// 热门搜索建议
const hotSearches = [
  '视频生成', 'Midjourney', 'ChatGPT', 'Logo设计', '文案写作', 'Runway'
];

// 模拟搜索数据
const searchData = {
  tools: [
    { id: 'chatgpt', title: 'ChatGPT 超级问答', subtitle: '全能型AI智能助手', href: 'https://chatgpt.com' },
    { id: 'claude', title: 'Claude AI', subtitle: '安全可靠的AI助手', href: 'https://claude.ai' },
    { id: 'midjourney', title: 'Midjourney 创意绘画', subtitle: '输入文字，生成图像', href: 'https://midjourney.com' },
    { id: 'suno', title: 'Suno 音乐生成', subtitle: '一键生成专业级音乐', href: 'https://suno.com' },
    { id: 'runway', title: 'Runway Gen-3', subtitle: '视频生成与编辑', href: 'https://runwayml.com' },
  ],
  prompts: [
    { id: 'prompt-0', title: '电影级极客科幻场景', skills: '核心技巧在于使用镜头语言描述词，如 Cinematic lighting 和 Low-angle motion', href: '/prompt/prompt-0', category: '视频生成' },
    { id: 'prompt-1', title: 'YouTube/TikTok 爆款 3D 角色动画', skills: '重点描述角色的面部表情和肢体动态，使用 --ar 9:16 适配竖屏', href: '/prompt/prompt-1', category: '视频生成' },
    { id: 'prompt-5', title: 'Midjourney 极简风格品牌 Logo 设计', skills: '品牌设计讲究简洁识别度，使用 minimal logo design 风格词', href: '/prompt/prompt-5', category: '图像生成' },
    { id: 'prompt-6', title: 'ChatGPT 高效文案写作指令模板', skills: '文案写作的秘诀在于明确受众和语气，使用 persona 和 tone 参数', href: '/prompt/prompt-6', category: '文案写作' },
  ],
  articles: [
    { id: 'article-0', title: '独立开发者如何通过AI工具变现？', excerpt: '在这个数字创造时代，利用简单的代码和提示词，个人开发者也能打造高流量网站...', href: '/article/article-0' },
    { id: 'article-1', title: 'Midjourney V6 完整使用指南：从入门到精通', excerpt: '详解Midjourney V6的所有新特性、参数设置、风格词用法...', href: '/article/article-1' },
    { id: 'article-2', title: 'Runway Gen-3 视频生成实战：10个商业案例', excerpt: '用Runway Gen-3为品牌制作宣传片的完整流程...', href: '/article/article-2' },
    { id: 'article-3', title: 'ChatGPT 高效写作完全手册：30个实用Prompt', excerpt: '覆盖文案、博客、邮件、报告等场景的ChatGPT写作指令...', href: '/article/article-3' },
  ]
};

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  
  // 搜索逻辑
  const searchResults = useMemo(() => {
    if (!searchInput.trim()) {
      return { tools: [], prompts: [], articles: [] };
    }
    
    const lowerQuery = searchInput.toLowerCase();
    
    const tools = searchData.tools.filter(t => 
      t.title.toLowerCase().includes(lowerQuery) || 
      t.subtitle.toLowerCase().includes(lowerQuery)
    );
    
    const prompts = searchData.prompts.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.skills.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
    
    const articles = searchData.articles.filter(a => 
      a.title.toLowerCase().includes(lowerQuery) ||
      a.excerpt.toLowerCase().includes(lowerQuery)
    );
    
    return { tools, prompts, articles };
  }, [searchInput]);

  const totalResults = searchResults.tools.length + searchResults.prompts.length + searchResults.articles.length;

  const handleHotSearch = (keyword: string) => {
    setSearchInput(keyword);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Search Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              全站搜索
            </span>
          </h1>
          <p className="text-white/60 text-lg">
            搜索AI工具、Prompt技巧、技能教程
          </p>
        </header>

        {/* Search Input */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="输入关键词搜索..."
              className="w-full px-6 py-4 pl-12 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
              autoFocus
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Hot Searches */}
        {!searchInput && (
          <div className="mb-12">
            <h3 className="text-sm text-white/40 mb-3">热门搜索</h3>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleHotSearch(keyword)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm rounded-full transition-colors border border-white/5"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchInput.trim() && (
          <section>
            <div className="mb-6">
              <p className="text-white/60 text-sm">
                找到 <span className="text-teal-400 font-semibold">{totalResults}</span> 个结果
              </p>
            </div>

            {totalResults === 0 ? (
              <div className="text-center py-20">
                <div className="text-white/20 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white/40 text-lg mb-2">没有找到相关结果</p>
                <p className="text-white/20 text-sm">试试其他关键词？</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Tools */}
                {searchResults.tools.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      AI工具 ({searchResults.tools.length})
                    </h2>
                    <div className="space-y-3">
                      {searchResults.tools.map((tool) => (
                        <SearchResultItem
                          key={tool.id}
                          type="工具"
                          title={tool.title}
                          excerpt={tool.subtitle}
                          href={tool.href}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Prompts */}
                {searchResults.prompts.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      Prompts ({searchResults.prompts.length})
                    </h2>
                    <div className="space-y-3">
                      {searchResults.prompts.map((prompt) => (
                        <SearchResultItem
                          key={prompt.id}
                          type="Prompt"
                          title={prompt.title}
                          excerpt={prompt.skills.slice(0, 80) + '...'}
                          href={prompt.href}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles */}
                {searchResults.articles.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                      文章 ({searchResults.articles.length})
                    </h2>
                    <div className="space-y-3">
                      {searchResults.articles.map((article) => (
                        <SearchResultItem
                          key={article.id}
                          type="文章"
                          title={article.title}
                          excerpt={article.excerpt}
                          href={article.href}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Empty State */}
        {!searchInput.trim() && (
          <div className="text-center py-16 border-t border-white/5">
            <p className="text-white/40 mb-2">输入关键词搜索AI工具、Prompt和教程</p>
            <p className="text-white/20 text-sm">支持模糊搜索和多分类筛选</p>
          </div>
        )}
      </div>
    </main>
  );
}
