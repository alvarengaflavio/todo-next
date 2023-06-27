"use client";
import AccountForm from "@/components/forms/account-form";
import AccountPasswordForm from "@/components/forms/account-password-form";
import AccountFormSkeleton from "@/components/skeletons/account-form-skeleton";
import AccountPasswordSkeleton from "@/components/skeletons/account-password-skeleton";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface AccountTabsProps {}

const AccountTabs: FC<AccountTabsProps> = () => {
  const { data: session, status, update } = useSession();

  return (
    <Tabs
      defaultValue="account"
      className="w-[300px] sm:w-[400px] lg:w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          {session ? (
            <AccountForm session={session} status={status} update={update} />
          ) : (
            <AccountFormSkeleton />
          )}
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          {session ? (
            <AccountPasswordForm session={session} status={status} />
          ) : (
            <AccountPasswordSkeleton />
          )}
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export { AccountTabs };
