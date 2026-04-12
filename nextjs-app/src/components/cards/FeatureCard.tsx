import Image from 'next/image'
import CardButton from '@/components/CardButton'
import type { CardData } from '@/types/card'

interface FeatureCardProps {
  card: CardData
  /** 当卡片在左侧大位置时（desktop 左列），图片高度更大 */
  large?: boolean
}

/**
 * FeatureCard — 垂直功能卡片
 *
 * 对应原 HTML:
 * - .module1-left（左侧大卡，large=true）：图片高 32.75rem
 * - .module1-right .item（右侧小卡，large=false）：图片 24.375 x 16.5rem
 * - 移动端 .module1_phone .item：图片全宽自适应
 *
 * 响应式策略：
 * - 移动端：单列竖向堆叠，图片全宽
 * - 桌面端：由父级 CardSection 控制左大右小的网格布局
 *
 * 交互：
 * - hover 时整体上浮 10px，阴影加深
 * - 按钮箭头向右位移
 */
export default function FeatureCard({ card, large = false }: FeatureCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-[#1a1a1a] rounded-2xl p-5
        flex flex-col
        transition-all duration-200
        hover:-translate-y-2.5 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)]
        cursor-pointer h-full
      "
    >
      {/* 图片区域 */}
      <div
        className={`
          relative w-full overflow-hidden rounded-xl
          ${large ? 'aspect-[4/5]' : 'aspect-[3/2]'}
        `}
      >
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* 底部内容：文字 + 按钮 */}
      <div className="mt-5 flex items-center justify-between gap-4">
        {/* 文字 */}
        <div className="min-w-0">
          <h3 className="text-[1.75rem] font-medium text-white truncate">
            {card.title}
          </h3>
          <p className="mt-2 text-sm text-white/60 line-clamp-2">
            {card.subtitle}
          </p>
        </div>

        {/* 按钮 */}
        <CardButton
          label={card.buttonLabel}
          href={card.href}
          variant={card.variant}
          className="shrink-0"
        />
      </div>
    </div>
  )
}
