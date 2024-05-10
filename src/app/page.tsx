"use client";
import Banner from "@/components/molecules/Banner";
import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";
import { Currency, Period, Pricing } from "@/types";
import Image from "next/image";
import Descripton from "@/components/molecules/Descripton";
import PeriodSwitch from "@/components/molecules/PeriodSwitch";
import Chip from "@/components/atoms/Chip";
import { Switch } from "@/components/atoms/Switch";
import { BillingProvider, useBilling } from "@/providers/BillingProvider";
import { useMemo } from "react";

const getPrices = (period: Period): Pricing[] => {
  return [
    {
      title: "Basic",
      description: "Limited access",
      titleColor: "dark",
      Banner: <Banner override="Free" />,
      Button: <Button text={"Get started"} type="default" />,
      Description: (
        <Descripton
          descriptions={[
            "Every first chapter free",
            "Free professional profile and job board access",
            "Upgrade to earn certificates",
          ]}
        />
      ),
    },
    {
      title: "Premium",
      description: "For individuals",
      titleColor: "green",
      Banner: (
        <Banner
          price={period === Period.MONTHLY ? 42 : 14}
          period={`/${Period.MONTHLY}`}
          currency={Currency.USD}
        />
      ),
      Button: <Button text={"Subscribe now"} type="primary" />,
      Description: (
        <Descripton
          descriptions={[
            "Access our full content library",
            "All certificates and projects",
            "Go from zero to job ready",
            "Our top Pyhton, SQL, Tableau, Power BI and R programs",
            "More ways to learn to code",
          ]}
        />
      ),
      Chip: <Chip text="Best value" />,
    },
    {
      title: "Teams",
      description: "For teams of 2 and up",
      titleColor: "blue",
      Banner: (
        <Banner
          price={25}
          period={`per user /${Period.MONTHLY}`}
          currency={Currency.USD}
        />
      ),
      Button: <Button text={"Set up a team"} type="default" />,
      Description: (
        <Descripton
          descriptions={[
            "Manage your group",
            "View learning activity and track progress",
            "License management tools",
          ]}
          prefix={<span>Everything in Premium plus:</span>}
          suffix={
            <span className="text-accent-blue font-semibold">
              Free teams plan for educators
            </span>
          }
        />
      ),
      Chip: <Chip text="Best value" />,
    },
    {
      title: "Enterprise",
      description: "Besproke solutions",
      titleColor: "orange",
      Banner: <Banner override="Contact sales for pricing" />,
      Button: <Button text={"Request a demo"} type="default" />,
      Description: (
        <Descripton
          descriptions={[
            "Personalized and adaptive learning paths for employees",
            "Advanced analytics and reporting integrations",
            "Single Sign-On (SSO) through Okta, Auth0, Azure and more",
            "LMS/LXP integrations",
          ]}
        />
      ),
    },
  ];
};

function Home() {
  const { period } = useBilling();

  const prices = useMemo(() => {
    return getPrices(period);
  }, [period]);

  return (
    <main className="p-10">
      <PeriodSwitch />
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
        {prices.map((price, i) => (
          <Card
            key={i}
            {...price}
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
    <BillingProvider>
      <Home />
    </BillingProvider>
  );
}
