
import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import CountryService, { Flag } from "../service/country.service";
import style from "../style/Grid.module.scss";
import DropdownComponent from "./Dropdown.component";
import FlagComponent from "./Flag.component";
import SearchbarComponent from "./Searchbar.component";

interface GridProps {
    children?: ReactNode;
    rightGrid?: ReactNode;
    leftGrid?: ReactNode;
}

const GridComponent: React.FC<GridProps> = ({ children, leftGrid, rightGrid }) => {
    const [n, setN] = useState<number>(20);

    const history = useHistory();

    const queryClient = useQueryClient();

    const [searchInput, setSearchInput] = useState<string>("");

    const { isLoading, data, error } = useQuery("flags", () => CountryService.getFlags());

    const [flags, setFlags] = useState<Flag[]>([])

    useEffect(() => {

        if(data){
            if(Boolean(searchInput)){
                setFlags(data.filter((x) => x.name.toLowerCase().includes(searchInput)))
            }else{
                setFlags(data);
            }
        }
        
        
    }, [searchInput, data])


    const _handleOnKeyPress = (event : KeyboardEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value);
    }

    if(isLoading)   return null;
    if(error)       return <div>Error encountered while fetching data</div>

    return (
        <div className={style.Grid_body}>
            <div className={style.Grid_container}>
                <div className={style.Grid_search}>
                    {leftGrid || (
                        <SearchbarComponent onKeyUpCapture={_handleOnKeyPress}> Search for a country...</SearchbarComponent>
                    )}
                </div>
                
                <div className={style.Grid_filter}>
                    {rightGrid || (
                        <DropdownComponent values={["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]} onClick={async (name) => {
                                    setFlags(
                                        await queryClient.fetchQuery(["flags", name], () => CountryService.getFlagsByRegion(name))
                                    );
    
                            
                        }}>Filter by Region</DropdownComponent>
                    )}
                </div>
                
                {flags.length > 0 && flags.map((x, i) => {
                    if(i < n)
                        return <FlagComponent data={x} key={x.alpha3Code} onClick={() => history.push(`country/${x.alpha3Code.toLowerCase()}`)}/>
                    return null;
                })}


            </div>
            {n <= flags.length && <span className={style.Grid_loadmore} onClick={() => setN(x => x*2)}>Load More</span>}
        </div>
    )
}

export default GridComponent;