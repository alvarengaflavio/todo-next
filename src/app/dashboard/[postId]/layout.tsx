interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Page title",
  description: "Page description",
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container flex-1">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
