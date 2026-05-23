import Link from 'next/link';
import { logo } from '@/lib/shared';
import { TerminalCard } from '@/components/terminal-card';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <img
          src={logo}
          alt="SCAL-P"
          className="h-16 mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">
          Secure Chain Assurance Layer for Packages
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          Policy enforcement, integrity verification, and trust scoring for npm, pnpm, yarn, and bun.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/getting-started/installation"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg border px-6 py-3 font-medium"
          >
            Documentation
          </Link>
        </div>
      </section>
      <section className="w-full max-w-2xl mx-auto px-6 pb-16">
        <TerminalCard />
      </section>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        SCAL-P — Apache 2.0
      </footer>
    </main>
  );
}
