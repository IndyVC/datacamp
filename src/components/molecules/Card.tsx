import { Period, Pricing } from "@/types";
import React, { FC, ReactElement, ReactNode } from "react";
import Banner from "./Banner";
import { cl } from "dynamic-class-list";

interface CardProps extends Pricing {
  isFirst: boolean;
  isLast: boolean;
}

const Card: FC<CardProps> = ({
  title,
  description,
  titleColor,
  Banner,
  Button,
  Description,
  Chip,
  isFirst,
  isLast,
}) => {
  console.log({ isFirst, isLast });
  return (
    <div
      className={cl(
        "bg-white h-full rounded lg:rounded-none flex flex-col relative",
        { "rounded-l": isFirst, "rounded-r": isLast }
      )}
    >
      <div className="p-8">
        <h2 className={`font-bold text-lg text-accent-${titleColor}`}>
          {title}
        </h2>
        {Chip}
        <span className="uppercase">{description}</span>
      </div>

      {Banner}
      {Button}
      {Description}
    </div>
  );
};

export default Card;
