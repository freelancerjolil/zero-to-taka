'use client';

import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PortableTextComponent = ({ value }: { value: any[] }) => {
  const components = {
    types: {
      // This is the custom component for our 'codeBlock' schema type
      codeBlock: ({ value }: { value: { code: string; language: string } }) => {
        const { code, language } = value;
        if (!code) {
          return null;
        }
        return (
          <div className="my-6 rounded-md overflow-hidden">
            <SyntaxHighlighter
              language={language || 'text'}
              style={vscDarkPlus}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      },
      // You can add custom renderers for images, etc. here if needed
    },
    // Customizing default block elements
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-display font-bold my-6">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-display font-bold my-5">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-display font-bold my-4">{children}</h3>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="text-primary hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
