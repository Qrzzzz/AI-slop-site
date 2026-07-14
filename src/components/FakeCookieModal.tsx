import { useState } from 'react';

export function FakeCookieModal() {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState('');

  const closeWith = (nextMessage: string) => {
    setOpen(false);
    setMessage(nextMessage);
  };

  return (
    <>
      {open ? (
        <section className="cookie-tray" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
          <button
            className="cookie-tray__close"
            type="button"
            aria-label="关闭饼干战略通知"
            onClick={() => closeWith('你关闭了通知，但协同仍在空气中。')}
          >
            ×
          </button>
          <p className="cookie-tray__eyebrow">🍪 颗粒度偏好管理中心</p>
          <h2 id="cookie-title">我们不使用 Cookie，<br />只使用饼干型战略抓手。</h2>
          <p>点击任一按钮都不会保存任何数据，但会让按钮获得短暂的存在意义。</p>
          <div className="cookie-tray__actions">
            <button type="button" onClick={() => closeWith('你已拒绝不存在的数据采集。合规感 +8。')}>
              拒绝并全部接受
            </button>
            <button type="button" onClick={() => closeWith('偏好已蒸发。我们对此深表结构化。')}>
              管理无法管理的偏好
            </button>
          </div>
        </section>
      ) : null}
      {message ? <p className="toast" role="status">{message}</p> : null}
    </>
  );
}
