import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const { nav } = baseOptions();
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} nav={{ ...nav, mode: "auto" }}>
      {children}
    </DocsLayout>
  );
}
