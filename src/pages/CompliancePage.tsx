import { useState, type FormEvent } from 'react';
import { ProgressSludge } from '../components/ProgressSludge';

type SettingKey = 'privacy' | 'training' | 'essential' | 'understanding';

export function CompliancePage() {
  const [settings, setSettings] = useState<Record<SettingKey, boolean>>({
    privacy: true,
    training: false,
    essential: true,
    understanding: false,
  });
  const [status, setStatus] = useState('');

  const toggle = (key: SettingKey) => {
    setSettings((current) => {
      const next = { ...current, [key]: !current[key] };
      if (key === 'privacy' && next.privacy) next.training = false;
      if (key === 'training' && next.training) next.privacy = false;
      if (key === 'understanding' && next.understanding) {
        next.privacy = false;
        next.training = false;
        next.essential = false;
      }
      return next;
    });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setStatus('偏好已在本页内短暂存在；刷新后将获得真正的遗忘权。');
  };

  return (
    <div className="page page-compliance">
      <section className="compliance-heading">
        <div className="compliance-heading__stamp">合规<br />ISH</div>
        <div><p className="eyebrow">TRUST CENTER & DAY SPA</p><h1>伦理按摩中心</h1><p>让每一个复选框都被温柔地重新定义。</p></div>
        <div className="compliance-heading__rating"><span>风险评级</span><strong>米色</strong><small>比绿色更诚实</small></div>
      </section>

      <section className="compliance-layout">
        <form className="preference-form" onSubmit={submit}>
          <div className="preference-form__heading"><span>偏好向量 001</span><h2>请选择你不希望我们不做什么</h2></div>
          {([
            ['privacy', '最大化隐私', '开启后将自动关闭用于训练，因为逻辑偶尔需要出现。'],
            ['training', '用于训练不存在的模型', '开启后将自动关闭隐私，提供罕见的诚实瞬间。'],
            ['essential', '绝对必要的装饰性追踪', '它既不必要，也不追踪，但名字很重要。'],
            ['understanding', '我已经理解', '开启代表你承认自己不应理解，并清空其他选择。'],
          ] as const).map(([key, title, description]) => (
            <label className="preference-row" key={key}>
              <input type="checkbox" checked={settings[key]} onChange={() => toggle(key)} />
              <span className="fake-switch" aria-hidden="true" />
              <span><b>{title}</b><small>{description}</small></span>
            </label>
          ))}
          <button type="submit">保存到短期记忆</button>
          {status ? <p role="status" className="form-status">{status}</p> : null}
        </form>

        <aside className="trust-sidebar">
          <div className="certificate"><span>CERTIFIED</span><strong>✓?</strong><p>ISO 42069<br />SOC 2.5 TYPE MAYBE</p></div>
          <ProgressSludge value={87.3} label="伦理蒸馏进度" />
          <details open><summary>我们会收集什么？</summary><p>不会收集任何内容。本网站没有后端、分析脚本或表单提交目标。</p></details>
          <details><summary>为什么还要设置？</summary><p>因为一个现代网站若没有信任中心，就很难显得它曾经失去过信任。</p></details>
        </aside>
      </section>

      <section className="legal-ticker" aria-label="极小但可阅读的空洞法律声明">
        <b>法律声明 v∞.0</b>
        <p>通过继续浏览，您只是继续浏览。任何视觉不适均属于本产品承诺内的核心功能。我们不会出售您的数据，因为我们没有数据，也没有销售团队，只有极其积极的边框。</p>
      </section>
    </div>
  );
}
