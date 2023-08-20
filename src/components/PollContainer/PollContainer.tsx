import { PropsWithChildren } from 'react';

export const PollContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-8 border-t-4 border-b border-t-amber-400 border-b-gray-300 bg-white py-5 px-4">
      {children}
    </div>
  );
};
