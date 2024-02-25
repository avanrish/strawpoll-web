import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, ChartData } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { pollOptionColors } from '@/src/utils/fixtures/poll-option-colors';
import { PollChartProps } from '@/src/components/PollChart/PollChart.type';

ChartJS.register(ArcElement, ChartDataLabels);

export function PollChart({ options }: PollChartProps) {
  const data: ChartData<'pie'> = {
    labels: options.map((option) => option.title),
    datasets: [
      {
        data: options.map((option) => option.count),
        backgroundColor: options.map(
          (_, i) => pollOptionColors[i % pollOptionColors.length]
        ),
      },
    ],
  };
  return (
    <Pie
      options={{
        borderColor: '#374151',
        plugins: {
          datalabels: {
            formatter: (v, context) => {
              if (v > 0) return context.chart.data.labels?.[context.dataIndex];
              return null;
            },
            font: {
              size: 16,
            },
            color: '#000',
          },
        },
      }}
      data={data}
    />
  );
}
