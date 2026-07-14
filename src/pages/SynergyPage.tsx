import { useMemo, useState } from 'react';
import { KpiCard } from '../components/KpiCard';
import { Marquee } from '../components/Marquee';
import { ProgressSludge } from '../components/ProgressSludge';
import { kpis } from '../content/copy';

export function SynergyPage() {
  const [intensity, setIntensity] = useState(63);
  const [confidence, setConfidence] = useState(12);
  const warpedKpis = useMemo(
    () => kpis.map((datum, index) => index === 0 ? { ...datum, value: `${intensity * 13}%` } : datum),
    [intensity],
  );

  return (
    <div className="page page-synergy">
      <section className="page-heading page-heading--dashboard">
        <div>
          <p className="eyebrow">LIVE / 也可能只是 CSS</p>
          <h1>增效驾驶舱</h1>
          <p>这里的每一个数字都在实时响应另一个完全无关的数字。</p>
        </div>
        <div className="dashboard-clock">
          <span>战略时区</span>
          <strong>25:61</strong>
          <small>Q5 · FY∞</small>
        </div>
      </section>

      <Marquee items={['系统状态：自我感觉良好', '数据延迟：领先未来 14 天', '请勿对 KPI 进行事实核查']} tone="corporate" />

      <section className="kpi-grid" aria-label="荒谬关键绩效指标">
        {warpedKpis.map((datum, index) => <KpiCard key={datum.label} datum={datum} index={index} />)}
      </section>

      <section className="dashboard-lower">
        <article className="line-chart-panel">
          <div className="panel-heading">
            <div><span>GLOBAL WETNESS</span><h2>全链路湿润趋势</h2></div>
            <b>+∞.4%</b>
          </div>
          <div className="line-chart" aria-label="持续上升但没有刻度意义的趋势图">
            <div className="line-chart__grid" />
            <svg viewBox="0 0 600 210" role="img" aria-label="荒谬趋势线">
              <polyline points="0,170 70,100 140,135 215,25 290,150 360,85 425,105 500,15 600,65" />
              <polyline className="line-chart__second" points="0,35 85,155 150,45 230,180 310,100 390,165 480,70 540,190 600,130" />
            </svg>
            <div className="line-chart__labels"><span>过去</span><span>现在-ish</span><span>战略未来</span></div>
          </div>
        </article>

        <aside className="control-panel">
          <p className="eyebrow">人工智能人工调节区</p>
          <label>
            协同强度 <output>{intensity} 泥</output>
            <input aria-label="协同强度" type="range" min="0" max="100" value={intensity} onChange={(event) => setIntensity(Number(event.target.value))} />
          </label>
          <label>
            董事会信心 <output>{confidence}%</output>
            <input aria-label="董事会信心" type="range" min="0" max="100" value={confidence} onChange={(event) => setConfidence(Number(event.target.value))} />
          </label>
          <button type="button" onClick={() => setConfidence((current) => (current + 17) % 101)}>
            一键重新定义成功
          </button>
          <ProgressSludge label="组织智能蒸馏" />
        </aside>
      </section>
    </div>
  );
}
