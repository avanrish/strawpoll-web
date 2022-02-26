import { PieChart as Chart } from 'react-minimal-pie-chart';

interface IPie {
  answers: {
    body: string;
    votes: number;
  }[];
  colors: string[];
}

export default function PieChart({ answers, colors }: IPie) {
  const data = answers.map((ans, i) => ({
    title: ans.body,
    value: ans.votes,
    color: colors[i],
  }));

  return <Chart data={data} viewBoxSize={[100, 100]} />;
}
