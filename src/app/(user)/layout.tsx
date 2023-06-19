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
        <main className="flex-1 sm:h-[45rem] overflow-hidden">{children}</main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default UserLayout;
