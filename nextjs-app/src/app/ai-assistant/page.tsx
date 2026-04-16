'use client';

import React, { useState, useRef, useEffect } from 'react';

const messages = [
  { role: 'user', text: '帮我分析一下我们产品的用户增长数据，给出优化建议', time: '刚刚' },
  { role: 'assistant', text: '好的，我来帮你分析。以下是关键发现和优化建议：\n\n**核心数据洞察**\n• 日活用户较上周增长 12%，但付费转化率下降了 3%\n• 新用户首日留存率 41%，低于行业均值 55%\n\n**Top 3 优化建议**\n\n1. **优化 onboarding 流程**\n新用户在第3步流失最多，建议简化注册表单，增加进度指示器。预期提升留存率 +15%。\n\n2. **推送策略精细化**\n当前推送打开率仅 8%，建议基于用户行为做分层推送。预期提升 DAU 5-8%。\n\n3. **增加社交证明**\n在关键转化节点添加真实用户评价和用例展示。预期提升付费转化率 +2-3%。\n\n需要我针对某一项展开详细方案吗？', time: '刚刚' },
];

const capabilities = [
  {
    icon: '💬',
    title: '智能对话',
    desc: '多轮对话上下文理解，支持中英文，准确把握需求意图',
    tag: 'GPT-4 / Claude 3.5',
  },
  {
    icon: '🧠',
    title: '深度分析',
    desc: '数据分析、竞品研究、市场洞察，结构化输出结论',
    tag: '实时联网',
  },
  {
    icon: '💻',
    title: '代码助手',
    desc: '代码生成、调试优化、架构设计，覆盖全栈开发场景',
    tag: '20+ 语言',
  },
  {
    icon: '✍️',
    title: '内容创作',
    desc: '文案、博客、邮件、策划案，精准匹配品牌调性',
    tag: '多风格',
  },
  {
    icon: '🎨',
    title: '图像生成',
    desc: 'Midjourney 指令优化，DALL·E 提示词编写，专业级出图',
    tag: '多模型',
  },
  {
    icon: '📊',
    title: '报告生成',
    desc: '自动生成数据分析报告、商业计划书、PPT 大纲',
    tag: '一键导出',
  },
];

const stats = [
  { value: '500K+', label: '月活跃用户' },
  { value: '99.9%', label: '服务可用性' },
  { value: '< 2s', label: '平均响应速度' },
  { value: '4.9', label: '用户满意度' },
];

const codeSnippets = [
  { label: '数据分析', code: '// 用户留存漏斗分析\nconst funnel = await analyzeRetention({\n  cohort: "weekly",\n  metrics: ["signup", "activation", "payment"]\n});\n// 输出: 各阶段转化率 + 流失节点' },
  { label: '代码生成', code: '// React hooks 封装\nconst useDebounce = (value, delay = 300) => {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() =>\n      setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debounced;\n};' },
  { label: '内容策划', code: '主题：2026年AI工具趋势报告\n\n大纲：\n1. 市场现状（数据支撑）\n2. 头部产品横评（Sora/Claude/Gemini）\n3. 细分赛道机会（编程/设计/营销）\n4. 独立开发者变现路径\n5. 工具选型决策框架' },
];

export default function AIAssistantPage() {
  const [input, setInput] = useState('帮我分析一下我们产品的用户增长数据');
  const [activeTab, setActiveTab] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponse, setFullResponse] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [charIndex, setCharIndex] = useState(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages]);

  useEffect(() => {
    setDisplayedMessages([messages[0]]);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setDisplayedMessages([messages[0], messages[1]]);
    setIsTyping(false);
  };

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, -apple-system, sans-serif' }}>
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: #3F3F46; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #52525B; }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }
        .cursor-blink::after {
          content: '▋';
          animation: blink 1s step-end infinite;
          color: #5E6AD2;
        }
        .glow-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #5E6AD2, transparent);
        }
      `}</style>

      {/* Top Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #27272A',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 52 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #5E6AD2, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
              <span style={{ fontSize: 14 }}>⚡</span>
            </div>
            <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>GNNIS AI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {['产品', '定价', '文档', '博客'].map((item, i) => (
              <a key={i} href="#" style={{
                padding: '6px 12px', fontSize: 13, color: i === 0 ? '#fff' : '#A1A1AA',
                textDecoration: 'none', borderRadius: 6,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#1A1A1A'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = 'transparent'}
              >{item}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{
              background: '#242424', border: '1px solid #3F3F46', borderRadius: 6,
              color: '#fff', padding: '6px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = '#2A2A2A'; (e.target as HTMLElement).style.borderColor = '#52525B'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = '#242424'; (e.target as HTMLElement).style.borderColor = '#3F3F46'; }}
            >登录</button>
            <button style={{
              background: '#5E6AD2', border: 'none', borderRadius: 6,
              color: '#fff', padding: '6px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.background = '#4F5AA8'}
            onMouseLeave={e => (e.target as HTMLElement).style.background = '#5E6AD2'}
            >免费开始</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(94,106,210,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(94,106,210,0.1)', border: '1px solid rgba(94,106,210,0.2)',
            borderRadius: 100, padding: '4px 12px', marginBottom: 24, fontSize: 12, color: '#8B5CF6',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5E6AD2', animation: 'pulse-glow 2s infinite' }} />
            v2.0 全新发布 · 支持 GPT-4o / Claude 3.5 / Gemini Pro
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20, color: '#fff' }}>
            AI 助手，<br />
            <span style={{ background: 'linear-gradient(135deg, #5E6AD2, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              比你自己更懂你
            </span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 16, color: '#A1A1AA', lineHeight: 1.6, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
            从复杂数据分析到创意内容生成，从代码调试到商业决策，
            一个 AI 解决你工作中的所有难题。
          </p>

          {/* Command Input */}
          <div style={{
            background: '#121212', border: '1px solid #3F3F46', borderRadius: 10,
            overflow: 'hidden', maxWidth: 600, margin: '0 auto', transition: 'border-color 0.15s',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = '#5E6AD2')}
          onBlur={e => (e.currentTarget.style.borderColor = '#3F3F46')}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 12, borderBottom: '1px solid #27272A' }}>
              <span style={{ fontSize: 15 }}>💬</span>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="问任何问题，比如：帮我写一封融资邮件"
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 14, fontFamily: 'inherit' }}
              />
              <div style={{ display: 'flex', gap: 6 }}>
                <kbd style={{ background: '#242424', border: '1px solid #3F3F46', borderRadius: 4, padding: '2px 6px', fontSize: 11, color: '#71717A', fontFamily: 'JetBrains Mono' }}>⌘</kbd>
                <kbd style={{ background: '#242424', border: '1px solid #3F3F46', borderRadius: 4, padding: '2px 6px', fontSize: 11, color: '#71717A', fontFamily: 'JetBrains Mono' }}>↵</kbd>
              </div>
            </div>
            {/* Quick suggestions */}
            <div style={{ display: 'flex', gap: 6, padding: '10px 14px', flexWrap: 'wrap' }}>
              {['📊 数据分析', '💻 写代码', '✍️ 内容创作', '🔍 市场调研'].map((item, i) => (
                <button key={i} onClick={() => setInput(item.replace(/^[^\s]+\s/, ''))}
                  style={{ background: '#1A1A1A', border: '1px solid #27272A', borderRadius: 5, padding: '4px 10px', fontSize: 12, color: '#A1A1AA', cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = '#242424'; (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = '#1A1A1A'; (e.target as HTMLElement).style.color = '#A1A1AA'; }}
                >{item}</button>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 48 }}>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ textAlign: 'center', padding: '0 28px' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'JetBrains Mono', color: '#fff', letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#71717A', marginTop: 2, fontWeight: 500 }}>{s.label}</div>
                </div>
                {i < stats.length - 1 && <div style={{ width: 1, background: '#27272A' }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Glow divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #27272A, transparent)' }} />

      {/* Capabilities */}
      <section style={{ padding: '72px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Capabilities</p>
          <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff' }}>无所不能的 AI 能力</h2>
          <p style={{ fontSize: 14, color: '#71717A', marginTop: 8 }}>覆盖工作、学习、创作的全场景智能助手</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {capabilities.map((cap, i) => (
            <div key={i} style={{
              background: '#121212', border: '1px solid #27272A', borderRadius: 8,
              padding: 20, cursor: 'pointer', transition: 'all 0.15s',
              animation: `fadeInUp 0.5s ease ${i * 0.08}s both`,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#3F3F46';
              (e.currentTarget as HTMLElement).style.background = '#1A1A1A';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#27272A';
              (e.currentTarget as HTMLElement).style.background = '#121212';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>{cap.icon}</span>
                <span style={{
                  fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
                  background: '#1A1A1A', color: '#5E6AD2', padding: '2px 7px', borderRadius: 4, border: '1px solid #27272A',
                }}>{cap.tag}</span>
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{cap.title}</h3>
              <p style={{ fontSize: 13, color: '#71717A', lineHeight: 1.5 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #27272A, transparent)' }} />

      {/* Interactive Demo */}
      <section style={{ padding: '72px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Left: Tabs */}
          <div>
            <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Live Demo</p>
            <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', marginBottom: 8 }}>亲眼看看它的能力</h2>
            <p style={{ fontSize: 14, color: '#71717A', marginBottom: 24, lineHeight: 1.6 }}>
              输入你的问题，AI 立即给出专业级回答。<br />不只是聊天，是真正的生产力工具。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: '#121212', border: '1px solid #27272A', borderRadius: 8, padding: 6, width: 'fit-content' }}>
              {codeSnippets.map((s, i) => (
                <button key={i} onClick={() => setActiveTab(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 14px', borderRadius: 6, fontSize: 13,
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    background: activeTab === i ? 'rgba(94,106,210,0.15)' : 'transparent',
                    color: activeTab === i ? '#fff' : '#71717A',
                    transition: 'all 0.15s', textAlign: 'left',
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: activeTab === i ? '#5E6AD2' : '#3F3F46',
                    flexShrink: 0,
                  }} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Code output */}
          <div>
            <div style={{
              background: '#0D0D0D', border: '1px solid #27272A', borderRadius: 8,
              overflow: 'hidden', fontFamily: 'JetBrains Mono, monospace',
            }}>
              {/* Window bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: '1px solid #27272A', background: '#121212' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EAB308' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E' }} />
                <div style={{ flex: 1 }} />
                <span style={{ fontSize: 11, color: '#52525B' }}>{codeSnippets[activeTab].label}</span>
              </div>
              {/* Code content */}
              <div style={{ padding: 20, fontSize: 12.5, lineHeight: 1.7, color: '#A1A1AA', whiteSpace: 'pre-wrap' }}>
                <span style={{ color: '#5E6AD2' }}>{codeSnippets[activeTab].code.split('\n')[0]}</span>
                {codeSnippets[activeTab].code.split('\n').slice(1).map((line, i) => {
                  const trimmed = line.replace(/^\s*/, '');
                  const indent = line.length - trimmed.length;
                  if (!trimmed) return <br key={i} />;
                  // Simple syntax highlighting
                  let color = '#A1A1AA';
                  if (trimmed.startsWith('//')) color = '#71717A';
                  else if (trimmed.includes(':') && !trimmed.includes('{')) color = '#8B5CF6';
                  else if (trimmed.includes('await') || trimmed.includes('const') || trimmed.includes('return')) color = '#5E6AD2';
                  else if (trimmed.includes('"') || trimmed.includes("'")) color = '#22C55E';
                  return (
                    <div key={i} style={{ paddingLeft: indent * 12 }}>
                      <span style={{ color }}>{trimmed}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action row */}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button style={{
                flex: 1, background: '#5E6AD2', border: 'none', borderRadius: 6,
                color: '#fff', padding: '10px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#4F5AA8'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = '#5E6AD2'}
              >
                ✨ 立即体验
              </button>
              <button style={{
                flex: 1, background: '#121212', border: '1px solid #3F3F46', borderRadius: 6,
                color: '#fff', padding: '10px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#242424'; (e.target as HTMLElement).style.borderColor = '#52525B'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = '#121212'; (e.target as HTMLElement).style.borderColor = '#3F3F46'; }}
              >
                📖 查看文档
              </button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #27272A, transparent)' }} />

      {/* Pricing */}
      <section style={{ padding: '72px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, color: '#5E6AD2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Pricing</p>
          <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff' }}>简单透明的定价</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {[
            { name: '免费版', price: '$0', period: '永久免费', desc: '适合个人探索和轻量使用', features: ['每天 50 次请求', '基础模型访问', '基础对话功能', '社区支持'], highlight: false },
            { name: 'Pro', price: '$20', period: '/月', desc: '适合专业用户和高频使用', features: ['无限请求', 'GPT-4o / Claude 3.5 / Gemini', '高级分析和代码助手', '优先响应速度', '邮件支持'], highlight: true },
            { name: '团队版', price: '$49', period: '/月', desc: '适合团队协作和知识管理', features: ['5 个 Pro 席位', '共享知识库', 'API 访问', '团队管理后台', 'SLA 保障'], highlight: false },
          ].map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? 'linear-gradient(135deg, rgba(94,106,210,0.1), rgba(139,92,246,0.05))' : '#121212',
              border: `1px solid ${plan.highlight ? 'rgba(94,106,210,0.3)' : '#27272A'}`,
              borderRadius: 8, padding: 24,
            }}>
              {plan.highlight && (
                <div style={{ display: 'inline-block', background: '#5E6AD2', borderRadius: 4, padding: '2px 8px', fontSize: 11, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                  最受欢迎
                </div>
              )}
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: '#fff', fontFamily: 'JetBrains Mono' }}>{plan.price}</span>
                <span style={{ fontSize: 13, color: '#71717A' }}>{plan.period}</span>
              </div>
              <p style={{ fontSize: 12, color: '#71717A', marginBottom: 16 }}>{plan.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A1A1AA' }}>
                    <span style={{ color: '#22C55E', fontSize: 14 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <button style={{
                width: '100%', padding: '9px', borderRadius: 6, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'inherit', border: 'none',
                background: plan.highlight ? '#5E6AD2' : '#242424',
                color: '#fff', transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = plan.highlight ? '#4F5AA8' : '#2A2A2A'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = plan.highlight ? '#5E6AD2' : '#242424'}
              >{plan.highlight ? '立即升级' : '开始使用'}</button>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #27272A, transparent)' }} />

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #27272A', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 5, background: 'linear-gradient(135deg, #5E6AD2, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
              ⚡
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>GNNIS AI</span>
            <span style={{ fontSize: 12, color: '#52525B' }}>© 2026</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['关于', '文档', '定价', '博客', '隐私', '条款'].map((link, i) => (
              <a key={i} href="#" style={{ fontSize: 12, color: '#52525B', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#A1A1AA'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#52525B'}
              >{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
