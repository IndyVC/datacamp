import React, { FC, ReactElement } from "react";
import Check from "../icons/Check";

interface DescriptionProps {
  prefix?: ReactElement;
  suffix?: ReactElement;
  descriptions: string[];
}
const Description: FC<DescriptionProps> = ({
  descriptions,
  prefix,
  suffix,
}) => {
  return (
    <div className="m-8">
      {prefix}
      <ul>
        {descriptions.map((description, i) => (
          <li key={i} className="m-2 flex flex-row gap-1">
            <Check className="w-4 h-4 min-w-4 min-h-4 mt-1" />
            {description}
          </li>
        ))}
      </ul>
      {suffix}
    </div>
  );
};

export default Description;
