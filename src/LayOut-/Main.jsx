import { Outlet } from "react-router-dom";
import Footer from "../components-/Footer";
import Navbar1 from "../components-/Navbar1";
import Rmstu from "../components-/Rmstu";
import Nabvar2 from "../components-/Nabvar2";




const Main = () => {
    
    return (
        <div className="poppins">
            <Nabvar2></Nabvar2>
            <Rmstu></Rmstu>
          <Navbar1></Navbar1>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;