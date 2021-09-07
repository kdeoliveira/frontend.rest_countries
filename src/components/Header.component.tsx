import { ReactNode } from "react";
import style from '../style/Header.module.css';

interface HeaderProps{
    children?:ReactNode;
    title: string
}

const HeaderComponent : React.FC<HeaderProps> = ({children, title}) => {

    return (
        <header className={style.Header_main}>
            <div className={style.Header_title}>
                {title}
            </div>
            <div>
                {children}
            </div>
        </header>
    )
}

export default HeaderComponent;