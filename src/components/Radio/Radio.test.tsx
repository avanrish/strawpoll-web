import { render, screen, fireEvent } from '@testing-library/react';

import { Radio } from './Radio';

describe('Radio component', () => {
  const mockProps = {
    value: 'option1',
    checked: false,
    name: 'radioGroup',
    label: 'Option 1',
    onChange: jest.fn(),
  };

  it('renders with the provided label', () => {
    render(<Radio {...mockProps} />);

    const labelElement = screen.getByText('Option 1');

    expect(labelElement).toBeInTheDocument();
  });

  it('renders with the provided value if label is not provided', () => {
    const propsWithoutLabel = { ...mockProps, label: undefined };
    render(<Radio {...propsWithoutLabel} />);

    const valueElement = screen.getByText('option1');

    expect(valueElement).toBeInTheDocument();
  });

  it('renders unchecked state', () => {
    render(<Radio {...mockProps} />);

    const radioInput = screen.getByRole('radio');

    expect(radioInput).not.toBeChecked();
  });

  it('renders checked state', () => {
    const propsChecked = { ...mockProps, checked: true };
    render(<Radio {...propsChecked} />);

    const radioInput = screen.getByRole('radio');

    expect(radioInput).toBeChecked();
  });

  it('triggers onChange when clicked', () => {
    render(<Radio {...mockProps} />);

    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
  });
});
