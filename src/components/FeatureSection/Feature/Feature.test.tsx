import { render, screen } from '@testing-library/react';
import { Feature } from './Feature';

describe('Feature component', () => {
  const mockProps = {
    icon: () => <svg data-testid="icon" />,
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders with provided props', () => {
    render(<Feature {...mockProps} />);

    const titleElement = screen.getByText(mockProps.title);
    const descriptionElement = screen.getByText(mockProps.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<Feature {...mockProps} />);

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });
});
