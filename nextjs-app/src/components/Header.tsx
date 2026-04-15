'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
            JH
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            GNNIS <span className="text-teal-400">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {language === 'zh' ? '首页' : language === 'ja' ? 'ホーム' : 'Home'}
          </Link>
          <Link href="/tools" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {language === 'zh' ? '工具' : language === 'ja' ? 'ツール' : 'Tools'}
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {language === 'zh' ? '博客' : language === 'ja' ? 'ブログ' : 'Blog'}
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {language === 'zh' ? '隐私' : language === 'ja' ? 'プライバシー' : 'Privacy'}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              <span>{languages.find(l => l.code === language)?.flag}</span>
              <span>{languages.find(l => l.code === language)?.label}</span>
              <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition-colors ${
                      language === lang.code ? 'text-teal-400' : 'text-white/70'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                    {language === lang.code && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
