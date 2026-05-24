export default function Layout({ children }: LayoutProps<"/">) {
  return <div className="flex items-center justify-center min-h-screen w-full overflow-x-hidden">{children}</div>;
}
