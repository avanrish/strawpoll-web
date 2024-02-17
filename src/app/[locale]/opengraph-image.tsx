import { ImageResponse } from 'next/og';

import { EmptyOGImage } from '@/src/components/EmptyOGImage';

export default async function Image() {
  return new ImageResponse(<EmptyOGImage />);
}
