import React from 'react';
import { render, screen } from '@testing-library/react';
import { Random } from '@/src/app/[locale]/_components/Random/Random';

describe('Random', () => {
  it('display post', async () => {
    render(await Random());

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent(
      /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
    );
  });
});
