import { expect, test, type Page } from '@playwright/test';

const routes = ['/', '/synergy', '/marketplace', '/oracle', '/compliance', '/exit', '/missing'] as const;

function collectRuntimeFailures(page: Page) {
  const failures: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') failures.push(`console: ${message.text()}`);
  });
  page.on('pageerror', (error) => failures.push(`pageerror: ${error.message}`));
  return failures;
}

test('every maze route renders without runtime errors or page-level overflow', async ({ page }) => {
  const failures = collectRuntimeFailures(page);

  for (const route of routes) {
    await page.goto(`#${route}`);
    await expect(page.locator('main')).toBeVisible();
    await expect.poll(async () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  }

  expect(failures).toEqual([]);
});

test('all generated raster assets load in the production build', async ({ page }) => {
  const failures = collectRuntimeFailures(page);
  for (const route of ['/', '/marketplace', '/oracle', '/exit']) {
    await page.goto(`#${route}`);
    const images = page.locator('main img');
    for (let index = 0; index < await images.count(); index += 1) {
      await expect(images.nth(index)).toBeVisible();
      expect(await images.nth(index).evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    }
  }
  expect(failures).toEqual([]);
});

test('navigation, dialog, form controls and honest exit remain operable', async ({ page }) => {
  await page.goto('#/');
  await page.getByRole('button', { name: '关闭饼干战略通知' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  await page.getByRole('link', { name: /驾驶舱/ }).click();
  await expect(page.getByRole('heading', { name: '增效驾驶舱' })).toBeVisible();
  await page.getByRole('slider', { name: /协同强度/ }).fill('75');
  await expect(page.getByText('975%')).toBeVisible();

  await page.goto('#/compliance');
  const privacy = page.getByRole('checkbox', { name: /最大化隐私/ });
  const training = page.getByRole('checkbox', { name: /用于训练不存在的模型/ });
  await training.check();
  await expect(training).toBeChecked();
  await expect(privacy).not.toBeChecked();
  await page.getByRole('button', { name: '保存到短期记忆' }).click();
  await expect(page.getByRole('status')).toContainText('刷新后将获得真正的遗忘权');

  await page.goto('#/exit');
  await page.getByRole('link', { name: '诚实地返回首页' }).click();
  await expect(page.getByRole('heading', { name: /这不是数字泔水/ })).toBeVisible();
});

test('reduced motion renders a stable page', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('#/oracle');
  await expect(page.getByRole('heading', { name: '思想领导力神谕' })).toBeVisible();
  const marqueeDuration = await page.locator('.marquee__track').first().evaluate((element) => getComputedStyle(element).animationDuration);
  expect(Number.parseFloat(marqueeDuration)).toBeLessThanOrEqual(0.01);
});
