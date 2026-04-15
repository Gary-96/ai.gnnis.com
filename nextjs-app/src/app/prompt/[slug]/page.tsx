import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPromptsData } from '@/lib/data';

// 生成静态路径
export async function generateStaticParams() {
  const prompts = await getPromptsData();
  return prompts.map((prompt) => ({
    slug: prompt.id,
  }));
}

// 根据 slug 获取数据
async function getPromptData(slug: string) {
  const prompts = await getPromptsData();
  const prompt = prompts.find(p => p.id === slug);
  
  if (!prompt) {
    return {
      title: 'Prompt Not Found',
      tags: [],
      markdown: 'The requested prompt could not be found.',
    };
  }

  return {
    title: prompt.title,
    tags: prompt.models,
    markdown: `
# ${prompt.title}

## 适用模型
${prompt.models.map(m => `- **${m}**`).join('\n')}

## 使用技巧
${prompt.skills}

## Prompt 内容

\`\`\`text
${prompt.content}
\`\`\`

---
💡 **提示**: 点击右上角"复制"按钮可一键复制完整 Prompt，直接粘贴到对应 AI 工具中使用。
    `,
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getPromptData(params.slug);
  return {
    title: `${data.title} | 格尼斯AI Prompts`,
    description: `学习如何使用 ${data.title} 提示词，最大化发挥AI潜力。`,
  };
}

export default async function PromptDetailPage({ params }: { params: { slug: string } }) {
  const data = await getPromptData(params.slug);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content Area */}
      <article className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h1>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-teal max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
          {/* @ts-expect-error React 18 type compatibility issue with react-markdown */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.markdown}
          </ReactMarkdown>
        </div>
      </article>

      {/* Sidebar Area */}
      <aside className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold text-white mb-4">相关 Prompts</h3>
          <p className="text-white/40 text-sm">更多推荐内容...</p>
        </div>
      </aside>
    </main>
  );
}
