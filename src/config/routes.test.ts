import { routes } from './routes';

describe('route registry', () => {
  it('contains every planned maze route exactly once', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '/',
      '/synergy',
      '/marketplace',
      '/oracle',
      '/compliance',
      '/exit',
    ]);
    expect(new Set(routes.map((route) => route.path)).size).toBe(routes.length);
  });

  it('provides complete navigation and theme metadata', () => {
    for (const route of routes) {
      expect(route.navLabel).toBeTruthy();
      expect(route.title).toBeTruthy();
      expect(route.badge).toBeTruthy();
      expect(route.theme).toBeTruthy();
      expect(route.component).toBeTypeOf('function');
    }
  });
});
