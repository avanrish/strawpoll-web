/* eslint-disable no-unused-vars */
export type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  uid?: string | null | undefined;
};

export type Polls = {
  id: string;
  title: string;
  createdAt: string;
};

export type DashboardProps = {
  user: User;
  polls: Polls[];
};

export type ExploreProps = {
  polls: Polls[];
};

export type CreateProps = {
  user: User;
};

export type InputProps = {
  type: string;
  body: string;
  onChange: (body: string) => void;
  selected: boolean;
};

export type Poll = {
  id: string;
  title: string;
  answers: {
    body: string;
    votes: number;
  }[];
  multiple: boolean;
  createdAt: string;
  name: string;
  uid: string | null;
};

export type PollProps = {
  pollData: Poll;
};

export type ResultsProps = {
  pollData: Poll & { totalVotes: number; totalPeople: number; myVotes: string[] };
  user: User | null;
};
