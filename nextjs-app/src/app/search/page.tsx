"use client";

import React, { useState, useMemo, useEffect } from 'react';
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

interface SearchData {
  tools: Array<{id: string; title: string; subtitle: string; url?: string}>;
  prompts: Array<{id: string; title: string; skills: string; category: string; content?: string}>;
  articles: Array<{id: string; title: string; excerpt: string; content?: string; category?: string}>;
}

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState<SearchData | null>(null);
  const [loading, setLoading] = useState(true);

  // 从URL参数初始化搜索词
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) setSearchInput(decodeURIComponent(q));
  }, []);

  // 加载content.json
  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(json => {
        // 展平tools
        const allTools = [
          ...(json.tools?.hero || []),
          ...(json.tools?.feature || []),
          ...(json.tools?.compact || [])
        ];
        setData({
          tools: allTools,
          prompts: json.prompts || [],
          articles: json.articles || []
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load content:', err);
        setLoading(false);
      });
  }, []);
  
  // 搜索逻辑
  const searchResults = useMemo(() => {
    if (!data || !searchInput.trim()) {
      return { tools: [], prompts: [], articles: [] };
    }
    
    const lowerQuery = searchInput.toLowerCase();
    
    const tools = data.tools.filter(t => 
      t.title.toLowerCase().includes(lowerQuery) || 
      t.subtitle.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);
    
    const prompts = data.prompts.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.skills.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      (p.content && p.content.toLowerCase().includes(lowerQuery))
    ).slice(0, 5);
    
    const articles = data.articles.filter(a => 
      a.title.toLowerCase().includes(lowerQuery) ||
      a.excerpt.toLowerCase().includes(lowerQuery) ||
      (a.content && a.content.toLowerCase().includes(lowerQuery)) ||
      (a.category && a.category.toLowerCase().includes(lowerQuery))
    ).slice(0, 5);
    
    return { tools, prompts, articles };
  }, [data, searchInput]);

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
              disabled={loading}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {loading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
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
                          href={tool.url || '#'}
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
                          href={`/prompt/${prompt.id}`}
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
                          href={`/article/${article.id}`}
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
