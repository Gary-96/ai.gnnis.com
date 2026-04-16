import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GNNIS AI',
  description: 'Privacy Policy for GNNIS AI. Read how we secure your data and respect your privacy.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* Top Bar */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ borderBottom: '1px solid #27272A', display: 'flex', gap: 0 }}>
          {['产品', '定价', '文档'].map((item, i) => (
            <a key={i} href="#" style={{ padding: '16px 16px', fontSize: 13, color: '#71717A', textDecoration: 'none', borderBottom: '2px solid transparent', marginBottom: -1, transition: 'all 0.15s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.borderBottomColor = '#3F3F46'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#71717A'; (e.target as HTMLElement).style.borderBottomColor = 'transparent'; }}
            >{item}</a>
          ))}
          <span style={{ padding: '16px 16px', fontSize: 13, color: '#fff', borderBottom: '2px solid #5E6AD2', marginBottom: -1, fontWeight: 500 }}>隐私政策</span>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px 80px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Legal</p>
          <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', marginBottom: 8 }}>隐私政策</h1>
          <p style={{ fontSize: 12, color: '#52525B' }}>最后更新：2026年4月</p>
        </div>

        {/* Quick summary */}
        <div style={{ background: '#121212', border: '1px solid rgba(94,106,210,0.2)', borderRadius: 8, padding: 20, marginBottom: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {[
            { icon: '🍪', label: 'Cookies', desc: '仅用于分析统计' },
            { icon: '📊', label: '数据分析', desc: '使用 Umami（隐私友好）' },
            { icon: '🔒', label: '数据安全', desc: '加密存储，权限最小化' },
            { icon: '📧', label: '联系我们', desc: 'privacy@gnnis.com' },
          ].map((item, i) => (
            <div key={i} style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#A1A1AA' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table of contents */}
        <div style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 20, marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#A1A1AA', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>目录</div>
          {[
            '1. 信息收集',
            '2. 信息使用',
            '3. 第三方服务',
            '4. Cookies',
            '5. 数据安全',
            '6. 您的权利',
            '7. 未成年人',
            '8. 政策更新',
            '9. 联系我们',
          ].map((item, i) => (
            <a key={i} href={`#privacy-${i + 1}`} style={{
              display: 'block', padding: '5px 0', fontSize: 13, color: '#71717A',
              textDecoration: 'none', transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#A1A1AA'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = '#71717A'}
            >{item}</a>
          ))}
        </div>

        {/* Sections */}
        {[
          {
            id: 'privacy-1',
            num: '1',
            title: '信息收集',
            content: `我们收集您自愿提供的信息（如注册时填写的信息）和自动生成的诊断数据（如 IP 地址、浏览器类型）。\n\n我们可能收集的信息类型包括：\n• 账户信息（邮箱地址、昵称）\n• 使用数据（访问页面、功能点击）\n• 设备信息（操作系统、屏幕分辨率）\n• 诊断日志（错误报告、性能数据）`,
          },
          {
            id: 'privacy-2',
            num: '2',
            title: '信息使用',
            content: `我们使用收集的信息用于：\n\n• 提供、运营和改进我们的服务\n• 发送管理与服务相关信息\n• 改善用户体验和平台安全性\n• 投放相关性广告（通过 Google AdSense）\n• 遵守法律义务`,
          },
          {
            id: 'privacy-3',
            num: '3',
            title: '第三方服务',
            content: `我们使用以下第三方服务：\n\n• **Vercel**：网站托管服务\n• **Google AdSense**：广告投放\n• **Umami**：网站访问统计分析（隐私友好，不使用 Cookie）\n• **GitHub**：代码仓库托管\n\n这些第三方服务可能根据其隐私政策处理您的数据。`,
          },
          {
            id: 'privacy-4',
            num: '4',
            title: 'Cookies',
            content: `我们使用少量必要的 Cookie 来维护网站基本功能。此外，我们使用 Umami 进行匿名访问统计——这是一种隐私友好的分析工具，**不**使用 Cookie，不追踪个人用户，不存储个人身份信息。\n\nGoogle AdSense 可能会设置 Cookie 用于广告个性化。您可以通过浏览器设置或访问 aboutads.info 拒绝个性化广告。`,
          },
          {
            id: 'privacy-5',
            num: '5',
            title: '数据安全',
            content: `我们采用行业标准的安全措施来保护您的数据：\n\n• 数据传输使用 HTTPS 加密\n• 服务器访问权限遵循最小权限原则\n• 定期进行安全审查\n• 数据库备份加密存储\n\n但请注意，互联网传输没有 100% 安全的方法，我们无法保证绝对安全。`,
          },
          {
            id: 'privacy-6',
            num: '6',
            title: '您的权利',
            content: `您对自己的个人数据享有以下权利：\n\n• **知情权**：了解我们收集哪些数据\n• **访问权**：请求获取您的数据副本\n• **更正权**：修正不准确的数据\n• **删除权**：要求删除您的数据\n• **拒绝权**：拒绝某些类型的数据处理\n\n如需行使上述权利，请通过隐私政策末尾的联系方式联系我们。`,
          },
          {
            id: 'privacy-7',
            num: '7',
            title: '未成年人',
            content: `我们的服务不面向 13 岁以下未成年人，也不故意收集未成年人的个人信息。如果您是未成年人，请在父母或监护人的陪同下使用我们的服务。`,
          },
          {
            id: 'privacy-8',
            num: '8',
            title: '政策更新',
            content: `我们可能会不时更新本隐私政策。任何更新都会在此页面公布，并更新"最后更新"日期。我们鼓励您定期查阅本政策以了解最新内容。`,
          },
          {
            id: 'privacy-9',
            num: '9',
            title: '联系我们',
            content: `如对本隐私政策有任何疑问、意见或投诉，请通过以下方式联系我们：\n\n📧 privacy@gnnis.com\n🌐 https://ai.gnnis.com/contact\n\n我们会在收到您的请求后 48 小时内回复。`,
          },
        ].map((section, i) => (
          <div key={i} id={section.id} style={{ marginBottom: 32, paddingTop: i > 0 ? 32 : 0, borderTop: i > 0 ? '1px solid #27272A' : 'none' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 12 }}>{section.num}. {section.title}</h2>
            <div style={{ fontSize: 13.5, color: '#A1A1AA', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{section.content}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
