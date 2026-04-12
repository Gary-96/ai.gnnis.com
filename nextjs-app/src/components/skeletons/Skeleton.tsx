import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-white/10 rounded-lg ${className}`}
    />
  );
};

export const CardSkeleton = () => (
  <div className="w-full bg-[#1a1a1a] rounded-[2rem] p-8 border border-white/5 space-y-4">
    <div className="flex gap-8 items-center">
      <Skeleton className="w-[30%] aspect-video rounded-xl" />
      <div className="flex-1 space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-12 w-32 rounded-2xl" />
      </div>
    </div>
  </div>
);

export const ArticleSkeleton = () => (
  <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 h-full">
    <Skeleton className="w-full aspect-video rounded-none" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="flex justify-between items-center pt-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);
