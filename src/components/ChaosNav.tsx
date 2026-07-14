import { NavLink } from 'react-router-dom';
import type { SlopRoute } from '../types';

interface ChaosNavProps {
  routes: readonly SlopRoute[];
}

export function ChaosNav({ routes }: ChaosNavProps) {
  return (
    <header className="chaos-nav">
      <NavLink className="chaos-nav__brand" to="/" aria-label="返回协同泔水母舰">
        <span className="chaos-nav__wordart" aria-hidden="true"><i>S</i><i>L</i><i>O</i><i>P</i></span>
        <strong>∞</strong>
        <small>※ 营养液个人主页 ※</small>
      </NavLink>
      <nav aria-label="价值迷宫主导航">
        {routes.map((route, index) => (
          <NavLink
            className={({ isActive }) =>
              `chaos-nav__link chaos-nav__link--${index + 1}${isActive ? ' is-active' : ''}`
            }
            key={route.path}
            to={route.path}
          >
            <span>{route.navLabel}</span>
            <small>{route.badge}</small>
          </NavLink>
        ))}
      </nav>
      <div className="chaos-nav__seal" aria-label="战略可信度百分之十二">
        <b>12%</b>
        <span>可信</span>
      </div>
    </header>
  );
}
