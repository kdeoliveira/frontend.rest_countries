import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/Theme.context";
import style from "../style/Dropdown.module.scss";
import SwitchButton from "./SwitchButton.element";

interface DropdownProps {
    children?: string;
    values?: string[];
    onClick?: (name: string) => void;
}


const DropdownComponent: React.FC<DropdownProps> = ({ children, values, onClick }) => {
    const [darkMode] = useTheme();

    const [select, setSelect] = useState("");

    const switchRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (onClick && Boolean(select)) {
            onClick(select);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select])

    return (
        <div className={style.Dropdown_container} color={darkMode ? "Dark Mode" : "Light Mode"}>
            <SwitchButton ref={switchRef}>
                <h3>{select || children}</h3>
            </SwitchButton>
            <div color={darkMode ? "Dark Mode" : "Light Mode"} onClick={() => {
                if(switchRef.current){
                    switchRef.current.ariaChecked = switchRef.current.ariaChecked === "true" ? "false" : "true";
                }
            }
            }>
            {values && values.map((x, i) => <a href="/#" key={i} onClick={(e) => {
                e.preventDefault();
                setSelect(x);
            }}>{x}</a>)}
            
            {/* <a href="/#" onClick={(e) => {
                e.preventDefault();
                setSelect("all");
            }}>{children}</a> */}
        </div>
        </div >
    )
}

export default DropdownComponent;