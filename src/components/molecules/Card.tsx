import { Period, Pricing } from "@/types";
import React, { FC, ReactElement, ReactNode } from "react";
import Banner from "./Banner";
import { cl } from "dynamic-class-list";
import Chip from "../atoms/Chip";
import Button from "../atoms/Button";
import Description from "./Description";
import Tag from "../atoms/Tag";

interface CardProps {
  pricing: Pricing;
  isFirst: boolean;
  isLast: boolean;
}

const Card: FC<CardProps> = ({ pricing, isFirst, isLast }) => {
  const {
    title,
    titleColor,
    isMostPopular,
    hasChip,
    description,
    descriptions,
    buttonText,
    buttonType,
    suffix,
    prefix,
  } = pricing;
  return (
    <div
      className={cl(
        "bg-white text-dark h-full rounded lg:rounded-none flex flex-col relative",
        {
          "rounded-l": isFirst,
          "rounded-r": isLast,
          rounded: isMostPopular,
          "shadow-2xl": isMostPopular,
          "z-10": isMostPopular,
          "border-t-8": isMostPopular,
          "border-accent-green": isMostPopular,
          "lg:scale-[1.02]": isMostPopular,
          "border-l-[1px]": isLast,
        }
      )}
    >
      <div className="p-8" data-is={isMostPopular}>
        <h2 className={`font-bold text-lg text-accent-${titleColor}`}>
          {title}
        </h2>
        {isMostPopular ? <Tag /> : null}
        {hasChip ? <Chip text="Best Value" /> : null}
        <span className="uppercase">{description}</span>
      </div>

      <Banner pricing={pricing} />
      <Button text={buttonText} type={buttonType} />
      <Description
        descriptions={descriptions}
        suffix={suffix}
        prefix={prefix}
      />
    </div>
  );
};

export default Card;
