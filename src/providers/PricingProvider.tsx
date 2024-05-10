import { getExchanges } from "@/api/currency";
import { Currency, Exchange, Period, Pricing } from "@/types";
import { FC, createContext, useContext, useEffect, useState } from "react";

interface PricingContextProps {
  period: Period;
  setPeriod: (period: Period) => void;
  prices: Pricing[];
  exchange: Exchange | null;
  setExchange: (exchange: Exchange) => void;
  exchanges: Exchange[];
}
const PricingContext = createContext<PricingContextProps>({
  period: Period.MONTHLY,
  setPeriod: () => {},
  prices: [],
  exchange: null,
  setExchange: () => {},
  exchanges: [],
});
export const PricingProvider: FC<{ children: any }> = ({ children }) => {
  const [period, setPeriod] = useState<Period>(Period.MONTHLY);
  const [exchange, setExchange] = useState<Exchange>({
    value: 1,
    currency: Currency.USD,
    exchange: "USD",
  });
  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  const prices: Pricing[] = [
    {
      title: "Basic",
      description: "Limited access",
      price: {
        month: 0,
        year: 0,
      },
      titleColor: "dark",
      bannerOverride: "Free",
      buttonText: "Get started",
      buttonType: "default",
      descriptions: [
        "Every first chapter free",
        "Free professional profile and job board access",
        "Upgrade to earn certificates",
      ],
      hasChip: false,
    },
    {
      title: "Premium",
      description: "For individuals",
      price: {
        month: 42,
        year: 14,
      },
      titleColor: "green",
      bannerPeriod: "/month",
      buttonText: "Subscribe now",
      buttonType: "primary",
      descriptions: [
        "Access our full content library",
        "All certificates and projects",
        "Go from zero to job ready",
        "Our top Pyhton, SQL, Tableau, Power BI and R programs",
        "More ways to learn to code",
      ],
      hasChip: true,
    },
    {
      title: "Teams",
      description: "For teams of 2 and up",
      price: {
        month: 25,
        year: 25,
      },
      titleColor: "blue",
      bannerPeriod: "per user /monthly",
      buttonText: "Set up a team",
      buttonType: "default",
      descriptions: [
        "Manage your group",
        "View learning activity and track progress",
        "License management tools",
      ],
      prefix: <span>Everything in Premium plus:</span>,
      suffix: (
        <span className="text-accent-blue font-semibold">
          Free teams plan for educators
        </span>
      ),
      hasChip: true,
    },
    {
      title: "Enterprise",
      description: "Besproke solutions",
      price: {
        month: 0,
        year: 0,
      },
      titleColor: "orange",
      bannerOverride: "Contact sales for pricing",
      buttonText: "Request a demo",
      buttonType: "default",
      descriptions: [
        "Personalized and adaptive learning paths for employees",
        "Advanced analytics and reporting integrations",
        "Single Sign-On (SSO) through Okta, Auth0, Azure and more",
        "LMS/LXP integrations",
      ],
      hasChip: false,
    },
  ];

  const loadExchanges = async () => {
    const exchanges = await getExchanges();
    setExchanges(exchanges);
  };
  useEffect(() => {
    loadExchanges();
  }, []);

  return (
    <PricingContext.Provider
      value={{
        period,
        setPeriod,
        prices,
        exchanges,
        exchange,
        setExchange,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = () => useContext(PricingContext);
