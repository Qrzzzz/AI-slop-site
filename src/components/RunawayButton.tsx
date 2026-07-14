import { useState } from 'react';

interface RunawayButtonProps {
  onEscape: (count: number) => void;
}

const positions = [
  [4, 8],
  [58, 12],
  [18, 58],
  [64, 64],
  [37, 34],
  [7, 72],
] as const;

export function RunawayButton({ onEscape }: RunawayButtonProps) {
  const [position, setPosition] = useState(0);

  const flee = () => setPosition((current) => (current + 1) % positions.length);

  return (
    <div className="runaway-zone">
      <p>鼠标用户可体验企业级拒绝；触屏用户点击后会获得可预测的战略跳位。</p>
      <button
        className="runaway-button"
        type="button"
        style={{ left: `${positions[position][0]}%`, top: `${positions[position][1]}%` }}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') flee();
        }}
        onClick={() => {
          const next = (position + 1) % positions.length;
          setPosition(next);
          onEscape(next);
        }}
      >
        退出价值闭环
      </button>
    </div>
  );
}
