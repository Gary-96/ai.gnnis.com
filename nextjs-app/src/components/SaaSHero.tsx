'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

const SaaSHero = () => {
  const { language } = useTranslation();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  // ⌘K 快捷键跳转搜索
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        router.push('/search');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const content = {
    en: {
      title: 'The Best AI Tools Directory',
      subtitle: 'for Global Creators',
      searchPlaceholder: 'Search for AI tools (e.g. "Drawing")',
      tagline: 'Discover, compare, and integrate specialized AI services.',
      stats: [
        { value: '32+', label: 'Tools' },
        { value: '20+', label: 'Prompts' },
        { value: '10+', label: 'Tutorials' },
      ],
    },
    zh: {
      title: '全球优秀的 AI 工具导航',
      subtitle: '为创意者而生',
      searchPlaceholder: '搜索 AI 工具 (例如 "绘画")',
      tagline: '发现、对比并集成专业的 AI 服务。',
      stats: [
        { value: '32+', label: '精选工具' },
        { value: '20+', label: '实战 Prompt' },
        { value: '10+', label: '深度教程' },
      ],
    },
    ja: {
      title: '最高の AI ツールディレクトリ',
      subtitle: 'クリエイターのために',
      searchPlaceholder: 'AI ツールを検索 (例: "描画")',
      tagline: '専門的な AI サービスを発見し、比較し、統合します。',
      stats: [
        { value: '32+', label: 'ツール' },
        { value: '20+', label: 'プロンプト' },
        { value: '10+', label: 'チュートリアル' },
      ],
    },
  }[language] || {
    title: 'The Best AI Tools Directory',
    subtitle: 'for Global Creators',
    searchPlaceholder: 'Search for AI tools',
    tagline: 'Discover, compare, and integrate specialized AI services.',
    stats: [
      { value: '32+', label: 'Tools' },
      { value: '20+', label: 'Prompts' },
      { value: '10+', label: 'Tutorials' },
    ],
  };

  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-teal-500/10 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            {content.title}
          </span>
          <br />
          <span className="text-teal-400">{content.subtitle}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          {content.tagline}
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="relative w-full max-w-xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 h-16 backdrop-blur-xl group-focus-within:border-teal-500/50 transition-all">
            <svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={content.searchPlaceholder}
              className="w-full bg-transparent border-none outline-none px-4 text-white placeholder:text-white/20 text-lg"
            />
            <div 
              onClick={() => router.push('/search')}
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40 font-mono cursor-pointer hover:text-white/60 transition-colors"
            >
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </form>

        {/* Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 text-white/40 text-sm">
          {content.stats.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{stat.value}</span> {stat.label}
              </div>
              {idx < content.stats.length - 1 && (
                <div className="w-px h-4 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSHero;
