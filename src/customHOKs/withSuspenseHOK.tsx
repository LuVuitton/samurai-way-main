import React, {Suspense} from "react";
import {Preloader} from "../components/Other/Preloader";

export const withSuspenseHOK = (Component:any)=> {
   return (props:any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}