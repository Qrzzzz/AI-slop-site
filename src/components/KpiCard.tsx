import type { CSSProperties } from 'react';
import type { KpiDatum } from '../types';

interface KpiCardProps {
  datum: KpiDatum;
  index: number;
}

export function KpiCard({ datum, index }: KpiCardProps) {
  return (
    <article className={`kpi-card kpi-card--${datum.mood}`} style={{ '--card-index': index } as CSSProperties}>
      <span className="kpi-card__number">0{index + 1}</span>
      <p>{datum.label}</p>
      <strong>{datum.value}</strong>
      <small>{datum.delta}</small>
      <div className="kpi-card__microchart" aria-hidden="true">
        {[32, 81, 46, 96, 18, 73, 54].map((height, barIndex) => (
          <span key={barIndex} style={{ height: `${(height + index * 11) % 100}%` }} />
        ))}
      </div>
    </article>
  );
}
