import { ImageResponse } from 'next/og';

import { Logo } from '@/src/components/Logo';
import { getPoll } from '@/src/services/api/getPoll';
import { getTranslations } from 'next-intl/server';
import { EmptyOGImage } from '@/src/components/EmptyOGImage';

export default async function Image({
  params,
}: {
  params: { pollId: string };
}) {
  const t = await getTranslations('VoteForm');
  const poll = await getPoll(params.pollId);
  if (!poll) return new ImageResponse(<EmptyOGImage />);
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          color: '#111827',
        }}
      >
        <Logo />
        <p style={{ fontSize: 54, margin: '96px 0' }}>{poll.title}</p>
        <p
          style={{
            backgroundColor: '#4F47E5',
            color: 'white',
            fontSize: 36,
            padding: '16px 144px',
            borderRadius: 12,
          }}
        >
          {t('vote')}
        </p>
      </div>
    )
  );
}
