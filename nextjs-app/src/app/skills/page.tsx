import React from 'react';
import { Metadata } from 'next';
import { getArticlesData } from '@/lib/data';
import SkillsFilter from '@/components/SkillsFilter';

export const metadata: Metadata = {
  title: '技能专栏 | 格尼斯AI',
  description: 'AI技能教程、实战案例、工作流分享。从入门到精通，系统提升你的AI应用能力。',
  keywords: ['AI教程', 'AI技能', 'AI工作流', 'AI实战案例', 'AI学习'],
};

export default async function SkillsPage() {
  const articles = await getArticlesData();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              技能专栏
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            AI实战教程、工作流分享、深度案例解析。从入门到精通，系统提升AI应用能力。
          </p>
        </header>

        {/* Filter Section */}
        <SkillsFilter articles={articles} />
      </div>
    </div>
  );
}
