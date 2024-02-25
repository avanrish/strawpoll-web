import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@testing-library/react';

import { Routes } from '@/src/utils/enums/routes';
import { Locales } from '@/src/utils/enums/locales';

import { NavigationLink } from './NavigationLink';

describe('NavigationLink', () => {
  const locale = Locales.ENGLISH;
  const link = Routes.CREATE_POLL;
  const text = 'Example Link';
  const Icon = () => <svg data-testid="mock-icon" />;
  const disabled = false;
  const isMobile = true;

  it('renders a navigation link with text and an icon', () => {
    render(
      <NextIntlClientProvider locale={locale}>
        <NavigationLink
          link={link}
          text={text}
          icon={Icon}
          disabled={disabled}
          isMobile={isMobile}
        />
      </NextIntlClientProvider>
    );

    const linkElement = screen.getByText(text);
    const iconElement = screen.getByTestId('mock-icon');

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('renders a navigation link without an icon', () => {
    render(
      <NextIntlClientProvider locale={locale}>
        <NavigationLink
          link={link}
          text={text}
          disabled={disabled}
          isMobile={isMobile}
        />
      </NextIntlClientProvider>
    );

    const linkElement = screen.getByText(text);
    const iconElement = screen.queryByTestId('mock-icon');

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeNull();
  });

  it('renders a mobile navigation link', () => {
    render(
      <NextIntlClientProvider locale={locale}>
        <NavigationLink
          link={link}
          text={text}
          icon={Icon}
          disabled={disabled}
          isMobile={true}
        />
      </NextIntlClientProvider>
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveClass('mobile');
    expect(navLinkElement).not.toHaveClass('desktop');
  });

  it('renders a desktop navigation link', () => {
    render(
      <NextIntlClientProvider locale={locale}>
        <NavigationLink
          link={link}
          text={text}
          icon={Icon}
          disabled={disabled}
          isMobile={false}
        />
      </NextIntlClientProvider>
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveClass('desktop');
    expect(navLinkElement).not.toHaveClass('mobile');
  });

  it('sets the correct href and aria-disabled attributes', () => {
    render(
      <NextIntlClientProvider locale={locale}>
        <NavigationLink
          link={link}
          text={text}
          icon={Icon}
          disabled={true}
          isMobile={isMobile}
        />
      </NextIntlClientProvider>
    );

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toHaveAttribute('href', `/${locale}${link}`);
    expect(navLinkElement).toHaveAttribute('aria-disabled', 'true');
  });
});
