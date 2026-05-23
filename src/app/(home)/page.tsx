import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logo } from "@/lib/shared";
import { Card } from "@/components/ui/card";
import { TerminalCard } from "@/components/terminal-card";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 justify-between h-full">
      <section className="flex flex-col items-center justify-center flex-1 px-6 pt-24 pb-12 text-center">
        <Image src={logo} alt="SCAL-P" width={64} height={64} className="mb-6" />
        <h1 className="text-4xl font-bold mb-4">Secure Chain Assurance Layer for Packages</h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          Policy enforcement, integrity verification, and trust scoring for npm, pnpm, yarn, and
          bun.
        </p>
        <div className="flex gap-4">
          <Link href="/docs/getting-started/installation">
            <Button size={"lg"} variant={"outline"}>
              Get Started
            </Button>
          </Link>
          <Link href="/docs">
            <Button size={"lg"} variant={"default"}>
              Documentation
            </Button>
          </Link>
        </div>
      </section>

      <section className="w-full max-w-2xl mx-auto px-6 pb-16">
        <TerminalCard />
      </section>

      <section className="w-full max-w-2xl mx-auto px-6 pb-16">
        <Card className="p-4">
          <div className="rounded-lg bg-accent p-4 font-mono text-sm leading-relaxed">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="inline-block size-2.5 rounded-full bg-red-500" />
              <span className="inline-block size-2.5 rounded-full bg-yellow-500" />
              <span className="inline-block size-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-zinc-500">Quick Install</span>
            </div>
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground">$ </span>
                <span className="text-accent-foreground">./scalp init</span>
              </div>
              <div className="text-muted-foreground/90">Created .scalp/policy.json</div>
              <div className="pt-2">
                <span className="text-muted-foreground">$ </span>
                <span className="text-accent-foreground">./scalp install --guarded</span>
              </div>
              <div className="text-muted-foreground/90">Packages installed and verified</div>
              <div className="pt-2">
                <span className="text-muted-foreground">$ </span>
                <span className="text-accent-foreground">./scalp ci</span>
              </div>
              <div className="text-muted-foreground/90">audit ok</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Link href="https://github.com/scal-p-labs/SCAL-P/releases">
              <Button variant={"default"}>Download SCAL-P</Button>
            </Link>
          </div>
        </Card>
      </section>

      <footer className="border-t py-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-xs font-light font-mono text-muted-foreground">
            SCAL-P — Apache 2.0
          </span>
          <Link href={"https://github.com/scal-p-labs/SCAL-P"}>
            <Button variant={"link"} className="text-xs">
              Source Code
            </Button>
          </Link>
          <Link href={"https://github.com/scal-p-labs/SCAL-P/releases"}>
            <Button variant={"link"} className="text-xs">
              Changelog
            </Button>
          </Link>
          <Link href={"https://github.com/scal-p-labs/SCAL-P/discussions"}>
            <Button variant={"link"} className="text-xs">
              Discussions
            </Button>
          </Link>
          <Link href={"https://github.com/scal-p-labs/SCAL-P/security/policy"}>
            <Button variant={"link"} className="text-xs">
              Security
            </Button>
          </Link>
        </div>
        <p className="text-[0.625rem] text-muted-foreground/60">
          Made with ❤️ by the SCAL-P community
        </p>
      </footer>
    </main>
  );
}
