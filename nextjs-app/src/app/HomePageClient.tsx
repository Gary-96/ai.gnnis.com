'use client';

import React, { useState } from 'react';
import SaaSHero from '@/components/SaaSHero';
import CardSection from '@/components/CardSection';
import ArticleSection from '@/components/ArticleSection';
import AdSidebar from '@/components/AdSidebar';
import ParticleBackground from '@/components/ParticleBackground';

interface HomePageClientProps {
  initialData: {
    tools: any;
    articles: any[];
  }
}

/**
 * Client-side interactive layer for the homepage
 */
export default function HomePageClient({ initialData }: HomePageClientProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-teal-500/30">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* SaaS Hero Section */}
      <SaaSHero />

      {/* Main Content: 2-Column Layout */}
      <div className="max-w-[1280px] mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Feed Column */}
          <main className="flex-1 min-w-0">
            {/* Tools Feed */}
            <div className="mb-20">
              <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-8">
                Featured Tools
              </h2>
              <CardSection 
                data={initialData.tools} 
                loading={false} 
                visibleCount={visibleCount}
                onLoadMore={handleLoadMore}
              />
            </div>

            {/* Articles Section */}
            <div className="border-t border-white/5 pt-20">
              <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-8">
                Latest Insights
              </h2>
              <ArticleSection articles={initialData.articles} loading={false} />
            </div>
          </main>

          {/* AdSense Sidebar */}
          <AdSidebar />
          
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-sm text-white/20">
          © {new Date().getFullYear()} GNNIS AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
