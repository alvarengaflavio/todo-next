import PricingSkeleton from "../../../components/skeletons/pricing-skeleton";

export default async function LoadingPricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <PricingSkeleton />
    </section>
  );
}
