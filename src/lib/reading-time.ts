import { PortableTextBlock } from 'sanity';

// Define a type for a block that contains text children
type TextBlock = {
  _type: 'block';
  children: { text: string }[];
};

// Function to check if a block is a TextBlock
const isTextBlock = (block: PortableTextBlock): block is TextBlock => {
  return (
    block._type === 'block' && Array.isArray((block as TextBlock).children)
  );
};

export function calculateReadingTime(body: PortableTextBlock[]): number {
  if (!body) return 0;

  const wordsPerMinute = 200;
  const text = body
    .filter(isTextBlock)
    .map((block) => block.children.map((child) => child.text).join(''))
    .join(' ');

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}
