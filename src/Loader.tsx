import { ReactElement, useEffect, useState } from "react";
import "./style/Loader.scss";

interface LoaderProps{
    loading?: boolean;
    log : string[];
    delay: number
}

const Loader : React.FC<LoaderProps> = ({log, delay, loading = false}) : ReactElement | null => {

//Lazy-Suspense loader components
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/

    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        const time = setTimeout(() => {
            setLoad(true)
        }, delay);

        return () => {
            clearTimeout(time);
        }
    }, [delay]);


    const totalDuration = delay/log.length;

    return !loading ? (
        <div className="Loader-main">
            <span className="Loader-bar">
                <span className="Loader-spinner-1" />
                <span className="Loader-spinner-2" />
            </span>

            <span className="Loader-log">
                {log.map((x, i) => <li key={i} className="fade-in" style={{animationDelay:`${i*totalDuration}ms`, animationDuration:`${totalDuration}ms`}}>{x}...</li>)}
                {
                    load && (
                        <li className="fade-in" style={{animationDelay:`${log.length *totalDuration}ms`, animationDuration:`${2*log.length*totalDuration}ms`}}>Hang on, connection seems slow...</li>
                    )
                }
            </span>
        </div>
    )
    :
    null
    
}

export default Loader;
