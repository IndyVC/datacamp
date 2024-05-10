import { usePricing } from "@/providers/PricingProvider";
import { Period, Pricing } from "@/types";
import React, { FC, useMemo } from "react";

export interface BannerProps {
  pricing: Pricing;
}
const Banner: FC<BannerProps> = ({ pricing }) => {
  const { exchange, period } = usePricing();

  const price = useMemo(() => {
    let result;
    if (period === Period.MONTHLY)
      result = pricing.price.month * (exchange?.value || 1);
    else result = pricing.price.year * (exchange?.value || 1);
    return result.toFixed(2);
  }, [pricing, period, exchange]);

  if (pricing.bannerOverride)
    return (
      <div className={`w-full h-16 px-8`}>
        <strong className="text-4xl">{pricing.bannerOverride}</strong>
      </div>
    );

  return (
    <div className={`w-full h-16 flex flex-row items-center gap-2 px-8`}>
      <strong className="text-4xl">
        {exchange?.currency} {price}
      </strong>
      <div className="flex flex-col text-md">
        <span>{pricing.bannerPeriod}</span>
        <span>billed annually</span>
      </div>
    </div>
  );
};

export default Banner;
