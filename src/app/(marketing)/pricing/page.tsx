import GetUserPlan from "./get-user-plan";

export const metadata = {
  title: "Preços e Planos",
};

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <GetUserPlan />
    </section>
  );
}
