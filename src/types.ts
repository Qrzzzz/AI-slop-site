import type { ComponentType } from 'react';

export type ThemeId =
  | 'motherboard'
  | 'synergy'
  | 'marketplace'
  | 'oracle'
  | 'compliance'
  | 'exit';

export interface ChaosTheme {
  id: ThemeId;
  label: string;
  background: string;
  foreground: string;
  accent: string;
  poison: string;
  border: string;
  fontMood: 'corporate' | 'tabloid' | 'terminal' | 'wedding' | 'childlike';
}

export interface SlopCopy {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  ticker: readonly string[];
}

export interface SlopRoute {
  path: string;
  navLabel: string;
  title: string;
  badge: string;
  theme: ThemeId;
  component: ComponentType;
}

export interface KpiDatum {
  label: string;
  value: string;
  delta: string;
  mood: 'up' | 'down' | 'sideways';
}

export interface PlanDatum {
  name: string;
  price: string;
  previousPrice: string;
  badge: string;
  features: readonly string[];
}
