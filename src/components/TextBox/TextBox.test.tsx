import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextBox } from './TextBox';

describe('TextBox', () => {
  it('should render medium variant', () => {
    render(<TextBox sizeVariant="medium" />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('py-2 px-3');
  });

  it('should render large variant', () => {
    render(<TextBox sizeVariant="large" />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('py-3 px-4');
  });

  it('should render error variant', () => {
    render(<TextBox error="error" />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      'placeholder:text-red-400 text-rose-900 outline-red-500 border-red-300'
    );
  });

  it('should render label', () => {
    render(<TextBox label="label" />);

    const label = screen.getByText('label');

    expect(label).toBeInTheDocument();
  });

  it('should not render label', () => {
    render(<TextBox />);

    const label = screen.queryByText('label');

    expect(label).not.toBeInTheDocument();
  });

  it('should render error message', () => {
    render(<TextBox error="error" />);

    const errorMessage = screen.getByText('error');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should not render error message', () => {
    render(<TextBox />);

    const errorMessage = screen.queryByText('error');

    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should correctly update the value', async () => {
    const user = userEvent.setup();
    render(<TextBox />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    await user.type(input, 'test');

    expect(input).toHaveValue('test');
  });
});
