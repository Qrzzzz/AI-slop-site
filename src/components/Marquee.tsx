interface MarqueeProps {
  items: readonly string[];
  tone?: 'acid' | 'warning' | 'corporate';
  reverse?: boolean;
}

export function Marquee({ items, tone = 'acid', reverse = false }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`marquee marquee--${tone}`} aria-label={items.join('。')}>
      <div className={`marquee__track${reverse ? ' marquee__track--reverse' : ''}`}>
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= items.length}>
            {item} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
