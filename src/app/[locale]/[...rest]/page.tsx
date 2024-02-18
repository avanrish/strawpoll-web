import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getNotFoundMetadata } from '@/src/services/internal/getNotFoundMetadata';

export default function CatchAllPage() {
  return notFound();
}

export async function generateMetadata(): Promise<Metadata> {
  return getNotFoundMetadata();
}
