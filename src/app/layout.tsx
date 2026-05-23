import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter, Albert_Sans, Barlow, Source_Code_Pro } from "next/font/google";
import { cn } from "@/lib/cn";

const sourceCodeProSourceCodePro = Source_Code_Pro({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-code-pro",
});

const barlowBarlow = Barlow({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const albertSansAlbertSans = Albert_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-albert-sans",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        inter.className,
        albertSansAlbertSans.variable,
        barlowBarlow.variable,
        sourceCodeProSourceCodePro.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
