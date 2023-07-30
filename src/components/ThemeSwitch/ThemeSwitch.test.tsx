import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeSwitch } from '@/src/components/ThemeSwitch/ThemeSwitch';

describe('ThemeSwitch', () => {
  it('renders not enabled theme switch', () => {
    render(<ThemeSwitch defaultEnabled={false} />);

    const button = screen.getByRole('switch');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-checked', 'false');
  });

  it('renders enabled theme switch', () => {
    render(<ThemeSwitch defaultEnabled={true} />);

    const button = screen.getByRole('switch');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('changes state when clicked', () => {
    render(<ThemeSwitch defaultEnabled={false} />);

    const button = screen.getByRole('switch');
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-checked', 'true');
    expect(document.body).toHaveClass('dark');
  });
});
