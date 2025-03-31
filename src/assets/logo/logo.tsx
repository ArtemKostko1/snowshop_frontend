import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Logo: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 350 145"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "350px", height: "150px" }} // Увеличиваем размер логотипа
  >
    {/* Горы */}
    <g
      transform="matrix(1.4893617021276595,0,0,1.4893617021276595,100.53191489361703,-41.702127659574465)"
      fill="#00adb5"
    >
      <path d="M65.9670617,73 L45.369746,56.6092715 L39.1533369,51.8410596 L41.8648371,63.4635762 L34.6341698,61.6754967 L23.5161375,67.2695039 L16.2562235,62.8675497 L3,71.2119205 L18.4440966,53.9725516 L23.5161375,61.9735099 L37.9182291,45.7706932 L45.369746,53.9725516 L51.5062894,45.7706932 L60.83634,28 L67.5364435,35.4562349 L74.4870181,47.6347519 L80.3730903,42.2911169 C91.3589883,56.6158535 96.9008502,64.1780647 96.9986759,64.9777505 C97.0965015,65.7774363 91.7739269,60.7031751 81.0309521,49.7549669 L79.8258408,64.9777505 L68.678562,51.8410596 L60.83634,36.9403974 L57.5312831,47.6347519 L67.5364435,60.1854305 L55.1210607,55.7152318 L65.9670617,73 Z"></path>
    </g>

    {/* Текст SnowShop */}
    <text
      x="50%"
      y="115"
      textAnchor="middle"
      fontSize="50"
      fontWeight="bold"
      fill="#393e46"
      fontFamily="Arial, sans-serif"
    >
      SNOWSHOP
    </text>

    {/* Текст Ski Inventory */}
    <text
      x="50%"
      y="145"
      textAnchor="middle"
      fontSize="25"
      fill="#00adb5"
      fontFamily="Arial, sans-serif"
    >
      SKI INVENTORY
    </text>
  </SvgIcon>
);

export default Logo;