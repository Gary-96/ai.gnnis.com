import fs from 'fs/promises';
import path from 'path';
import { CardData, CardSize, CardVariant } from '@/types/card';

/**
 * Server-side data fetching utility for SSG
 */
export async function getContentData() {
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
    author: '简绘 AI 团队',
    readTime: '5 min'
  }));

  return {
    tools: mappedTools,
    articles: mappedArticles
  };
}

/**
 * Shared mapping logic
 */
function mapTool(item: any, size: CardSize): CardData {
  return {
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    buttonLabel: item.btnText || '了解更多',
    href: item.url || '#',
    imageSrc: item.img.startsWith('/') ? item.img : `/${item.img}`,
    imageAlt: item.title,
    variant: (item.id.includes('chat') || item.id.includes('qa')) ? 'chat' : 'draw' as CardVariant,
    size: size
  };
}
