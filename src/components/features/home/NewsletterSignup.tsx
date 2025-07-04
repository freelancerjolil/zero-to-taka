'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setMessage(`Thank you! ${email} has been added to our mailing list.`);
      setEmail('');
    }
  };

  return (
    <section className="bg-background sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-card px-6 py-16 text-center shadow-lg sm:px-16">
          {/* Decorative Grid BG */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary-from/10 via-transparent to-background" />

          {/* Heading & Subtext */}
          <h2 className="text-3xl font-display font-extrabold text-foreground-strong sm:text-4xl">
            Don’t Miss an Update. Join the Movement.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Get exclusive case studies, monetization tips, and early access to
            new blueprints delivered straight to your inbox.
          </p>

          {/* Responsive Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row items-center"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-background transition hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          {/* Success Message */}
          {message && (
            <p className="mt-4 text-sm text-primary-from font-medium">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
