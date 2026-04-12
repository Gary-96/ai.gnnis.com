import type { CardData } from '@/types/card'

/**
 * 大横向卡片数据（对应原 .module .item 区块）
 * 布局：图片在左，文字在右
 */
export const heroCards: CardData[] = [
  {
    id: 'inspiration-drawing',
    title: '灵感绘图',
    subtitle:
      '新创新，新想法，新构思，新视角\n让AI拓展你的灵感边界，体验不一样的世界吧！',
    buttonLabel: '开始创作',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home.png',
    imageAlt: '灵感绘图示例',
    variant: 'draw',
    size: 'hero',
  },
]

/**
 * 垂直功能卡片数据（对应原 .module1 .item 区块）
 * 布局：图片在上，文字+按钮在下
 * 在桌面端以 2+1 的方式排布，移动端竖向堆叠
 */
export const featureCards: CardData[] = [
  {
    id: 'blind-box',
    title: '3D盲盒人物',
    subtitle: '制作你的专属盲盒人物吧！',
    buttonLabel: '开始创作',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home1.png',
    imageAlt: '3D盲盒人物',
    variant: 'draw',
    size: 'feature',
  },
  {
    id: 'avatar',
    title: '专属人物头像',
    subtitle: '制作你自己的Q版头像吧！',
    buttonLabel: '开始创作',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home2.png',
    imageAlt: '专属人物头像',
    variant: 'draw',
    size: 'feature',
  },
  {
    id: 'super-qa',
    title: '超级问答',
    subtitle: '你想问的答案都在这里',
    buttonLabel: '开始问答',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home3.png',
    imageAlt: '超级问答',
    variant: 'chat',
    size: 'feature',
  },
]

/**
 * 紧凑型卡片数据（对应原 .module3-item 区块）
 * 布局：文字+按钮在左，小图在右
 */
export const compactCards: CardData[] = [
  {
    id: 'ai-drawing',
    title: 'AI 绘图',
    subtitle: '快速拓展你的灵感边界',
    buttonLabel: '开始创作',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home4.png',
    imageAlt: 'AI绘图',
    variant: 'draw',
    size: 'compact',
  },
  {
    id: 'ai-qa',
    title: '超级问答',
    subtitle: '快速解答你的疑问答惑',
    buttonLabel: '开始问答',
    href: 'https://mr.baidu.com/r/1jaKY2tVXu8',
    imageSrc: '/img/home5.png',
    imageAlt: '超级问答',
    variant: 'chat',
    size: 'compact',
  },
]
