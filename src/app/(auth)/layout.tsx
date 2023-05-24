import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Authorization",
  description: "Authorization page, for logging in and creating new users.",
};

const layout = async ({ children }: LayoutProps) => {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default layout;
