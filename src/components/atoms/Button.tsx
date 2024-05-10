import React, { FC, useMemo } from "react";

interface ButtonProps {
  text: string;
  type: "default" | "primary";
}
const Button: FC<ButtonProps> = ({ text, type }) => {
  const style = useMemo(() => {
    if (type === "default")
      return "bg-transparent border-solid border-2 border-";
    if (type === "primary") return "bg-accent-green";
  }, [type]);

  return (
    <button
      className={`mx-8 font-semibold rounded h-11 ${style} border-dark mt-8 capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
