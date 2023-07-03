import { useTranslations } from 'next-intl';
import { Random } from '@/src/components/Random/Random';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div>
      <Random />
    </div>
  );
}
