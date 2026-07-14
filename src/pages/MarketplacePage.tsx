import { useEffect, useState } from 'react';
import iconLandfill from '../assets/generated/icon-landfill.webp';
import { Marquee } from '../components/Marquee';
import { plans } from '../content/copy';

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
}

export function MarketplacePage() {
  const [remaining, setRemaining] = useState(45848);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining((current) => current > 0 ? current - 1 : 45848), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="page page-marketplace">
      <section className="sale-hero">
        <div className="sale-hero__burst"><span>仅限</span><strong>永远</strong><small>限时</small></div>
        <div>
          <p className="eyebrow">CAPABILITY BAZAAR / 能力按斤称</p>
          <h1>能力拼盘超市</h1>
          <p>选购一个价格，让我们稍后再决定它包含什么。</p>
          <div className="countdown" aria-label={`伪促销剩余时间 ${formatTime(remaining)}`}>{formatTime(remaining)}</div>
        </div>
        <img src={iconLandfill} alt="大量彩色立体应用图标和奖杯堆在一起" />
      </section>

      <Marquee items={['买一年送半个季度', '所有价格均不含价格', '退款政策正在融资']} reverse />

      <section className="pricing-grid" aria-label="荒谬套餐">
        {plans.map((plan, index) => (
          <article className={`price-card price-card--${index + 1}`} key={plan.name}>
            <span className="price-card__badge">{plan.badge}</span>
            <p>PLAN 0{index + 7}</p>
            <h2>{plan.name}</h2>
            <del>{plan.previousPrice}</del>
            <strong>{plan.price}</strong>
            <ul>{plan.features.map((feature) => <li key={feature}>✦ {feature}</li>)}</ul>
            <button type="button" onClick={() => setSelected(`${plan.name} 已加入一个不存在的采购流程。`)}>
              选择并立即后悔
            </button>
          </article>
        ))}
      </section>

      {selected ? <p className="purchase-toast" role="status">{selected}<button type="button" onClick={() => setSelected('')} aria-label="关闭采购通知">×</button></p> : null}

      <section className="testimonial-chaos">
        <blockquote>“自从使用 SLOP∞，我们终于能用更多会议解释为什么会议变少了。”<cite>— 某匿名首席首席官</cite></blockquote>
        <blockquote>“页面加载得很快，尽管我希望它没有加载。”<cite>— 真实浏览器，可能</cite></blockquote>
        <blockquote>“它重新定义了产品与眼睛之间的敌对关系。”<cite>— 视觉协同观察员</cite></blockquote>
      </section>
    </div>
  );
}
