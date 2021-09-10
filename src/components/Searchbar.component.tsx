
import { KeyboardEventHandler } from "react";
import { useTheme } from "../context/Theme.context";
import style from "../style/Searchbar.module.scss";


interface SearchbarProps{
    children?: string;
    onKeyUpCapture?: KeyboardEventHandler<HTMLInputElement>;

}

const SearchbarComponent : React.FC<SearchbarProps> = ({children, onKeyUpCapture}) => {

    const [darkMode] = useTheme();

    return (
        <div className={style.Searchbar_container} color={darkMode ? "Dark Mode" : "Light Mode"}>
        <span></span>
        <input type="search" placeholder={children} onKeyUpCapture={onKeyUpCapture} />
        </div>
    )
}

export default SearchbarComponent;