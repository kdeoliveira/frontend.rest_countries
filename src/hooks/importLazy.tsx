import React from "react";

export const importLazy = (ms?: number) => (component: string) => {
    // const str = path.join("..", file);

    

    return React.lazy(() => new Promise(resolve => setTimeout(resolve, ms ? ms : 0)).then(() => import(`../components/${component}.component`)).catch(() => Promise.reject(new Error(`Unable to load ${component}`))))
};