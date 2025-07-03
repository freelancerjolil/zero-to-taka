'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.cli.ts'; // Adjust path if necessary

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`
  return <NextStudio config={config} />;
}
