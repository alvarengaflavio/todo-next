import { AuthRequiredException } from "@/lib/exceptions";
import { FC } from "react";

interface PageProps {}

const page: FC<PageProps> = () => {
  // throw new AuthRequiredException();

  return <div className="text-7xl">login</div>;
};

export default page;
