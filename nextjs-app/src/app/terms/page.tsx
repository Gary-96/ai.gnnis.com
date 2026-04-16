import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GNNIS AI',
  description: 'Terms of Service for GNNIS AI. Read our terms and conditions before using our platform.',
};

export default function TermsPage() {
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
          <span style={{ padding: '16px 16px', fontSize: 13, color: '#fff', borderBottom: '2px solid #5E6AD2', marginBottom: -1, fontWeight: 500 }}>服务条款</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Legal</p>
          <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', marginBottom: 8 }}>服务条款</h1>
          <p style={{ fontSize: 12, color: '#52525B' }}>最后更新：2026年4月</p>
        </div>

        {/* Table of contents */}
        <div style={{ background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 20, marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#A1A1AA', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>目录</div>
          {[
            '1. 服务说明',
            '2. 账户注册与责任',
            '3. 使用规范',
            '4. 知识产权',
            '5. 第三方链接',
            '6. 免责声明',
            '7. 账户终止',
            '8. 争议解决',
            '9. 条款更新',
          ].map((item, i) => (
            <a key={i} href={`#section-${i + 1}`} style={{
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
            id: 'section-1',
            num: '1',
            title: '服务说明',
            content: `GNNIS AI（以下简称"我们"）是一个AI工具目录平台，为用户提供AI工具发现、Prompt分享、技能文章等内容服务。我们保留随时修改、暂停或终止服务的权利，并会提前通知用户（紧急情况除外）。`,
          },
          {
            id: 'section-2',
            num: '2',
            title: '账户注册与责任',
            content: `您需要提供真实、准确的信息注册账户。您全权负责账户安全，包括用户名和密码的保护。如果发现账户被他人使用，请立即通知我们。您同意不会使用账户从事任何违法活动。`,
          },
          {
            id: 'section-3',
            num: '3',
            title: '使用规范',
            content: `您同意不会利用我们的服务从事以下活动：\n\n• 违反任何适用法律或法规\n• 上传或传播恶意软件、病毒或任何破坏性内容\n• 冒充他人或散布虚假信息\n• 尝试未经授权访问我们的系统\n• 使用自动化工具大规模抓取内容\n• 发布侵犯他人知识产权的内容`,
          },
          {
            id: 'section-4',
            num: '4',
            title: '知识产权',
            content: `我们平台上的内容（包括但不限于文字、图片、代码、Logo）受版权、商标和其他知识产权保护。未经授权，您不得复制、修改、分发我们的内容。\n\n您提交到平台的内容（如工具提交、评论），您保留该内容的知识产权，但授予我们全球范围内、永久性、免费的非独占许可，用于展示和推广平台。`,
          },
          {
            id: 'section-5',
            num: '5',
            title: '第三方链接',
            content: `我们的平台可能包含指向第三方网站的链接。我们对这些第三方网站的内容、隐私政策或做法不承担责任。使用第三方服务时，适用该第三方的条款和条件。`,
          },
          {
            id: 'section-6',
            num: '6',
            title: '免责声明',
            content: `我们的服务按"现状"提供，不提供任何明示或暗示的保证。我们不对以下事项承担责任：\n\n• 服务中断、错误、内容不准确\n• 因使用服务导致的任何直接或间接损失\n• 第三方服务或产品的质量、可靠性\n• 用户生成内容的准确性或合法性`,
          },
          {
            id: 'section-7',
            num: '7',
            title: '账户终止',
            content: `如果用户违反本条款，我们有权暂停或永久终止其账户。我们也可以基于商业判断，在提前通知后终止服务或特定功能。`,
          },
          {
            id: 'section-8',
            num: '8',
            title: '争议解决',
            content: `本条款受适用法律管辖。如发生争议，双方应首先通过友好协商解决。如协商未果，任一方可提交有管辖权的法院管辖。`,
          },
          {
            id: 'section-9',
            num: '9',
            title: '条款更新',
            content: `我们可能会不时更新本条款。更新后，新条款将在此页面公布，并更新"最后更新"日期。继续使用我们的服务即表示您接受更新后的条款。`,
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
