import { ImageResponse } from 'next/server';

import { Logo } from '@/src/components/Logo';

export default async function Image() {
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
        {/* TODO: Change Test to real text */}
        <p style={{ fontSize: 54, margin: '96px 0' }}>Test</p>
        <p
          style={{
            backgroundColor: '#4F47E5',
            color: 'white',
            fontSize: 36,
            padding: '16px 144px',
            borderRadius: 12,
          }}
        >
          {/* TODO: Use translation */}
          Vote
        </p>
      </div>
    )
  );
}
