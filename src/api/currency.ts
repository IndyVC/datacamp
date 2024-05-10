import { cache } from "react";
import env from "@/lib/env";
import { Currency, Exchange } from "@/types";
import getSymbolFromCurrency from "currency-symbol-map";

export const getExchanges = cache(async (): Promise<Exchange[]> => {
  const result = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${env.apiKey}`
  );
  const data = (await result.json()).data;

  return Object.entries(data).map(
    ([exchange, value]) =>
      ({
        exchange,
        value,
        currency: getCurrency(exchange),
      } as Exchange)
  );
});

function getCurrency(exchange: string) {
  return getSymbolFromCurrency(exchange) || "";
}
