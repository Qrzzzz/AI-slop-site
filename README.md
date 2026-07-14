# SLOP∞

一个有意极其丑陋、极其抽象，但工程结构正常的静态前端迷宫。页面使用中文 AI 企业腔反讽，不收集数据、不播放声音，也不依赖任何运行时外部服务。

## 本地运行

```powershell
npm install
npm run dev
```

## 验证

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

## 结构

- `src/config`：路由和视觉主题注册表
- `src/content`：反讽文案、套餐与指标数据
- `src/components`：共享导航、弹窗、跑马灯、指标和交互控件
- `src/pages`：六个迷宫页面与未知路由
- `src/styles`：令牌、全局约束、共享组件及页面级视觉污染
- `src/assets/generated`：项目使用的 ImageGen 素材

项目使用 Hash 路由，并通过 GitHub Actions 发布到 GitHub Pages 项目路径 `/AI-slop-site/`。
