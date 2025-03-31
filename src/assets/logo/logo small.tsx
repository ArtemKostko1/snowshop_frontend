import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface LogoSmallProps extends SvgIconProps {
  iconColor?: string; // Цвет иконки (горы)
  nameColor?: string; // Цвет наименования
  sloganColor?: string; // Цвет наименования
}

const LogoSmall: React.FC<LogoSmallProps> = ({ iconColor = "#00adb5", nameColor = "#ffffff", sloganColor = "#cceff0", ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 300 56"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "270px", height: "50px", overflow: "visible" }}
  >
    {/* Горы */}
    <g
      transform="matrix(1.0638297872340425,0,0,1.0638297872340425,-3.1914893617021276,-24.78723404255319)"
      fill={iconColor} // Используем цвет из пропсов
    >
      <title>Mountains</title>
      <desc>Created with Sketch.</desc>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill={iconColor}>
          <path d="M65.9670617,73 L45.369746,56.6092715 L39.1533369,51.8410596 L41.8648371,63.4635762 L34.6341698,61.6754967 L23.5161375,67.2695039 L16.2562235,62.8675497 L3,71.2119205 L18.4440966,53.9725516 L23.5161375,61.9735099 L37.9182291,45.7706932 L45.369746,53.9725516 L51.5062894,45.7706932 L60.83634,28 L67.5364435,35.4562349 L74.4870181,47.6347519 L80.3730903,42.2911169 C91.3589883,56.6158535 96.9008502,64.1780647 96.9986759,64.9777505 C97.0965015,65.7774363 91.7739269,60.7031751 81.0309521,49.7549669 L79.8258408,64.9777505 L68.678562,51.8410596 L60.83634,36.9403974 L57.5312831,47.6347519 L67.5364435,60.1854305 L55.1210607,55.7152318 L65.9670617,73 Z"></path>
        </g>
      </g>
    </g>

    {/* Название */}
    <g
      transform="matrix(0.9141260482962519,0,0,0.9141260482962519,117.38806782074336,-10.446629404294898)"
      fill={nameColor} // Используем цвет текста из пропсов
    >
      <text
        x="25%"
        y="45"
        textAnchor="middle"
        fontSize="30"
        fontWeight="bold"
        style={{ whiteSpace: "pre", overflow: "visible" }}
      >
        SNOWSHOP
      </text>
    </g>

    {/* Слоган */}
    <g
      transform="matrix(0.9938788702544183,0,0,0.9938788702544183,121.1513858795072,30.824195239205558)"
      fill={sloganColor} // Используем цвет текста из пропсов
    >
      <text
        x="22%"
        y="15"
        textAnchor="middle"
        fontSize="16"
        style={{ whiteSpace: "pre", overflow: "visible" }}
      >
        SKI INVENTORY
      </text>
    </g>
  </SvgIcon>
);

export default LogoSmall;