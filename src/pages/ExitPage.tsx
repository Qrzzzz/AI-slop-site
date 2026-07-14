import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import strategySludge from '../assets/generated/strategy-sludge.webp';
import { ProgressSludge } from '../components/ProgressSludge';
import { RunawayButton } from '../components/RunawayButton';

const loops = ['/marketplace', '/oracle', '/synergy', '/compliance', '/'];

export function ExitPage() {
  const navigate = useNavigate();
  const [attempts, setAttempts] = useState(0);

  return (
    <div className="page page-exit" style={{ backgroundImage: `linear-gradient(rgba(202,0,0,.5), rgba(17,0,255,.56)), url(${strategySludge})` }}>
      <section className="exit-card">
        <p className="eyebrow">CONVERSION FINALE / 请完成离开</p>
        <h1>你已抵达<br /><span>价值闭环出口</span></h1>
        <p>只差最后一个不可量化步骤，即可结束本次从未开始的数字化旅程。</p>
        <ProgressSludge />
        <div className="exit-stats"><span><b>{attempts}</b> 次退出意图</span><span><b>0</b> 次数据上传</span><span><b>∞</b> 次品牌曝光</span></div>
      </section>

      <RunawayButton onEscape={(count) => {
        setAttempts((current) => current + 1);
        navigate(loops[count % loops.length]);
      }} />

      <section className="actual-exit">
        <p>不想参与交互表演？这里有一个不会逃跑、不会追踪、也不会自我优化的链接。</p>
        <Link to="/">诚实地返回首页</Link>
      </section>
    </div>
  );
}
