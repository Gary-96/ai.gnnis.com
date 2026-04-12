import React from 'react';
import HeroCard from '@/components/cards/HeroCard';
import FeatureCard from '@/components/cards/FeatureCard';
import CompactCard from '@/components/cards/CompactCard';
import { CardSkeleton } from '@/components/skeletons/Skeleton';

/**
 * CardSection — Updated for SaaS Feed
 */
export default function CardSection({ 
  data, 
  loading,
  visibleCount,
  onLoadMore
}: { 
  data: any, 
  loading: boolean,
  visibleCount: number,
  onLoadMore?: () => void
}) {
  if (loading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map(i => <CardSkeleton key={i} />)}
      </div>
    );
  }

  // Combine all tools into a single feed logic
  const { hero = [], feature = [], compact = [] } = data;
  const allTools = [...hero, ...feature, ...compact];
  const displayedTools = allTools.slice(0, visibleCount);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-6">
        {displayedTools.map((tool: any, index: number) => {
          // Staggered layout feel using different card types
          if (index % 5 === 0) return <HeroCard key={tool.id} card={tool} />;
          if (index % 3 === 0) return <FeatureCard key={tool.id} card={tool} large />;
          return <CompactCard key={tool.id} card={tool} />;
        })}
      </div>

      {visibleCount < allTools.length && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={onLoadMore}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all active:scale-95"
          >
            Load More Tools
          </button>
        </div>
      )}
    </div>
  );
}
