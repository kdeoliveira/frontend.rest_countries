import { ReactNode } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { useTheme } from "../context/Theme.context";
import CountryService, { Currency, Flag } from "../service/country.service";
import style from "../style/Detail.module.scss";

import logo from "../logo.svg";
import SwitchButtonElement from "./SwitchButton.element";
import { useQuery } from "react-query";

interface DetailProps {
    children?: ReactNode;
    data?: Flag;
}



const DetailComponent: React.FC<DetailProps> = ({ children }) => {
    const [darkMode] = useTheme();

    const { countryID } = useParams<any>();

    const history = useHistory();

    const { data, isLoading } = useQuery(["flag_detail", countryID], () => CountryService.getFlagByName(countryID));

    if (!data) return <div>Country does not exists</div>;
    if (isLoading) return null;

    return (
        <div className={style.Detail_container} color={darkMode ? "Dark Mode" : "Light Mode"}>
            <div className={style.Detail_back}>
                <SwitchButtonElement className="btn" onClick={() => history.goBack()} color={darkMode ? "Dark Mode" : "Light Mode"}>
                    Back
                </SwitchButtonElement>
            </div>
            <div className={style.Detail_info} color={darkMode ? "Dark Mode" : "Light Mode"}>
                <div className={style.Detail_flag}>
                    <img src={data.flag} alt={"data.name"} />
                </div>
                <div className={style.Detail_title}>
                    <h1>{data.name}</h1>
                </div>
                <div className={style.Detail_body_1}>
                    <ul>
                        <li><h3>Native Language:</h3> {data.nativeName}</li>
                        <li><h3>Population:</h3>{data.population}</li>
                        <li><h3>Region:</h3> {data.region}</li>
                        <li><h3>Sub Region:</h3> {data.subregion}</li>
                        <li><h3>Capital:</h3> {data.capital}</li>
                    </ul>
                </div>
                <div className={style.Detail_body_2}>
                    <ul>
                        <li><h3>Top Level Domain:</h3>{data.topLevelDomain.flatMap((val) => val)}</li>
                        <li><h3>Currencies:</h3>{data.currencies.flatMap((val) => val.name)}</li>
                        <li><h3>Languages:</h3> {data.languages.flatMap((val, i, arr) => {
                            if (i < arr.length - 1)
                                return val.name.concat(", ")
                            else
                                return val.name
                        })}</li>

                    </ul>
                </div>
                <div className={style.Detail_keyword}>
                    {data.borders.length > 0 && (
                        <>
                            <h3>Border Countries:</h3> {data.borders.map((x) => {
                                return (
                                    <SwitchButtonElement className="btn flat" onClick={() => history.replace(x.toLowerCase())} color={darkMode ? "Dark Mode" : "Light Mode"}>
                                        {x}
                                    </SwitchButtonElement>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailComponent;
