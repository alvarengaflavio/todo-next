import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface UserLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Usuário",
};

const UserLayout = async ({ children }: UserLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
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

export default UserLayout;
