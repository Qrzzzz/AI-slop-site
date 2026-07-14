import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App', () => {
  it('renders the home route and closes the fake cookie dialog', async () => {
    window.location.hash = '#/';
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('heading', { name: /这不是数字泔水/ })).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '关闭饼干战略通知' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('协同仍在空气中');
  });

  it('keeps contradictory compliance settings internally consistent', async () => {
    window.location.hash = '#/compliance';
    const user = userEvent.setup();
    render(<App />);

    const privacy = screen.getByRole('checkbox', { name: /最大化隐私/ });
    const training = screen.getByRole('checkbox', { name: /用于训练不存在的模型/ });
    expect(privacy).toBeChecked();
    expect(training).not.toBeChecked();

    await user.click(training);
    expect(training).toBeChecked();
    expect(privacy).not.toBeChecked();
  });

  it('renders a recoverable strategic whitespace for an unknown route', () => {
    window.location.hash = '#/definitely-not-a-page';
    render(<App />);

    expect(screen.getByRole('heading', { name: /战略留白/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /返回有内容风险的首页/ })).toHaveAttribute('href', '#/');
  });
});
