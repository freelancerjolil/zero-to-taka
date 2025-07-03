'use client'; // This component will handle form state, so it's a client component.

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you would integrate with your email service provider's API
    // (e.g., ConvertKit, Mailchimp) using a Server Action.

    // For now, we'll just show a success message.
    if (email) {
      setMessage(`Thank you! ${email} has been added to our mailing list.`);
      setEmail('');
    }
  };

  return (
    <section className="py-8 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-card px-6 py-16 text-center shadow-lg sm:px-16">
          {/* Decorative background elements */}
          <div className="absolute -z-10 h-full w-full inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
          <div className="absolute -z-20 h-full w-full inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background"></div>

          <h2 className="text-3xl font-display font-extrabold sm:text-4xl text-foreground-strong">
            Don't Miss an Update. Join the Movement.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Get exclusive case studies, monetization tips, and early access to
            new blueprints delivered straight to your inbox.
          </p>

          {/* --- RESPONSIVE FORM --- */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto items-center mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row" // Updated for responsiveness
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
              className="min-w-0 flex-auto rounded-md border-border bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 h-12"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className=" btn-outline text-[#2DD4BF] btn-sm w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
          {message && <p className="mt-4 text-sm text-primary">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
