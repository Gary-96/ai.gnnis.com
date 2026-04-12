import Link from 'next/link'
import type { CardVariant } from '@/types/card'

interface CardButtonProps {
  /** 按钮文字 */
  label: string
  /** 跳转链接 */
  href: string
  /** 颜色风格 */
  variant?: CardVariant
  /** 紧凑模式：字号更小，仅文字+箭头，无边框 */
  compact?: boolean
  className?: string
}

/**
 * 可复用的卡片按钮
 * - 默认：圆角边框按钮，hover 时箭头右移
 * - compact=true：无边框纯文字 + 箭头，用于 CompactCard
 */
export default function CardButton({
  label,
  href,
  compact = false,
  className = '',
}: CardButtonProps) {
  const base =
    'group/btn inline-flex items-center gap-1.5 transition-all duration-200 shrink-0'
  const style = compact
    ? 'text-xs font-normal text-white/80 hover:text-white py-1'
    : 'text-sm font-normal text-white/90 border border-white/30 rounded-full px-4 h-10 hover:border-white/60 hover:bg-white/5'

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style} ${className}`}
    >
      <span>{label}</span>
      {/* 箭头：借助父级 group-hover（item 卡片）实现统一位移动画 */}
      <span
        className="translate-x-0 transition-transform duration-200
          group-hover:translate-x-2"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  )
}
