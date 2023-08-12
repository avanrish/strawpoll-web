import { render } from '@testing-library/react';
import { Feature } from './Feature';

describe('Feature component', () => {
  const mockProps = {
    icon: () => <svg />,
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders with provided props', () => {
    const { getByText } = render(<Feature {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
  });

  it('renders the icon', () => {
    const { container } = render(<Feature {...mockProps} />);
    const iconElement = container.querySelector('svg'); // Adjust the selector based on the actual icon structure

    expect(iconElement).toBeInTheDocument();
  });
});
