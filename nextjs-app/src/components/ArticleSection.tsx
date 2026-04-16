import React from 'react';
import Link from 'next/link';
import ArticleCard from './cards/ArticleCard';
import { ArticleSkeleton } from './skeletons/Skeleton';

interface ArticleData {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export default function ArticleSection({ 
  articles, 
  loading 
}: { 
  articles: ArticleData[], 
  loading: boolean 
}) {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-10 py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            最新深度文章
          </h2>
          <p className="text-white/60">
            洞察 AI 行业趋势，掌握前沿技术动态。
          </p>
        </div>
        <Link href="/skills" className="text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium">
          查看全部文章 →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </>
        ) : (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        )}
      </div>
    </section>
  );
}
