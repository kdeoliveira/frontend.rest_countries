import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { useTheme } from "../context/Theme.context";
import { Flag } from "../service/country.service";
import style from "../style/Flag.module.scss";
import logo from "../logo.svg";

interface FlagProps {
    children?: ReactNode;
    data: Flag
}


function delay(ms: number) {
    return new Promise((resolve) => {
       setTimeout(resolve, ms);
    })
 }

const FlagComponent: React.FC<FlagProps> = ({ children, data }) => {

    const [darkMode] = useTheme();


    return <div className={style.Flag_container} color={darkMode ? "Dark Mode" : "Light Mode"}>
            
                <div className={style.Flag_svg}>
                    {
                     navigator.connection &&  (navigator.connection as any).downlink <= 0.5 ? 
                         <img src={logo} alt="unable to load" /> : <img src={data.flag} alt={data.name}/>
                     
                    }
                    
                </div>
                <div>
                    <h2>{data.name}</h2>
                </div>
                <div>
                    <ul>
                        <li><h3>Population:</h3> {data.population}</li>
                        <li><h3>Region:</h3>{data.region}</li>
                        <li><h3>Capital:</h3> {data.capital}</li>
                    </ul>
                </div>
            
        </div>
}

export default FlagComponent;