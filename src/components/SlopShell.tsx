import { useEffect, type CSSProperties, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../config/routes';
import { themes } from '../config/themes';
import { ChaosNav } from './ChaosNav';
import { Marquee } from './Marquee';
import { NoiseLayers } from './NoiseLayers';
import { RetroGarbage } from './RetroGarbage';

interface SlopShellProps {
  children: ReactNode;
}

const globalTicker = [
  '本网站包含 0% 可执行洞察',
  '视觉债务由下一财年继承',
  '请勿在没有董事陪同的情况下理解本页',
  '每个渐变都通过了内部自我表扬',
] as const;

export function SlopShell({ children }: SlopShellProps) {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname) ?? routes[0];
  const theme = themes[currentRoute.theme];

  useEffect(() => {
    document.title = `${currentRoute.title}｜SLOP∞`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentRoute.title]);

  const variables = {
    '--slop-bg': theme.background,
    '--slop-fg': theme.foreground,
    '--slop-accent': theme.accent,
    '--slop-poison': theme.poison,
    '--slop-border': theme.border,
  } as CSSProperties;

  return (
    <div className={`slop-shell theme-${theme.id} font-${theme.fontMood}`} style={variables}>
      <a className="skip-link" href="#main-content">跳到真正的泔水</a>
      <NoiseLayers />
      <Marquee items={globalTicker} tone="warning" />
      <ChaosNav routes={routes} />
      <RetroGarbage />
      <main id="main-content">{children}</main>
      <footer className="slop-footer">
        <p>© 2088 SLOP∞ · 保留所有尚未生成的权利 · 友情链接申请请发传真</p>
        <p>NO COOKIES · NO TRACKING · NO SUBSTANCE · 站长 QQ：88888888</p>
        <span>◆ {theme.label} ◆</span>
      </footer>
    </div>
  );
}
