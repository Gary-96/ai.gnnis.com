/**
 * 卡片类型定义
 * variant: 'draw' | 'chat' — 控制 accent 颜色风格
 * size: 控制使用哪个卡片组件
 */

export type CardVariant = 'draw' | 'chat'
export type CardSize = 'hero' | 'feature' | 'compact'

export interface CardData {
  id: string
  /** 卡片标题 */
  title: string
  /** 卡片描述文字 */
  subtitle: string
  /** 按钮文字 */
  buttonLabel: string
  /** 跳转链接 */
  href: string
  /** 图片路径（相对 /public） */
  imageSrc: string
  imageAlt: string
  /** 颜色风格：draw=绿色系, chat=青蓝色系 */
  variant: CardVariant
  /** 卡片布局尺寸 */
  size: CardSize
}
