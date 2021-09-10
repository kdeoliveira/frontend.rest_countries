import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

interface SwitchButtonProps{
    children?: ReactNode;
    className?:string;
    onClick?: Function;
    color?:string;
}

const SwitchButton  = React.forwardRef<HTMLButtonElement, SwitchButtonProps>(({children, className, onClick, color}, ref) => {

    
    return (
    

    <button ref={ref} className={className} role="switch" aria-checked={false} color={color} onClick={(e) => {
        e.currentTarget.ariaChecked = e.currentTarget.ariaChecked === "false" ? "true" : "false";
        if(onClick) onClick();
    }}>{children}</button>
    
    
    )
})

export default React.memo(SwitchButton);