import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home"

function LinkRoutes(){
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route path='*' element={<Home/>}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default LinkRoutes;