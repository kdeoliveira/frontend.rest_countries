import React, { useState } from "react";
import { ReactNode } from "react";
import style from "../style/Component.module.css";

interface IconBtnProps{
    children?: ReactNode;
    color: string;
    icon?: string;

}

const IconBtn = React.forwardRef<HTMLButtonElement, IconBtnProps>(({children, color, icon}, ref) => {

    const [state, setState] = useState<boolean>(false);

    return (
        <button className={style.Theme_icon} role="switch" aria-checked={state} onClick={() => setState(x => !x)}>
            <span className={style.Inline_icon}><img src={icon} alt={children && typeof children === "string" ? children : "header icon"} /></span>
            {children}
        </button>
    )
})

export default IconBtn;