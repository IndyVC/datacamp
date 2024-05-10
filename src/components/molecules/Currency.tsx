import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/atoms/Select";
import { usePricing } from "@/providers/PricingProvider";

const Currency = () => {
  const { exchanges, exchange, setExchange } = usePricing();

  const handleChange = (value: string) => {
    const exchange = exchanges.find((e) => e.exchange === value)!;
    setExchange(exchange);
  };

  return (
    <div>
      <Select defaultValue={exchange?.exchange} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Currency" className="w-[150px]" />
        </SelectTrigger>
        <SelectContent className="w-[150px]">
          {exchanges.map((exchange, i) => (
            <SelectItem key={exchange.exchange} value={exchange.exchange}>
              {exchange.currency} {exchange.exchange}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Currency;
