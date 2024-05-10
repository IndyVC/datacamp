import { BannerProps } from "@/components/molecules/Banner";
import { ReactElement } from "react";

export interface Pricing {
  title: string;
  description: string;
  titleColor: "orange" | "green" | "blue" | "dark";
  Banner: ReactElement;
  Button: ReactElement;
  Description: ReactElement;
  Chip?: ReactElement;
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
