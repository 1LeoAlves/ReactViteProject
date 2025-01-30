import { Route } from "react-router-dom";

export function LinkRoutes(){
    return(
        <>
            <Route path='Home' element="/Home"></Route>
            <Route path='About' element="/About-Me"></Route>
        </>
    )
}