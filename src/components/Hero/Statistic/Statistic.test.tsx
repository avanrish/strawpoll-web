import { render } from '@testing-library/react';
import { Statistic } from './Statistic';

describe('Statistic Component', () => {
  const label = 'Total Polls';
  const value = '500M';

  it('renders the label and value correctly', () => {
    const { getByText } = render(<Statistic label={label} value={value} />);

    const labelElement = getByText(label);
    const valueElement = getByText(value);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
