import { useEffect, useRef } from "react";
import { useTheme } from "../context/Theme.context";
import style from '../style/Header.module.scss';
import SwitchButton from './SwitchButton.element';


interface HeaderProps{
    children?:string;
}

const HeaderComponent : React.FC<HeaderProps> = ({children}) => {
    const [darkMode, toggle] = useTheme();
    // const switchBtnRef = useRef<HTMLButtonElement | null>(null);



    console.log(darkMode)

    const mode = darkMode ? "Dark Mode" : "Light Mode";



    return (
        <header className={style.Header_main} color={mode}>
            <div className={style.Header_title}>
                <h1>{children}</h1>
            </div>
            <div>
            <SwitchButton className={style.Theme_icon} onClick={() => toggle()} color={mode}>
            <h3>{mode}</h3>
            </SwitchButton>
            </div>
        </header>
    )
}

export default HeaderComponent;