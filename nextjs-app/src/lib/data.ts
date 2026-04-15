import fs from 'fs/promises';
import path from 'path';
import { CardData, CardSize, CardVariant, PromptData } from '@/types/card';

/**
 * 内容数据类型
 */
export interface ContentData {
  tools: {
    hero: CardData[];
    feature: CardData[];
    compact: CardData[];
  };
  articles: any[];
  prompts: PromptData[];
}

/**
 * Server-side data fetching utility for SSG
 */
export async function getContentData(): Promise<ContentData> {
  const filePath = path.join(process.cwd(), '../content.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const content = JSON.parse(jsonData);

  // Map tools to CardData structure
  const mappedTools = {
    hero: content.tools.hero.map((t: any) => mapTool(t, 'hero')),
    feature: content.tools.feature.map((t: any) => mapTool(t, 'feature')),
    compact: content.tools.compact.map((t: any) => mapTool(t, 'compact'))
  };

  // Map articles
  const mappedArticles = content.articles.map((a: any) => ({
    ...a,
    summary: a.excerpt,
    author: a.author || '格尼斯AI团队',
    readTime: a.readTime || '5 min'
  }));

  // Map prompts
  const mappedPrompts = content.prompts.map((p: any, index: number) => ({
    id: p.id || `prompt-${index}`,
    title: p.title,
    models: p.models,
    skills: p.skills,
    content: p.content,
    category: p.category || extractCategory(p.title)
  }));

  return {
    tools: mappedTools,
    articles: mappedArticles,
    prompts: mappedPrompts
  };
}

/**
 * 获取 Prompts 数据
 */
export async function getPromptsData(): Promise<PromptData[]> {
  const { prompts } = await getContentData();
  return prompts;
}

/**
 * 获取 Articles 数据
 */
export async function getArticlesData() {
  const { articles } = await getContentData();
  return articles;
}

/**
 * 获取单个文章
 */
export async function getArticleData(slug: string) {
  const { articles } = await getContentData();
  return articles.find((a: any) => a.id === slug);
}

/**
 * 全局搜索
 */
export async function searchContent(query: string): Promise<{
  tools: CardData[];
  prompts: PromptData[];
  articles: any[];
}> {
  if (!query || query.trim().length === 0) {
    return { tools: [], prompts: [], articles: [] };
  }

  const content = await getContentData();
  const lowerQuery = query.toLowerCase();

  // 搜索工具
  const matchedTools = [
    ...content.tools.hero,
    ...content.tools.feature,
    ...content.tools.compact
  ].filter((tool: CardData) => 
    tool.title.toLowerCase().includes(lowerQuery) ||
    tool.subtitle.toLowerCase().includes(lowerQuery)
  );

  // 搜索 Prompts
  const matchedPrompts = content.prompts.filter((p: PromptData) =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.skills.toLowerCase().includes(lowerQuery) ||
    p.content.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );

  // 搜索文章
  const matchedArticles = content.articles.filter((a: any) =>
    a.title.toLowerCase().includes(lowerQuery) ||
    a.excerpt.toLowerCase().includes(lowerQuery) ||
    (a.content && a.content.toLowerCase().includes(lowerQuery)) ||
    a.category.toLowerCase().includes(lowerQuery)
  );

  return {
    tools: matchedTools,
    prompts: matchedPrompts,
    articles: matchedArticles
  };
}

/**
 * 从标题提取分类
 */
function extractCategory(title: string): string {
  if (!title) return '其他';
  if (title.includes('视频') || title.includes('Video') || title.includes('Cinematic')) return '视频生成';
  if (title.includes('音乐') || title.includes('Music')) return '音频生成';
  if (title.includes('图像') || title.includes('Image') || title.includes('绘画')) return '图像生成';
  if (title.includes('Logo') || title.includes('品牌')) return '图像生成';
  if (title.includes('文案') || title.includes('写作') || title.includes('Writing')) return '文案写作';
  return '其他';
}

/**
 * Shared mapping logic
 */
function mapTool(item: any, size: CardSize): CardData {
  const itemId = item.id || '';
  return {
    id: itemId,
    title: item.title || '',
    subtitle: item.subtitle || '',
    buttonLabel: item.btnText || '了解更多',
    href: item.url || '#',
    imageSrc: item.img && item.img.startsWith('/') ? item.img : `/${item.img || 'placeholder.jpg'}`,
    imageAlt: item.title || '',
    variant: (itemId.includes('chat') || itemId.includes('qa')) ? 'chat' : 'draw' as CardVariant,
    size: size
  };
}