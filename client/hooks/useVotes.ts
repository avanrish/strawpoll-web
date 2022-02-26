import { useState } from 'react';

interface IProps {
  answers: {
    body: string;
    votes: number;
  }[];
  multiple: boolean;
}

export default function useVotes({ answers, multiple }: IProps) {
  const [selected, setSelected] = useState(
    answers.map((a) => ({ body: a.body, selected: false }))
  );

  const handleChange = (body: string): void => {
    if (multiple) {
      const newState = selected.map((sel) => {
        if (sel.body === body) return { ...sel, selected: !sel.selected };
        else return sel;
      });
      setSelected(newState);
    } else {
      const newState = selected.map((sel) => {
        if (sel.body === body) return { ...sel, selected: true };
        else return { ...sel, selected: false };
      });
      setSelected(newState);
    }
  };

  return { selected, handleChange };
}
