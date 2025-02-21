import { Route, Routes } from "react-router-dom";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

function Approutes(){
    return(<Routes>
           <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Art />} />
        </Routes>)

}

export default Approutes;