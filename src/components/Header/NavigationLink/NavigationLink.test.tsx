import { render, screen } from '@testing-library/react';

import { Routes } from '@/src/utils/enums/routes';

import { NavigationLink } from './NavigationLink';

jest.mock('next-intl/link', () => ({
  __esModule: true,
  default: jest.fn(({ children, ...rest }) => {
    return <a {...rest}>{children}</a>;
  }),
}));

describe('NavigationLink', () => {
  const link = Routes.CreatePoll;
  const text = 'Example Link';
  const Icon = () => <svg data-testid="mock-icon" />;
  const disabled = false;
  const isMobile = true;

  it('renders a navigation link with text and an icon', () => {
    render(
      <NavigationLink
        link={link}
        text={text}
        icon={Icon}
        disabled={disabled}
        isMobile={isMobile}
      />
    );

    const linkElement = screen.getByText(text);
    const iconElement = screen.getByTestId('mock-icon');

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('renders a navigation link without an icon', () => {
    render(
      <NavigationLink
        link={link}
        text={text}
        disabled={disabled}
        isMobile={isMobile}
      />
    );

    const linkElement = screen.getByText(text);
    const iconElement = screen.queryByTestId('mock-icon');

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeNull();
  });

  it('renders a mobile navigation link', () => {
    render(
      <NavigationLink
        link={link}
        text={text}
        icon={Icon}
        disabled={disabled}
        isMobile={true}
      />
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveClass('mobile');
    expect(navLinkElement).not.toHaveClass('desktop');
  });

  it('renders a desktop navigation link', () => {
    render(
      <NavigationLink
        link={link}
        text={text}
        icon={Icon}
        disabled={disabled}
        isMobile={false}
      />
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveClass('desktop');
    expect(navLinkElement).not.toHaveClass('mobile');
  });

  it('sets the correct href and aria-disabled attributes', () => {
    render(
      <NavigationLink
        link={link}
        text={text}
        icon={Icon}
        disabled={true}
        isMobile={isMobile}
      />
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveAttribute('href', link);
    expect(navLinkElement).toHaveAttribute('aria-disabled', 'true');
  });
});
