import { HashRouter, Route, Routes } from 'react-router-dom';
import { SlopShell } from './components/SlopShell';
import { routes } from './config/routes';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <HashRouter>
      <SlopShell>
        <Routes>
          {routes.map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SlopShell>
    </HashRouter>
  );
}
