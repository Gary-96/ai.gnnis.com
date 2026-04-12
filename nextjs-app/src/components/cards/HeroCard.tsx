import Image from 'next/image'
import CardButton from '@/components/CardButton'
import type { CardData } from '@/types/card'

interface HeroCardProps {
  card: CardData
}

/**
 * HeroCard — 大横向卡片
 *
 * 对应原 HTML: .module .item（.module-left 图片 + .module-right 文字）
 *
 * 响应式策略：
 * - 移动端（< md）：图片在上，文字在下，竖向排列
 * - 桌面端（≥ md）：图片在左，文字在右，横向排列
 *
 * 交互：
 * - hover 时整体上浮 10px，阴影加深
 * - 按钮箭头向右位移（通过 group-hover 传递）
 */
export default function HeroCard({ card }: HeroCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-[#1a1a1a] rounded-2xl
        flex flex-col md:flex-row items-stretch
        transition-all duration-200
        hover:-translate-y-2.5 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)]
        cursor-pointer
      "
    >
      {/* 左侧图片区域 */}
      <div className="p-4 md:p-8 flex-shrink-0">
        <div className="relative w-full md:w-[55rem] aspect-[55/24.5]">
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 55rem"
            priority
          />
        </div>
      </div>

      {/* 右侧文字区域 */}
      <div className="flex-1 flex flex-col justify-between p-6 md:py-10 md:pr-10">
        {/* 上部文案 */}
        <div>
          <h3 className="text-[1.75rem] font-medium text-white leading-tight">
            {card.title}
          </h3>
          <p className="mt-4 text-sm text-white/60 leading-relaxed whitespace-pre-line">
            {card.subtitle}
          </p>
        </div>

        {/* 底部按钮 */}
        <div className="mt-14">
          <CardButton label={card.buttonLabel} href={card.href} variant={card.variant} />
        </div>
      </div>
    </div>
  )
}
