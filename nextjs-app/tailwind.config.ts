import type { Config } from 'tailwindcss'

const config: Config = {
  // dark mode 通过 html.dark class 切换（与原版保持一致）
  darkMode: 'class',

  // 扫描范围
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // ── 自定义颜色 token（对应原版 CSS 变量）──────────
      colors: {
        /** 品牌主色 teal */
        'brand-teal': '#14b8a6',

        /** 卡片背景 dark */
        'card-dark': '#1a1a1a',

        /** 页面背景 */
        'page-dark': '#000000',
      },

      // ── 字体（与原版优先级一致）──────────────────────
      fontFamily: {
        sans: [
          'var(--font-roboto)',
          'SF Pro Display',
          'Roboto',
          'Noto',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },

      // ── 最大宽度 ──────────────────────────────────────
      maxWidth: {
        container: '1280px',
      },

      // ── 圆角 ──────────────────────────────────────────
      borderRadius: {
        card: '1rem',       // 卡片圆角
        btn: '1.25rem',     // 按钮圆角
      },

      // ── 阴影（hover 状态）────────────────────────────
      boxShadow: {
        card: '0 0 0 rgba(0,0,0,0.08)',
        'card-hover': '-100px 100px 200px rgba(0,0,0,0.08)',
        'card-hover-deep': '0 25px 80px rgba(0,0,0,0.5)',
      },

      // ── 关键帧动画 ────────────────────────────────────
      keyframes: {
        moveToLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-0.625rem)' },
        },
      },
      animation: {
        'arrow-pulse': 'moveToLeft 0.8s infinite cubic-bezier(0.1, 0.84, 0.35, 1)',
      },
    },
  },

  plugins: [],
}

export default config
