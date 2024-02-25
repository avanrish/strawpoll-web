import { render, screen } from '@testing-library/react';

import { PollMakerStep } from './PollMakerStep';

describe('PollMakerStep', () => {
  it('should render the component with props', () => {
    render(
      <PollMakerStep
        step={1}
        title="Test title"
        description="Test description"
      />
    );

    const step = screen.getByText('1.');
    const title = screen.getByText('Test title');
    const description = screen.getByText('Test description');

    expect(step).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
