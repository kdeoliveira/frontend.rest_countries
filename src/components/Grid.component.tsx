import { ReactNode } from "react";
import style from "../style/Grid.module.css";
import FlagComponent from "./Flag.component";

interface GridProps{
    children?: ReactNode;

}

const GridComponent : React.FC<GridProps> = () => {


    return (
        <div className={style.Grid_body}>
        <div className={style.Grid_container}>
            <div className={style.Grid_search}>
                Search...
            </div>
            <div className={style.Grid_filter}>
                Filter...
            </div>
            {Array(10).fill(<FlagComponent>Teste</FlagComponent>)}
            
        </div>
        </div>
    )
}

export default GridComponent;