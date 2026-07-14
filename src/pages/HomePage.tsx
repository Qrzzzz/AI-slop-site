import { Link } from 'react-router-dom';
import chromeBuffet from '../assets/generated/chrome-buffet.webp';
import iconLandfill from '../assets/generated/icon-landfill.webp';
import { FakeCookieModal } from '../components/FakeCookieModal';
import { Marquee } from '../components/Marquee';
import { customerNames, homeCopy, manifestoLines } from '../content/copy';

export function HomePage() {
  return (
    <div className="page page-home">
      <Marquee items={homeCopy.ticker} reverse />
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">{homeCopy.eyebrow}</p>
          <h1>{homeCopy.title}</h1>
          <p className="lede">{homeCopy.body}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/synergy">{homeCopy.primaryCta}</Link>
            <Link className="button button--secondary" to="/exit">{homeCopy.secondaryCta}</Link>
          </div>
          <div className="hero-proof">
            <strong>4.99999/5</strong>
            <span>★★★★★</span>
            <small>基于 0 条经核实评论</small>
          </div>
        </div>
        <figure className="home-hero__visual">
          <img src={chromeBuffet} alt="由彩色镀铬箭头、饼图和透明塑料组成的拥挤抽象场景" fetchPriority="high" />
          <figcaption>图 0：跨模态黏性正在被战略性端详</figcaption>
          <div className="hero-orbit hero-orbit--one">ROI-ish</div>
          <div className="hero-orbit hero-orbit--two">NEW!</div>
          <div className="hero-orbit hero-orbit--three">云</div>
        </figure>
      </section>

      <section className="customer-wall" aria-labelledby="customer-title">
        <h2 id="customer-title">深受以下虚构客户的谨慎回避</h2>
        <div>
          {customerNames.map((name, index) => <span key={name} className={`customer-logo customer-logo--${index + 1}`}>{name}</span>)}
        </div>
      </section>

      <section className="value-collision">
        <div className="value-collision__image">
          <img src={iconLandfill} loading="lazy" alt="色彩过度饱和的立体图标和奖杯堆成一团" />
          <span>专有技术*</span>
        </div>
        <div className="value-collision__copy">
          <p className="eyebrow">我们的反问题解决方案</p>
          <h2>一套工具。<br />十二种不必要的复杂。</h2>
          <ol>
            <li><b>01</b> 先把简单流程切成 18 个 AI Agent</li>
            <li><b>02</b> 再用仪表盘证明流程正在呼吸</li>
            <li><b>03</b> 最后把失败包装成探索性成功</li>
          </ol>
          <small>*“专有”指我们暂时没有找到来源。</small>
        </div>
      </section>

      <section className="manifesto-grid" aria-labelledby="manifesto-title">
        <h2 id="manifesto-title">价值观，但每一条都可撤回</h2>
        {manifestoLines.map((line, index) => (
          <article key={line}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{line}</p>
          </article>
        ))}
      </section>
      <FakeCookieModal />
    </div>
  );
}
