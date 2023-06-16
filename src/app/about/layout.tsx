import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout = async ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen space-y-6">
      <SiteHeader />
      <div className="container flex-1">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default AboutLayout;
