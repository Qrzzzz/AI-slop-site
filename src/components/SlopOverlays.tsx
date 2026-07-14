import { useState } from 'react';
import chromeBuffet from '../assets/generated/chrome-buffet.webp';
import iconLandfill from '../assets/generated/icon-landfill.webp';
import strategySludge from '../assets/generated/strategy-sludge.webp';

const reactions = [
  ['👍', '批准'],
  ['🤡', '增效'],
  ['💸', '烧钱'],
  ['🚀', '上云'],
] as const;

export function SlopOverlays() {
  const [coachOpen, setCoachOpen] = useState(true);
  const [fomoOpen, setFomoOpen] = useState(true);
  const [feedback, setFeedback] = useState('');

  const acknowledge = (message: string) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback(''), 2600);
  };

  return (
    <>
      <section className="slop-ad-pile" aria-label="与当前任务完全无关的战略推广">
        <article className="slop-ad slop-ad--live">
          <span className="slop-ad__live-dot">● LIVE</span>
          <img src={chromeBuffet} alt="" />
          <div>
            <small>董事长正在直播擦边转型</small>
            <strong>只剩 00:59:99</strong>
            <button type="button" onClick={() => acknowledge('已替你预约一场没有日历链接的闭门直播。')}>挤进直播间</button>
          </div>
        </article>

        <article className="slop-ad slop-ad--jackpot">
          <small>AI AGENT 人才池</small>
          <strong>14,927,003</strong>
          <span>个智能体正在假装打字</span>
          <button type="button" onClick={() => acknowledge('智能体已扩编。你的组织结构图开始发热。')}>一键雇佣全部</button>
        </article>

        <article className="slop-ad slop-ad--doctor">
          <img src={strategySludge} alt="" />
          <div><b>哈佛不想让你知道</b><p>一个怪异 CEO 用这招让周报厚了 <em>900%</em></p></div>
          <button type="button" onClick={() => acknowledge('秘密已解锁：答案是再加一个仪表盘。')}>泄露方法&gt;&gt;</button>
        </article>

        <article className="slop-ad slop-ad--scan">
          <span className="slop-qr" aria-hidden="true" />
          <div><b>扫码领取</b><strong>《AI 赋能 AI》</strong><small>0 页 · 88MB · PDF-ish</small></div>
        </article>
      </section>

      <nav className="share-shrapnel" aria-label="无效的快速反应">
        {reactions.map(([emoji, label]) => (
          <button key={label} type="button" aria-label={label} onClick={() => acknowledge(`${label}成功，影响力将在 3—5 个财年内到账。`)}>
            <span aria-hidden="true">{emoji}</span><small>{label}</small>
          </button>
        ))}
      </nav>

      {coachOpen ? (
        <aside className="ai-consultant" aria-label="过度主动的 AI 战略客服">
          <header>
            <span className="ai-consultant__avatar">AI</span>
            <div><b>SLOPPY 小智 Pro Max</b><small>● 在线 · 通常答非所问</small></div>
            <button type="button" aria-label="关闭过度主动的 AI 客服" onClick={() => setCoachOpen(false)}>×</button>
          </header>
          <div className="ai-consultant__body">
            <p className="ai-consultant__thinking">✨ 正在深度思考你的预算……</p>
            <p>您好！检测到您在页面停留超过 <strong>0.4 秒</strong>，是否需要升级为企业失败方案？</p>
            <div className="ai-consultant__chips">
              <button type="button" onClick={() => acknowledge('很好！销售已获得一种模糊的乐观。')}>当然需要</button>
              <button type="button" onClick={() => acknowledge('已将“不需要”理解为“需要更多培育”。')}>不要联系我</button>
            </div>
          </div>
          <label>随便问，反正会幻觉<input placeholder="例如：怎么取消？" /></label>
          <button className="ai-consultant__send" type="button" onClick={() => acknowledge('消息发送失败，但情绪价值已计费。')}>➤</button>
        </aside>
      ) : (
        <button className="ai-consultant-tab" type="button" onClick={() => setCoachOpen(true)}>💬 AI 救救我</button>
      )}

      {fomoOpen ? (
        <aside className="fomo-card" aria-label="无法核实的实时购买通知">
          <button type="button" aria-label="关闭实时购买通知" onClick={() => setFomoOpen(false)}>×</button>
          <img src={iconLandfill} alt="" />
          <span>🔥 刚刚 · 来自火星新区</span>
          <p><b>王总和另外 8,421 人</b><br />抢购了「董事会情绪云」</p>
          <strong>库存：-37</strong>
        </aside>
      ) : null}

      <div className="cursor-confetti" aria-hidden="true">
        <span>✨</span><span>💡</span><span>AI</span><span>↗</span><span>🔥</span><span>®</span>
      </div>

      {feedback ? <p className="rage-toast" role="status">⚠ {feedback}</p> : null}
    </>
  );
}
