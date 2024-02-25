import { Main } from '@/src/components/Hero/Main';
import { Statistics } from '@/src/components/Hero/Statistics';

const Hero = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Main />
      <Statistics />
    </div>
  );
};

export default Hero;
