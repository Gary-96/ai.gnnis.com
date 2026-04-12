import Image from 'next/image'
import CardButton from '@/components/CardButton'
import type { CardData } from '@/types/card'

interface CompactCardProps {
  card: CardData
}

/**
 * CompactCard — 紧凑型卡片
 *
 * 对应原 HTML: .module3 .module3-item
 * 布局：左侧文字+按钮 | 右侧小图（120×120）
 *
 * 响应式策略：
 * - 移动端：padding 缩小，图片固定 120px 宽度但高度 auto
 * - 桌面端：flex-1 撑满父级水平空间
 *
 * 交互：
 * - hover 时卡片上浮 10px
 * - 按钮箭头向右位移（compact 模式：无边框，纯文字+箭头）
 */
export default function CompactCard({ card }: CompactCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-[#1a1a1a] rounded-2xl
        flex flex-1 justify-between items-stretch p-5
        transition-all duration-200
        hover:-translate-y-2.5 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)]
        cursor-pointer
      "
    >
      {/* 左侧：文字 + 按钮，垂直分布 */}
      <div className="flex flex-col justify-between gap-6 min-w-0 mr-4">
        {/* 文字区 */}
        <div>
          <h3 className="text-lg font-medium text-white leading-snug">
            {card.title}
          </h3>
          <p className="mt-3 text-sm text-white/55 leading-relaxed">
            {card.subtitle}
          </p>
        </div>

        {/* 紧凑按钮（无边框，文字+箭头） */}
        <CardButton
          label={card.buttonLabel}
          href={card.href}
          variant={card.variant}
          compact
        />
      </div>

      {/* 右侧：小图 */}
      <div className="relative shrink-0 w-[7.5rem] h-[7.5rem] self-center">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover rounded-2xl"
          sizes="120px"
        />
      </div>
    </div>
  )
}
