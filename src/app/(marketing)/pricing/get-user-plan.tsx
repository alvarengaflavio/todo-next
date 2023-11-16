"use client";

import { useSession } from "next-auth/react";
import { FC, useState } from "react";

interface GetUserPlanProps {}

type Plan = {
  id: string;
  name: "basic" | "premium";
  price: number;
  features: string[];
};

const GetUserPlan: FC<GetUserPlanProps> = ({}) => {
  const { data: session, status } = useSession();
  const [plan, setPlan] = useState<Plan | null>(null);

  if (status === "loading") {
    return null;
  }

  if (status === "unauthenticated") {
    return null;
  }

  if (status === "authenticated") {
    const { user } = session;
    // const { plan } = user;
    // setPlan(user.plan);
  }

  const planName = plan?.name || "basic";
  return (
    <>
      <div>{planName}</div>
    </>
  );
};

export default GetUserPlan;
