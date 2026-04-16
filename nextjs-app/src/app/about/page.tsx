import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GNNIS AI',
  description: 'Learn more about GNNIS AI, our mission, and our vision for the future of AI tools and creativity.',
};

const teamMembers = [
  { name: 'Gary', role: 'Founder & Developer', desc: '全栈工程师，AI工具爱好者，致力于用技术降低创意门槛', avatar: '👨‍💻' },
  { name: '小葵', role: 'AI Strategist', desc: '互联网运营老兵，擅长内容增长与数据驱动决策', avatar: '🌻' },
];

const milestones = [
  { year: '2025', event: 'GNNIS AI 正式上线，首批收录 8 款 AI 工具' },
  { year: '2025 Q2', event: '工具库扩展至 32 款，新增 Prompt 和 Skills 内容模块' },
  { year: '2025 Q4', event: '月访问量突破 10 万，服务全球 50+ 国家的用户' },
  { year: '2026 Q1', event: '上线 AI 助手服务，推出 Pro/团队版订阅计划' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 0.5s ease forwards; }
      `}</style>

      {/* Top Bar */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ borderBottom: '1px solid #27272A', display: 'flex', gap: 0 }}>
          {['产品', '定价', '文档'].map((item, i) => (
            <a key={i} href="#" style={{ padding: '16px 16px', fontSize: 13, color: '#71717A', textDecoration: 'none', borderBottom: '2px solid transparent', marginBottom: -1, transition: 'all 0.15s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.borderBottomColor = '#3F3F46'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#71717A'; (e.target as HTMLElement).style.borderBottomColor = 'transparent'; }}
            >{item}</a>
          ))}
          <span style={{ padding: '16px 16px', fontSize: 13, color: '#fff', borderBottom: '2px solid #5E6AD2', marginBottom: -1, fontWeight: 500 }}>关于我们</span>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 80px' }}>
        
        {/* Hero */}
        <div className="fade-in" style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>About</p>
          <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', marginBottom: 8 }}>关于 GNNIS AI</h1>
          <p style={{ fontSize: 14, color: '#71717A', lineHeight: 1.6, maxWidth: 600 }}>
            我们相信 AI 工具应该触手可及。从创作者到开发者，从设计师到企业家，让每个人都能用 AI 放大自己的创造力。
          </p>
        </div>

        {/* Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <div style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 24 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>🎯</div>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>我们的使命</h2>
              <p style={{ fontSize: 13.5, color: '#A1A1AA', lineHeight: 1.7 }}>
                民主化先进 AI 技术，让高性能模型和流畅的工作流集成触手可及——无论用户的技术背景如何，都能从中受益。
              </p>
            </div>
          </div>
          <div className="fade-in" style={{ animationDelay: '0.15s' }}>
            <div style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 24 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>🔭</div>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>我们的愿景</h2>
              <p style={{ fontSize: 13.5, color: '#A1A1AA', lineHeight: 1.7 }}>
                成为全球开发者、创作者首选的 AI 工具发现平台。用数据驱动决策，用体验验证价值，持续为用户带来真正有用的 AI 生产力工具。
              </p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="fade-in" style={{ animationDelay: '0.2s', marginBottom: 48 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 16 }}>为什么选择我们</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { icon: '📚', title: '精选 Prompt 库', desc: '经过验证、高度优化的 Prompt，覆盖多样化场景' },
              { icon: '🔧', title: '集成工具矩阵', desc: '从 AI 绘图到深度问答，聚合你所需要的一切' },
              { icon: '🌍', title: '全球可访问', desc: '多语言支持、响应式架构，服务全球用户' },
              { icon: '⚡', title: '极速响应', desc: '静态页面 + CDN，全球节点，平均 <2s 首屏' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 18 }}>
                <div style={{ fontSize: 18, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: 12, color: '#71717A', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="fade-in" style={{ animationDelay: '0.25s', marginBottom: 48 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 16 }}>核心团队</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 20, flex: '1 1 200px', maxWidth: 280 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{member.avatar}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{member.name}</div>
                <div style={{ fontSize: 11, color: '#5E6AD2', fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</div>
                <p style={{ fontSize: 12.5, color: '#71717A', lineHeight: 1.5 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 16 }}>发展历程</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i < milestones.length - 1 ? 20 : 0, borderBottom: i < milestones.length - 1 ? '1px solid #27272A' : 'none' }}>
                <div style={{ width: 80, fontSize: 12, color: '#5E6AD2', fontWeight: 600, paddingTop: 2, fontFamily: 'JetBrains Mono, monospace', flexShrink: 0 }}>{m.year}</div>
                <div style={{ fontSize: 13.5, color: '#A1A1AA', paddingTop: 2 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
