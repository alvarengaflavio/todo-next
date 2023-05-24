import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { dashboardConfig } from "@/config/dashboard";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Page title",
  description: "Page description",
};

const layout = async ({ children }: LayoutProps) => {
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background flex justify-around content-center">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <ModeToggle />
        </div>
      </header>
      <div className="flex min-h-screen flex-col space-y-6">
        <div className="container flex-1">
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default layout;
