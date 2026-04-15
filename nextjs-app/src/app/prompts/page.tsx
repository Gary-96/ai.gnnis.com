import React from 'react';
import { Metadata } from 'next';
import { getPromptsData } from '@/lib/data';
import PromptsFilter from '@/components/PromptsFilter';

export const metadata: Metadata = {
  title: 'Prompt宝典 | 格尼斯AI',
  description: '精选AI提示词库，涵盖视频生成、图像创作、文案写作等场景，一键复制即用。',
  keywords: ['AI Prompt', '提示词', 'Runway', 'Sora', 'Midjourney', 'ChatGPT'],
};

export default async function PromptsPage() {
  const prompts = await getPromptsData();
  
  // 统计数据
  const totalPrompts = prompts.length;
  const totalModels = new Set(prompts.flatMap(p => p.models)).size;
  const totalCategories = new Set(prompts.map(p => p.category)).size;

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Prompt宝典
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            精选AI提示词库，涵盖视频生成、图像创作、文案写作等场景。每个Prompt都经过实战验证，一键复制即可使用。
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">{totalPrompts}</div>
              <div className="text-sm text-white/40 mt-1">精选Prompt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{totalModels}</div>
              <div className="text-sm text-white/40 mt-1">适用模型</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">{totalCategories}</div>
              <div className="text-sm text-white/40 mt-1">应用场景</div>
            </div>
          </div>
        </header>

        {/* Filter Section */}
        <PromptsFilter prompts={prompts} />
      </div>
    </div>
  );
}
