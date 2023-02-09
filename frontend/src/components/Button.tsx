import React, { Children } from "react";
import { Icon, IconNames } from "./Icon";

type ButtonProps = {
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  onClick: ()=>void;
  width: string;
  frontIcon?: IconNames;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  backgroundColor,
  children,
  onClick,
  width,
  frontIcon
}) => {
  return(
    <button
    onClick={onClick}
    style={{
      color: color,
      backgroundColor: backgroundColor,
      width,
    }}
    >
    {
      frontIcon && (
      <Icon
        name={frontIcon}
        color={color}
      />
      )
    }
    {children}
    </button>
  )
}