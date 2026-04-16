import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | GNNIS AI',
  description: 'Get in touch with the GNNIS AI team. Questions, feedback, or partnership inquiries — we\'d love to hear from you.',
};

export default function ContactPage() {
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
          <span style={{ padding: '16px 16px', fontSize: 13, color: '#fff', borderBottom: '2px solid #5E6AD2', marginBottom: -1, fontWeight: 500 }}>联系我们</span>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 80px' }}>
        
        {/* Header */}
        <div className="fade-in" style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Contact</p>
          <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', marginBottom: 8 }}>联系我们</h1>
          <p style={{ fontSize: 14, color: '#71717A', lineHeight: 1.6 }}>有问题或建议？我们随时在线。</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: Contact Channels */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉️', label: '商务合作', value: 'business@gnnis.com', href: 'mailto:business@gnnis.com', desc: '2个工作日内回复' },
                { icon: '💬', label: '技术支持', value: 'support@gnnis.com', href: 'mailto:support@gnnis.com', desc: '常见问题优先自助解决' },
                { icon: '🐛', label: '提交 Bug', value: '在 GitHub 提交 Issue', href: 'https://github.com/Gary-96/ai.gnnis.com/issues', desc: '描述清晰，附上复现步骤' },
                { icon: '🌐', label: '社交媒体', value: '@gnnisai', href: 'https://twitter.com/gnnisai', desc: '关注获取最新更新' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  background: '#121212', border: '1px solid #27272A', borderRadius: 8,
                  padding: 16, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14,
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#3F3F46'; (e.currentTarget as HTMLElement).style.background = '#1A1A1A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#27272A'; (e.currentTarget as HTMLElement).style.background = '#121212'; }}
                >
                  <span style={{ fontSize: 20, width: 36, height: 36, background: '#1A1A1A', border: '1px solid #27272A', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: '#71717A', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: '#fff', fontWeight: 500, marginBottom: 2 }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: '#52525B' }}>{item.desc}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#3F3F46', fontSize: 16 }}>→</span>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div style={{ marginTop: 16, background: 'rgba(94,106,210,0.06)', border: '1px solid rgba(94,106,210,0.15)', borderRadius: 8, padding: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>💡</span>
              <div>
                <div style={{ fontSize: 13, color: '#A1A1AA', fontWeight: 500, marginBottom: 2 }}>响应时间承诺</div>
                <div style={{ fontSize: 12, color: '#71717A', lineHeight: 1.5 }}>
                  工作日 24 小时内回复，节假日 48 小时内回复。紧急安全问题请在邮件标题注明【紧急】。
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 24 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>发送消息</h2>
              <p style={{ fontSize: 12, color: '#71717A', marginBottom: 20 }}>填写下面的表单，我们会尽快回复你</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#A1A1AA', marginBottom: 6, fontWeight: 500 }}>邮箱地址</label>
                  <input type="email" placeholder="you@example.com" style={{
                    width: '100%', background: '#0D0D0D', border: '1px solid #3F3F46', borderRadius: 6,
                    padding: '9px 12px', fontSize: 13, color: '#fff', fontFamily: 'inherit',
                    outline: 'none', transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = '#5E6AD2'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = '#3F3F46'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#A1A1AA', marginBottom: 6, fontWeight: 500 }}>主题</label>
                  <select style={{
                    width: '100%', background: '#0D0D0D', border: '1px solid #3F3F46', borderRadius: 6,
                    padding: '9px 12px', fontSize: 13, color: '#fff', fontFamily: 'inherit',
                    outline: 'none', cursor: 'pointer',
                  }}>
                    <option value="" style={{ background: '#0D0D0D' }}>选择类型</option>
                    <option value="feedback" style={{ background: '#0D0D0D' }}>功能反馈</option>
                    <option value="bug" style={{ background: '#0D0D0D' }}>Bug 报告</option>
                    <option value="business" style={{ background: '#0D0D0D' }}>商务合作</option>
                    <option value="other" style={{ background: '#0D0D0D' }}>其他</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#A1A1AA', marginBottom: 6, fontWeight: 500 }}>内容</label>
                  <textarea placeholder="详细描述你的问题或建议..." rows={5} style={{
                    width: '100%', background: '#0D0D0D', border: '1px solid #3F3F46', borderRadius: 6,
                    padding: '9px 12px', fontSize: 13, color: '#fff', fontFamily: 'inherit',
                    outline: 'none', resize: 'vertical', lineHeight: 1.5, transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = '#5E6AD2'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = '#3F3F46'}
                  />
                </div>
                <button type="button" style={{
                  background: '#5E6AD2', border: 'none', borderRadius: 6,
                  color: '#fff', padding: '10px', fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.background = '#4F5AA8'}
                onMouseLeave={e => (e.target as HTMLElement).style.background = '#5E6AD2'}
                >
                  发送消息 →
                </button>
              </div>
            </div>

            {/* FAQ quick links */}
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 12, color: '#71717A', marginBottom: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>常见问题</p>
              {[
                '如何申请将我开发的AI工具加入目录？',
                'Pro 版本如何申请团队协作功能？',
                '数据安全和隐私保护的具体措施？',
              ].map((q, i) => (
                <a key={i} href="#" style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 0', fontSize: 13, color: '#71717A', textDecoration: 'none',
                  borderBottom: '1px solid #27272A', transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#A1A1AA'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#71717A'}
                >
                  <span style={{ color: '#5E6AD2', fontSize: 12 }}>→</span> {q}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
