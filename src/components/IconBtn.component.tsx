import React, { useState } from "react";
import { ReactNode } from "react";
import style from "../style/Component.module.scss";
import SwitchButton from "./SwitchButton.element";

interface IconBtnProps{
    children?: ReactNode;
    color: string;
    icon?: string;

}

const IconBtn : React.FC<IconBtnProps> = ({children, color, icon}) => {


    return (
        <SwitchButton className={style.Theme_icon}>
            <span className={style.Inline_icon}><img src={icon} alt={children && typeof children === "string" ? children : "header icon"} /></span>
            {children}
        </SwitchButton>
    )
}

export default IconBtn;