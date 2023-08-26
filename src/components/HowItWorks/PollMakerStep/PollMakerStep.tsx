import { PollMakerStepProps } from './PollMakerStep.type';

export const PollMakerStep = ({
  step,
  title,
  description,
}: PollMakerStepProps) => {
  return (
    <div className="flex">
      <div className="w-8 h-8 min-w-[2rem] flex items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">
        {`${step}.`}
      </div>
      <div className="flex flex-col mt-1 ml-3">
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="mt-3 text-gray-500">{description}</p>
      </div>
    </div>
  );
};
