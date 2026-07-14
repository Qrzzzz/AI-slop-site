import { CompliancePage } from '../pages/CompliancePage';
import { ExitPage } from '../pages/ExitPage';
import { HomePage } from '../pages/HomePage';
import { MarketplacePage } from '../pages/MarketplacePage';
import { OraclePage } from '../pages/OraclePage';
import { SynergyPage } from '../pages/SynergyPage';
import type { SlopRoute } from '../types';

export const routes: readonly SlopRoute[] = [
  { path: '/', navLabel: '母舰', title: '协同泔水母舰', badge: '开始变质', theme: 'motherboard', component: HomePage },
  { path: '/synergy', navLabel: '驾驶舱', title: '增效驾驶舱', badge: 'LIVE-ISH', theme: 'synergy', component: SynergyPage },
  { path: '/marketplace', navLabel: '超市', title: '能力拼盘超市', badge: '永远限时', theme: 'marketplace', component: MarketplacePage },
  { path: '/oracle', navLabel: '神谕', title: '思想领导力神谕', badge: '可引用', theme: 'oracle', component: OraclePage },
  { path: '/compliance', navLabel: '按摩', title: '伦理按摩中心', badge: 'TRUST-ish', theme: 'compliance', component: CompliancePage },
  { path: '/exit', navLabel: '出口', title: '价值闭环出口', badge: '99.8%', theme: 'exit', component: ExitPage },
] as const;
