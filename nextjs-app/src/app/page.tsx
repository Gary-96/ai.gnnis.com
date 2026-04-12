import React from 'react';
import HomePageClient from './HomePageClient';
import { getContentData } from '@/lib/data';

/**
 * Server Component: Entry point for SSG
 * Reads data at build time and passes it to the client layer.
 */
export default async function HomePage() {
  // Build-time data fetch (no client-side effect needed)
  const data = await getContentData();

  return <HomePageClient initialData={data} />;
}
