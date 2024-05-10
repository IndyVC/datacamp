"use client";
import Card from "@/components/molecules/Card";
import Currency from "@/components/molecules/Currency";
import PeriodSwitch from "@/components/molecules/PeriodSwitch";
import { PricingProvider, usePricing } from "@/providers/PricingProvider";

function Home() {
  const { period, prices } = usePricing();

  return (
    <main className="p-10">
      <div className="flex flex-row gap-2 w-full justify-end py-2">
        <PeriodSwitch />
        <Currency />
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
        {prices.map((pricing, i) => (
          <Card
            key={i}
            pricing={pricing}
            isFirst={i === 0}
            isLast={i === prices.length - 1}
          />
        ))}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <PricingProvider>
      <Home />
    </PricingProvider>
  );
}
