import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { getContentData } from '@/lib/data';

// 生成静态路径
export async function generateStaticParams() {
  const { articles } = await getContentData();
  return articles.map((article: any) => ({
    slug: article.id,
  }));
}

// 根据 slug 获取数据
async function getArticleData(slug: string) {
  const { articles } = await getContentData();
  const article = articles.find((a: any) => a.id === slug);
  
  if (!article) {
    return null;
  }

  return article;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleData(params.slug);
  if (!article) {
    return { title: '文章未找到 | 格尼斯AI' };
  }
  return {
    title: `${article.title} | 格尼斯AI`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-white/60 mb-8">您访问的文章可能已被删除或移动。</p>
          <Link href="/skills" className="text-teal-400 hover:text-teal-300">
            ← 返回技能专栏
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-white/40">
          <Link href="/" className="hover:text-white/60">首页</Link>
          <span className="mx-2">/</span>
          <Link href="/skills" className="hover:text-white/60">技能专栏</Link>
          <span className="mx-2">/</span>
          <span className="text-white/60">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20">
              {article.category}
            </span>
            <span className="text-white/40 text-sm">{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{article.title}</h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>作者：{article.author}</span>
            <span>•</span>
            <span>阅读时间：{article.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-teal max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-headings:text-white prose-p:text-white/70 prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300">
          {/* @ts-expect-error React 18 type compatibility issue with react-markdown */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content || article.excerpt}
          </ReactMarkdown>
        </article>

        {/* Back Link */}
        <footer className="mt-12 pt-8 border-t border-white/10">
          <Link href="/skills" className="text-teal-400 hover:text-teal-300 transition-colors">
            ← 返回技能专栏
          </Link>
        </footer>
      </div>
    </main>
  );
}