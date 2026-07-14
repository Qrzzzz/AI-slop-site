interface ProgressSludgeProps {
  value?: number;
  label?: string;
}

export function ProgressSludge({ value = 99.8, label = '闭环完成度' }: ProgressSludgeProps) {
  return (
    <div className="progress-sludge">
      <div className="progress-sludge__meta">
        <span>{label}</span>
        <strong>{value.toFixed(1)}%</strong>
      </div>
      <div
        className="progress-sludge__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
      >
        <span style={{ width: `${value}%` }} />
      </div>
      <small>剩余 0.2% 将在完成后立即重新定义</small>
    </div>
  );
}
