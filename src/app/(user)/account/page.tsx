import { FC } from "react";
import { AccountTabs } from "./account-tabs";

interface AccountPageProps {}

const AccountPage: FC<AccountPageProps> = ({}) => {
  return (
    <section className="w-full h-full text-center flex flex-col items-center">
      <h2 className="text-2xl font-thin my-6">OPÇÕES DE CONTA</h2>
      <AccountTabs />
    </section>
  );
};

export default AccountPage;
