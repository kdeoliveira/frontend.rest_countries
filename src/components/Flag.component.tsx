import { ReactNode } from "react";
import style from "../style/Flag.module.css";

interface FlagProps{
    children?: ReactNode;
}

const FlagComponent : React.FC<FlagProps> = ({children}) => {

    return (    
        <div className={style.Flag_container}>
            <div className={style.Flag_body}>
            <img src={""} alt=""/>
            <span></span>
            <span>{children}</span>
            </div>
        </div>
    )
}

export default FlagComponent;