import { SiteFooter } from "@/components/site-footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Authorization",
  description: "Authorization page, for logging in and creating new users.",
};

const layout = async ({ children }: LayoutProps) => {
  return (
    <section className="h-screen overflow-hidden">
      <main className="flex flex-col h-full items-center space-y-6">
        {children}
      </main>
      <SiteFooter className="border-t  sticky bottom-0 left-0" />
    </section>
  );
};

export default layout;
