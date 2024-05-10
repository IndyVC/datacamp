import { Period, Pricing } from "@/types";
import React, { FC, ReactElement, ReactNode } from "react";
import Banner from "./Banner";
import { cl } from "dynamic-class-list";
import Chip from "../atoms/Chip";
import Button from "../atoms/Button";
import Description from "./Description";

interface CardProps {
  pricing: Pricing;
  isFirst: boolean;
  isLast: boolean;
}

const Card: FC<CardProps> = ({ pricing, isFirst, isLast }) => {
  return (
    <div
      className={cl(
        "bg-white text-dark h-full rounded lg:rounded-none flex flex-col relative",
        { "rounded-l": isFirst, "rounded-r": isLast }
      )}
    >
      <div className="p-8">
        <h2 className={`font-bold text-lg text-accent-${pricing.titleColor}`}>
          {pricing.title}
        </h2>
        {pricing.hasChip ? <Chip text="Best Value" /> : null}
        <span className="uppercase">{pricing.description}</span>
      </div>

      <Banner pricing={pricing} />
      <Button text={pricing.buttonText} type={pricing.buttonType} />
      <Description
        descriptions={pricing.descriptions}
        suffix={pricing.suffix}
        prefix={pricing.prefix}
      />
    </div>
  );
};

export default Card;
