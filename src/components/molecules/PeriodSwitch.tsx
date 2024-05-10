"use client";
import React from "react";
import { Switch } from "../atoms/Switch";
import { useBilling } from "@/providers/BillingProvider";
import { Period } from "@/types";

const PeriodSwitch = () => {
  const { setPeriod, period } = useBilling();

  const handleChange = (checked: boolean) => {
    setPeriod(checked ? Period.YEARLY : Period.MONTHLY);
  };
  return (
    <span className="flex flex-row justify-end gap-2 align-middle m-2">
      Save with yearly{" "}
      <Switch
        checked={period === Period.YEARLY}
        onCheckedChange={handleChange}
      />
    </span>
  );
};

export default PeriodSwitch;
