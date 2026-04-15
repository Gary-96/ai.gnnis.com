import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Dummy data for example purposes. In real app, fetch from JSON or DB via params.slug
const getPromptData = (slug: string) => {
  return {
    title: slug.includes('business') ? 'Advanced Business Plan Generator' : 'Sample Prompt',
    tags: ['GPT-4', 'Claude 3.5'],
    markdown: `
# ${slug.includes('business') ? 'Advanced Business Plan Generator' : 'Sample Prompt'}

This is a detailed markdown description of the prompt. You can include:
- Best use cases
- Common parameters to tweak
- Required input formats

## The Prompt

\`\`\`text
You are an expert...
[Your detailed prompt template here]
\`\`\`

## Why it works
This prompt leverages specific persona constraints to limit the randomness and increase the professional tone.
`,
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = getPromptData(params.slug);
  return {
    title: `${data.title} | JianHui AI Prompts`,
    description: `Learn how to use the ${data.title} prompt to maximize your AI's potential.`,
  };
}

export default function PromptDetailPage({ params }: { params: { slug: string } }) {
  const data = getPromptData(params.slug);

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
        
        {/* AdSense Top Slot */}
        <div className="w-full h-[90px] bg-black/40 border border-gray-800 rounded flex items-center justify-center mb-8 overflow-hidden relative">
          <span className="text-xs text-gray-500">Google AdSense - Responsive Top</span>
          {/* Include AdSense script and <ins> element here */}
        </div>

        <div className="prose prose-invert prose-teal max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.markdown}
          </ReactMarkdown>
        </div>

        {/* AdSense Bottom Slot */}
        <div className="w-full h-[250px] bg-black/40 border border-gray-800 rounded flex items-center justify-center mt-12 overflow-hidden relative">
          <span className="text-xs text-gray-500">Google AdSense - Bottom Rectangle</span>
          {/* Include AdSense script and <ins> element here */}
        </div>
      </article>

      {/* Sidebar Area */}
      <aside className="lg:col-span-1 flex flex-col gap-6">
        {/* AdSense Sidebar Slot */}
        <div className="w-full h-[600px] bg-black/40 border border-gray-800 rounded-2xl flex items-center justify-center overflow-hidden lg:sticky lg:top-24">
          <span className="text-xs text-gray-500">Google AdSense - Sidebar Skyscraper</span>
          {/* Include AdSense script and <ins> element here */}
        </div>
      </aside>
    </main>
  );
}
