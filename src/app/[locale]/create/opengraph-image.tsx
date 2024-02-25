import { ImageResponse } from 'next/og';

import { Logo } from '@/src/components/Logo';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          color: '#111827',
        }}
      >
        <Logo />
      </div>
    )
  );
}
