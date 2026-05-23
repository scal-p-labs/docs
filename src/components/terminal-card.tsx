"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/cn"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

type TerminalDemo = {
  title: string
  lines: string[]
}

const demos: Record<string, TerminalDemo> = {
  init: {
    title: "scalp init",
    lines: [
      "Created .scalp/policy.json",
      "Created .scalp/policy.schema.json",
      "Created .scalp/lockfile.json",
      "Created .scalp/audit.log",
      "Created .scalp/cache/",
    ],
  },
  install: {
    title: "scalp install --guarded",
    lines: [
      "! policy violations detected",
      "policy violations detected:",
      "- colors@1.4.2 (denylist: denylist)",
    ],
  },
  ci: {
    title: "scalp ci",
    lines: [
      "fork context: require_hash enforced, install scripts blocked",
    ],
  },
  audit: {
    title: "scalp audit",
    lines: [
      "audit ok",
    ],
  },
}

function TerminalWindow({ demo }: { demo: TerminalDemo }) {
  const [outputIndex, setOutputIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setOutputIndex(0)
    setShowCursor(true)

    const t1 = setTimeout(() => setOutputIndex(1), 400)
    const blink = setInterval(() => setShowCursor((c) => !c), 530)

    return () => {
      clearTimeout(t1)
      clearInterval(blink)
    }
  }, [demo])

  useEffect(() => {
    if (outputIndex === 0) return

    const t = setTimeout(() => {
      setOutputIndex((i) => Math.min(i + 1, demo.lines.length + 1))
    }, 100)

    return () => clearTimeout(t)
  }, [outputIndex, demo.lines.length])

  const visibleLines = outputIndex > 0 ? demo.lines.slice(0, outputIndex - 1) : []

  return (
    <div className="rounded-lg bg-zinc-950 p-4 font-mono text-sm leading-relaxed shadow-2xl">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="inline-block size-2.5 rounded-full bg-red-500" />
        <span className="inline-block size-2.5 rounded-full bg-yellow-500" />
        <span className="inline-block size-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-zinc-500">Terminal</span>
      </div>

      <div className="space-y-1">
        <div>
          <span className="text-zinc-500">$ </span>
          <span className="text-zinc-100">{demo.title}</span>
        </div>

        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={cn(
              line.startsWith("! ") ? "text-yellow-400" : "text-zinc-400",
            )}
          >
            {line}
          </div>
        ))}

        {outputIndex <= demo.lines.length && (
          <span
            className={cn(
              "inline-block h-4 w-2 align-middle bg-zinc-100 transition-opacity",
              showCursor ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>
    </div>
  )
}

export function TerminalCard() {
  return (
    <Card className="overflow-hidden">
      <Tabs defaultValue="init">
        <div className="border-b px-4 pt-3 pb-0">
          <TabsList className="w-full justify-start gap-0 bg-transparent">
            {Object.keys(demos).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="rounded-none border-b-2 border-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors data-active:border-foreground data-active:text-foreground data-active:bg-transparent"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(demos).map(([key, d]) => (
          <TabsContent key={key} value={key} className="p-4">
            <TerminalWindow demo={d} />
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  )
}
