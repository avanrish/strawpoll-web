import { HeroMain } from '@/src/components/Hero/HeroMain';
import { HeroStats } from '@/src/components/Hero/HeroStats';

export const Hero = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <HeroMain />
      <HeroStats />
    </div>
  );
};
