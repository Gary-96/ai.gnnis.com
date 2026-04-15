"use client";

import React, { useState, useMemo } from 'react';

interface PromptData {
  id: string;
  title: string;
  models: string[];
  skills: string;
  content: string;
  category: string;
}

interface Props {
  prompts: PromptData[];
}

export default function PromptsFilter({ prompts }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  
  // 提取所有分类
  const categories = useMemo(() => {
    const cats = new Set(prompts.map(p => p.category));
    return ['全部', ...Array.from(cats)];
  }, [prompts]);
  
  // 筛选逻辑
  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesCategory = selectedCategory === '全部' || prompt.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.models.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [prompts, selectedCategory, searchQuery]);

  // 复制到剪贴板
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制到剪贴板！');
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <>
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="搜索 Prompt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-teal-500/50 transition-all"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-white/40">
        显示 {filteredPrompts.length} 个 Prompt
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <article key={prompt.id} className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {prompt.models.slice(0, 3).map((model) => (
                        <span key={model} className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs font-medium rounded border border-teal-500/20">
                          {model}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                      {prompt.title}
                    </h3>
                  </div>
                </div>
                
                {/* Skills */}
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {prompt.skills}
                </p>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(prompt.content)}
                    className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    复制 Prompt
                  </button>
                  <a
                    href={`/prompt/${prompt.id}`}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors border border-white/10"
                  >
                    查看详情
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-white/20 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-white/40 text-lg">没有找到匹配的 Prompt</p>
          <p className="text-white/20 text-sm mt-2">试试其他搜索词？</p>
        </div>
      )}
    </>
  );
}
