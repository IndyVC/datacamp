"use client";
import React from "react";
import { Switch } from "../atoms/Switch";
import { Period } from "@/types";
import { usePricing } from "@/providers/PricingProvider";

const PeriodSwitch = () => {
  const { setPeriod, period } = usePricing();

  const handleChange = (checked: boolean) => {
    setPeriod(checked ? Period.YEARLY : Period.MONTHLY);
  };
  return (
    <span className="flex flex-row justify-end gap-2 align-middle m-2 text-white">
      Save with yearly
      <Switch
        checked={period === Period.YEARLY}
        onCheckedChange={handleChange}
      />
    </span>
  );
};

export default PeriodSwitch;
