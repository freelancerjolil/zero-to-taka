export function calculateReadingTime(body: any[]): number {
  if (!body) return 0;

  const wordsPerMinute = 200;
  const text = body
    .filter((block) => block._type === 'block' && block.children)
    .map((block) => block.children.map((child: any) => child.text).join(''))
    .join(' ');

  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}
