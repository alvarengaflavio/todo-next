import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
      <SiteHeader />
      <div className="flex min-h-screen flex-col space-y-6">
        <div className="container flex-1">
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
      <SiteFooter className="border-t" />
    </>
  );
};

export default layout;
