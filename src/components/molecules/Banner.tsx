import { Period } from "@/types";
import React, { FC, useMemo } from "react";

export interface BannerProps {
  /**
   * Overrides the price/month banner
   */
  override?: string;
  price?: number;
  period?: string;
  titleColor?: "green" | "blue" | "orange";
  currency?: string;
}
const Banner: FC<BannerProps> = ({ override, price, period, currency }) => {
  if (override)
    return (
      <div className={`w-full h-16 px-8`}>
        <strong className="text-4xl">{override}</strong>
      </div>
    );

  return (
    <div className={`w-full h-16 flex flex-row items-center gap-2 px-8`}>
      <strong className="text-4xl">
        {currency} {price}
      </strong>
      <div className="flex flex-col text-md">
        <span>{period}</span>
        <span>billed annually</span>
      </div>
    </div>
  );
};

export default Banner;
