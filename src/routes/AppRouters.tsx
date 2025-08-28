import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Documentation from "../pages/Documentation";



export default function AppRouters() {


    return (

        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                 <Route path="/Documentation" element={<Documentation/>}/>
            </Routes>
        </>
    )
};
