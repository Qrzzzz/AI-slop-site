import { useState } from 'react';
import strategySludge from '../assets/generated/strategy-sludge.webp';
import { Marquee } from '../components/Marquee';
import { buildOracle } from '../content/copy';

export function OraclePage() {
  const [seed, setSeed] = useState(1);
  const statement = buildOracle(seed);

  return (
    <div className="page page-oracle">
      <section className="oracle-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(33,0,63,.78), rgba(255,111,0,.16)), url(${strategySludge})` }}>
        <p className="eyebrow">THOUGHT LEADERSHIP AS A SERVICE</p>
        <h1>思想领导力神谕</h1>
        <p>当战略没有内容时，排版就是内容。</p>
        <span className="oracle-hero__seal">McKINSEY-ISH<br />PROBABLY</span>
      </section>

      <section className="oracle-machine" aria-labelledby="oracle-title">
        <div className="oracle-machine__chrome">
          <span>GEN AI</span><span>量子</span><span>可信</span><span>RAG-ish</span>
        </div>
        <p>本次董事会可引用洞察</p>
        <h2 id="oracle-title" aria-live="polite">“{statement}。”</h2>
        <button type="button" onClick={() => setSeed((current) => current + 1)}>重新生成同一件事</button>
        <small>免责声明：洞察可能包含未经烹饪的介词。</small>
      </section>

      <Marquee items={['把复杂留给用户', '把简单留在路线图', '把路线图留给下一任', '把掌声留给模型']} tone="warning" />

      <section className="whitepaper-stack">
        <article><span>白皮书 01 / 0 页</span><h2>《从战略到战略：一个循环论证框架》</h2><p>下载后得到一份解释为什么暂不提供下载的执行摘要。</p><button type="button">下载缺席的 PDF</button></article>
        <article><span>研究 404 / 已被引用 88K 次</span><h2>《生成式黏性对组织回音的影响》</h2><p>样本量：一个极其自信的演示文稿。</p><button type="button">请求一场没有日历的研讨会</button></article>
        <aside><b>“</b><p>未来不是一个时间，而是一个需要续费的功能。</p><strong>— SLOP∞ 首席预见官</strong></aside>
      </section>
    </div>
  );
}
