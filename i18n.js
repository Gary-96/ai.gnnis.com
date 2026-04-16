/**
 * ai.gnnis.com 国际化 (i18n) 解决方案
 * 支持语言：中文 (zh) / 英文 (en)
 */

const i18n = {
    // 当前语言
    currentLang: localStorage.getItem('site-language') || 'zh',
    
    // 翻译数据
    translations: {
        zh: {
            // 导航
            'nav_home': '首页',
            'nav_tools': 'AI Tools',
            'nav_prompts': 'Prompts',
            'nav_skills': 'Skills',
            'nav_about': '关于我们',
            'nav_contact': '联系我们',
            'nav_privacy': '隐私政策',
            'nav_terms': '服务条款',
            
            // 首页
            'home_badge': '🚀 数字化创造时代',
            'home_title': '格尼斯',
            'home_title_ai': 'AI',
            'home_subtitle': '智能化工具唤醒创造新力。精选全球优质 AI 工具，助你提升工作效率，释放无限创意。',
            'home_stat_tools': 'AI 工具',
            'home_stat_prompts': '精选 Prompt',
            'home_stat_articles': '深度文章',
            'home_cta_tools': '浏览 AI 工具',
            'home_cta_prompts': '探索 Prompts',
            'home_features_title': '探索 AI 的无限可能',
            'home_feature_writing': 'AI 写作',
            'home_feature_writing_desc': 'ChatGPT、Claude、Gemini 等顶级 AI 助手，助你高效完成文案、报告、代码等创作任务。',
            'home_feature_art': 'AI 绘画',
            'home_feature_art_desc': 'Midjourney、Stable Diffusion、DALL-E 等图像生成工具，将创意变为视觉艺术。',
            'home_feature_video': 'AI 视频',
            'home_feature_video_desc': 'Runway、可灵、Pika 等视频生成工具，让视频创作前所未有的简单高效。',
            'home_feature_audio': 'AI 音频',
            'home_feature_audio_desc': 'Suno、ElevenLabs、Udio 等音频工具，一键生成专业级音乐和语音。',
            'home_feature_code': 'AI 编程',
            'home_feature_code_desc': 'Cursor、GitHub Copilot、Bolt 等编程助手，让代码编写效率提升 10 倍。',
            'home_feature_tutorial': '精选教程',
            'home_feature_tutorial_desc': '深度文章和 Prompt 技巧分享，从入门到精通，掌握 AI 工具的最佳实践。',
            
            // AI Tools 页面
            'tools_title': 'AI Tools 工具库',
            'tools_subtitle': '精选全球最受欢迎的AI工具，涵盖写作、绘画、视频、音频、编程等领域，助你提升创造力与工作效率。',
            'tools_all': '全部工具',
            'tools_load_more': '加载更多',
            
            // Prompts 页面
            'prompts_title': 'Prompt Library',
            'prompts_subtitle': '精选高质量 AI Prompt 模板，覆盖写作、编程、设计、分析等多种场景。一键复制，立即使用。',
            'prompts_copy': '一键复制',
            'prompts_copied': '已复制',
            
            // Blog 页面
            'blog_title': "Editor's Choice",
            'blog_subtitle': '深度专栏',
            'blog_read_more': '阅读全文',
            
            // 文章页面
            'article_breadcrumb_home': '首页',
            'article_breadcrumb_skills': '技能专栏',
            'article_back': '返回技能专栏',
            'article_not_found': '文章未找到',
            'article_not_found_desc': '您访问的文章可能已被删除或移动。',
            
            // Footer
            'footer_about': '关于我们',
            'footer_privacy': '隐私政策',
            'footer_terms': '服务条款',
            'footer_contact': '联系我们',
            'footer_copyright': '© 2026 ai.gnnis.com. All rights reserved.',
            
            // 通用
            'loading': '加载中...',
            'error': '加载失败，请刷新重试',
            'anim_toggle_on': '✨ 动画',
            'anim_toggle_off': '⏸️ 动画',
        },
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_tools': 'AI Tools',
            'nav_prompts': 'Prompts',
            'nav_skills': 'Skills',
            'nav_about': 'About Us',
            'nav_contact': 'Contact',
            'nav_privacy': 'Privacy',
            'nav_terms': 'Terms',
            
            // Home
            'home_badge': '🚀 Digital Creation Era',
            'home_title': 'Gennis',
            'home_title_ai': 'AI',
            'home_subtitle': 'Intelligent tools awaken creative power. Curated AI tools from around the world to boost your productivity and unleash creativity.',
            'home_stat_tools': 'AI Tools',
            'home_stat_prompts': 'Prompts',
            'home_stat_articles': 'Articles',
            'home_cta_tools': 'Browse AI Tools',
            'home_cta_prompts': 'Explore Prompts',
            'home_features_title': 'Explore the Infinite Possibilities of AI',
            'home_feature_writing': 'AI Writing',
            'home_feature_writing_desc': 'Top AI assistants like ChatGPT, Claude, Gemini to help you efficiently create content, reports, and code.',
            'home_feature_art': 'AI Art',
            'home_feature_art_desc': 'Image generation tools like Midjourney, Stable Diffusion, DALL-E to turn creativity into visual art.',
            'home_feature_video': 'AI Video',
            'home_feature_video_desc': 'Video generation tools like Runway, Kling, Pika make video creation simple and efficient.',
            'home_feature_audio': 'AI Audio',
            'home_feature_audio_desc': 'Audio tools like Suno, ElevenLabs, Udio to generate professional music and voice with one click.',
            'home_feature_code': 'AI Coding',
            'home_feature_code_desc': 'Programming assistants like Cursor, GitHub Copilot, Bolt to boost coding efficiency by 10x.',
            'home_feature_tutorial': 'Tutorials',
            'home_feature_tutorial_desc': 'In-depth articles and Prompt techniques, from beginner to advanced, mastering AI tools best practices.',
            
            // AI Tools Page
            'tools_title': 'AI Tools Library',
            'tools_subtitle': 'Curated AI tools from around the world, covering writing, art, video, audio, coding, and more.',
            'tools_all': 'All Tools',
            'tools_load_more': 'Load More',
            
            // Prompts Page
            'prompts_title': 'Prompt Library',
            'prompts_subtitle': 'High-quality AI Prompt templates for writing, coding, design, analysis, and more. Copy and use instantly.',
            'prompts_copy': 'Copy',
            'prompts_copied': 'Copied',
            
            // Blog Page
            'blog_title': "Editor's Choice",
            'blog_subtitle': 'Deep Dive',
            'blog_read_more': 'Read More',
            
            // Article Page
            'article_breadcrumb_home': 'Home',
            'article_breadcrumb_skills': 'Skills',
            'article_back': 'Back to Skills',
            'article_not_found': 'Article Not Found',
            'article_not_found_desc': 'The article you are looking for may have been removed or moved.',
            
            // Footer
            'footer_about': 'About Us',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms of Service',
            'footer_contact': 'Contact Us',
            'footer_copyright': '© 2026 ai.gnnis.com. All rights reserved.',
            
            // Common
            'loading': 'Loading...',
            'error': 'Failed to load, please refresh',
            'anim_toggle_on': '✨ Animation',
            'anim_toggle_off': '⏸️ Animation',
        }
    },
    
    // 初始化
    init() {
        this.applyLanguage();
        this.setupLanguageToggle();
    },
    
    // 获取翻译
    t(key) {
        return this.translations[this.currentLang]?.[key] || key;
    },
    
    // 切换语言
    toggle() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('site-language', this.currentLang);
        this.applyLanguage();
        this.updateToggleButton();
        return this.currentLang;
    },
    
    // 应用语言到页面
    applyLanguage() {
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // 更新页面标题
        const pageTitle = document.querySelector('title');
        if (pageTitle && pageTitle.hasAttribute('data-i18n-title')) {
            const titleKey = pageTitle.getAttribute('data-i18n-title');
            document.title = this.t(titleKey);
        }
        
        // 更新 HTML lang 属性
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
    },
    
    // 设置语言切换按钮
    setupLanguageToggle() {
        const btn = document.getElementById('lang-btn');
        if (btn) {
            this.updateToggleButton();
            btn.addEventListener('click', () => {
                this.toggle();
            });
        }
    },
    
    // 更新切换按钮显示
    updateToggleButton() {
        const btn = document.getElementById('lang-btn');
        if (btn) {
            btn.textContent = this.currentLang === 'zh' ? 'En / 中' : '中 / En';
        }
    },
    
    // 动态更新统计数据（需要后端支持英文内容时启用）
    updateStats(stats) {
        if (stats.tools) {
            const el = document.getElementById('stat-tools');
            if (el) el.textContent = stats.tools + (this.currentLang === 'zh' ? '+' : '+');
        }
        if (stats.prompts) {
            const el = document.getElementById('stat-prompts');
            if (el) el.textContent = stats.prompts + (this.currentLang === 'zh' ? '+' : '+');
        }
        if (stats.articles) {
            const el = document.getElementById('stat-articles');
            if (el) el.textContent = stats.articles + (this.currentLang === 'zh' ? '+' : '+');
        }
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
