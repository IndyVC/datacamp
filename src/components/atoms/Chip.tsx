import React, { FC } from "react";

interface ChipProps {
  text: string;
}
const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <span className="p-1 bg-accent-yellow text-xs font-semibold rounded-l absolute top right-0">
      {text}
    </span>
  );
};

export default Chip;
