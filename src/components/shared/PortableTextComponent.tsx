'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PortableTextBlock } from 'sanity';

interface CodeBlockValue {
  _type: 'codeBlock';
  code: string;
  language: string;
}

const PortableTextComponent = ({ value }: { value: PortableTextBlock[] }) => {
  const components: PortableTextComponents = {
    types: {
      codeBlock: ({ value }: { value: CodeBlockValue }) => {
        const { code, language } = value;
        if (!code) {
          return null;
        }
        return (
          <div className="my-6 rounded-md overflow-hidden">
            <SyntaxHighlighter
              language={language || 'text'}
              style={vscDarkPlus}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-display font-bold my-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-display font-bold my-5">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-display font-bold my-4">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="text-primary hover:underline"
            target="_blank"
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
