import { Currency, Period } from "@/types";
import { FC, createContext, useContext, useState } from "react";

interface BillingContextProps {
  currency: Currency;
  period: Period;
  setCurrency: (currency: Currency) => void;
  setPeriod: (period: Period) => void;
}
const BillingContext = createContext<BillingContextProps>({
  currency: Currency.USD,
  period: Period.MONTHLY,
  setCurrency: () => {},
  setPeriod: () => {},
});
export const BillingProvider: FC<{ children: any }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(Currency.USD);
  const [period, setPeriod] = useState<Period>(Period.MONTHLY);

  return (
    <BillingContext.Provider
      value={{ currency, period, setCurrency, setPeriod }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = () => useContext(BillingContext);
