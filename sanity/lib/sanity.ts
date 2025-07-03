import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-05-03'; // Use a consistent API version

if (!projectId) {
  console.error(
    'Sanity Project ID is not set. Please check your .env.local file.'
  );
  // You might want to throw an error in production
  // throw new Error("Sanity Project ID is not configured");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for speed
});
