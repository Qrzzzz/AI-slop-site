import type { KpiDatum, PlanDatum, SlopCopy } from '../types';

export const homeCopy: SlopCopy = {
  eyebrow: '全球首个™ 多模态泔水即服务基础设施',
  title: '这不是数字泔水，\n而是价值营养液。',
  body: '我们把没有人提出的问题，封装成没有人理解的解决方案，再通过不可逆的渐变完成商业闭环。每一次滚动，都是一次组织心智的云原生湿润。',
  primaryCta: '立即注入协同黏性',
  secondaryCta: '暂缓实现长期主义',
  ticker: [
    'AI-NATIVE · 但不知道 NATIVE 在哪里',
    '端到端赋能端到不知道哪一端',
    '已有 9,999,999 家虚构企业正在假装使用',
    'SOC 负二级认证 · ISO 可能吧',
  ],
};

export const kpis: readonly KpiDatum[] = [
  { label: '北极星湿度', value: '847%', delta: '↑ 0.003 泥', mood: 'up' },
  { label: '协同颗粒度', value: '∞²', delta: '↗ 同比昨天', mood: 'sideways' },
  { label: '组织含 AI 量', value: '11/10', delta: '↓ 更加领先', mood: 'down' },
  { label: '闭环回音', value: '99.8%', delta: '↑ 永不完成', mood: 'up' },
  { label: '董事会体感', value: '澎湃', delta: '→ 无法审计', mood: 'sideways' },
  { label: '幻觉转化率', value: '404%', delta: '↑ 找不到原因', mood: 'up' },
];

export const plans: readonly PlanDatum[] = [
  {
    name: '试吃泔水',
    price: '¥ 0.00.99',
    previousPrice: '原价一段关系',
    badge: '最不推荐',
    features: ['3 次战略眨眼', '半个仪表盘', '社区级孤独', '不含功能'],
  },
  {
    name: '企业营养液 PRO MAX',
    price: '¥ 8888/秒',
    previousPrice: '原价一个季度',
    badge: '董事会都在假装买',
    features: ['无限幻觉额度', '8K 价值观导出', '专属成功焦虑经理', '每月额外收费'],
  },
  {
    name: '主权级黏稠云',
    price: '联系我们，然后失联',
    previousPrice: '价格具有量子态',
    badge: '仅供不存在的国家',
    features: ['私有化空气', '跨境术语漫游', '合规按摩', '发票使用生成式想象'],
  },
];

const oracleColumns = [
  ['以人为本地', '端到端地', '负责任地', '可持续地', '颗粒度饱满地'],
  ['重构', '拉齐', '蒸馏', '湿润', '再造'],
  ['下一代组织心智', '跨模态抓手', '价值链路', '业务毛细血管', '战略留白'],
  ['从而实现', '并反向赋能', '最终沉淀为', '以便无痛迁移至', '同时不承诺'],
  ['指数级平庸', '确定性幻觉', '有温度的报表', '可信赖的废话', '可审计的掌声'],
] as const;

export function buildOracle(seed: number): string {
  return oracleColumns
    .map((column, index) => column[(seed * (index + 3) + index * 2) % column.length])
    .join(' ');
}

export const customerNames = [
  'MEGA SYNERGY',
  '云上云下云',
  'Future Yesterday™',
  '华丽转身集团',
  '未融资独角兽',
  'The Board',
] as const;

export const manifestoLines = [
  '我们拒绝解决问题，因为问题会限制解决方案的想象力。',
  '把用户放在中心，然后在中心上方盖一座弹窗。',
  '不是所有增长都要有数字，有箭头就够了。',
  '今天的技术债，是明天富有层次的技术文化遗产。',
] as const;
