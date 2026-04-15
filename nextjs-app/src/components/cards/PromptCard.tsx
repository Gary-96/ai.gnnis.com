'use client';

import React, { useState } from 'react';
import { PromptData } from '@/types/card';

interface PromptCardProps {
  prompt: PromptData;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-teal-500/30 transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
            {prompt.title}
          </h3>
          {prompt.category && (
            <span className="flex-shrink-0 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">
              {prompt.category}
            </span>
          )}
        </div>
        
        {/* Model Tags */}
        <div className="flex flex-wrap gap-2">
          {prompt.models.map((model, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs font-medium"
            >
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-6 bg-white/[0.02]">
        <div className="flex items-start gap-2 mb-3">
          <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-white/70 leading-relaxed">
            {prompt.skills}
          </p>
        </div>
      </div>

      {/* Prompt Content */}
      <div className="p-6">
        <div className="relative">
          <pre className={`text-sm text-white/80 bg-black/40 rounded-lg p-4 overflow-x-auto ${expanded ? '' : 'max-h-24'}`}>
            <code className="font-mono text-xs">{prompt.content}</code>
          </pre>
          
          {!expanded && prompt.content.length > 100 && (
            <button
              onClick={() => setExpanded(true)}
              className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2"
            >
              <span className="text-xs text-teal-400 hover:text-teal-300 transition-colors">
                展开全文
              </span>
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
              copied
                ? 'bg-teal-500/20 text-teal-400'
                : 'bg-teal-500 text-white hover:bg-teal-400'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                已复制
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                一键复制
              </>
            )}
          </button>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            {expanded ? '收起' : '展开'}
          </button>
        </div>
      </div>
    </div>
  );
}
