import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
  window.location.hash = '';
});

Object.defineProperty(window, 'scrollTo', {
  value: () => undefined,
  writable: true,
});
