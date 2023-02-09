import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

export type IconNames = "edit" | "powerOff";
type IconProps = {
  name: string;
  color?:string;
  size?: number;
}

export const Icon: React.FC<IconProps>  = ({
  name,
  color,
  size
}) => {
  const icons: {name: IconNames; component: JSX.Element}[] = [
    {
      name: "edit",
      component: <MdModeEditOutline color={color} size={size} />,
    },
    {
      name: "powerOff",
      component: <FaPowerOff color={color} size={size} />,
    },
  ]
  return(
    icons.find((icon)=>{return icon.name === name})!.component
  )
}