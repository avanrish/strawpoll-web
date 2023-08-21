import { render, screen } from '@testing-library/react';
import { Statistic } from './Statistic';

describe('Statistic Component', () => {
  const label = 'Total Polls';
  const value = '500M';

  it('renders the label and value correctly', () => {
    render(<Statistic label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(value);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
