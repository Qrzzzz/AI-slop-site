import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="page page-not-found">
      <p className="eyebrow">HTTP 404 BUT MAKE IT STRATEGIC</p>
      <h1>你已抵达<br />战略留白。</h1>
      <p>该页面不存在，因此它拥有全站最高的内容准确率。</p>
      <Link className="button button--primary" to="/">返回有内容风险的首页</Link>
    </div>
  );
}
