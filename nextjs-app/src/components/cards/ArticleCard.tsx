import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ArticleCard({ article }: { article: ArticleData }) {
  return (
    <Link 
      href={`/article/${article.id}`}
      className="group block bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-4px]"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-medium backdrop-blur-md border border-teal-500/20">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-white/60 text-sm line-clamp-2 mb-4">
          {article.summary}
        </p>
        
        <div className="flex justify-between items-center text-[0.75rem] text-white/40 border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
