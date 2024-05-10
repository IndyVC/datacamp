import { BannerProps } from "@/components/molecules/Banner";
import { ReactElement } from "react";

export interface Pricing {
  title: string;
  description: string;
  /**
   * In USD by default
   */
  price: {
    month: number;
    year: number;
  };
  titleColor: "orange" | "green" | "blue" | "dark";
  bannerOverride?: string;
  bannerPeriod?: string;
  buttonText: string;
  buttonType: "default" | "primary";
  descriptions: string[];
  suffix?: ReactElement;
  prefix?: ReactElement;
  hasChip: boolean;
}

export enum Period {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export enum Currency {
  EUR = "€",
  USD = "$",
  GBP = "£",
}

/**
 * All relative to USD (USD value = 1)
 */
export type Exchange = {
  currency: Currency;
  exchange: string;
  value: number;
};
