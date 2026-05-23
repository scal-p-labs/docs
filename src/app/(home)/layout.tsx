export default function Layout({ children }: LayoutProps<"/">) {
  return <div className="flex items-center justify-center h-screen w-screen">{children}</div>;
}
