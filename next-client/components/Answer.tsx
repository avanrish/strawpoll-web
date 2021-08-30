import { CheckCircleIcon } from '@heroicons/react/outline';

interface IAnswer {
  body: string;
  votes: number;
  totalVotes: number;
  myVotes: string[];
  color: string;
}

export default function Answer({
  body,
  votes,
  totalVotes,
  myVotes,
  color,
}: IAnswer) {
  const number = (votes / totalVotes) * 100;
  const percent = Math.round(number * 100) / 100;
  return (
    <>
      <p className="flex justify-between">
        <span className="flex">
          {myVotes.find((a) => a === body) ? (
            <CheckCircleIcon className="h-6 mr-1" />
          ) : null}{' '}
          {body}
        </span>
        <span>{`${!isNaN(percent) ? percent : 0}% (${votes} ${
          votes === 1 ? 'vote' : 'votes'
        })`}</span>
      </p>
      <div className="w-full h-5 border border-black rounded mb-2 transition">
        <div
          className="h-full rounded transition"
          style={{
            width: `${!isNaN(percent) ? percent : 0}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </>
  );
}
