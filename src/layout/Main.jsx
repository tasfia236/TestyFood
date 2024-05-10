import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl">
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;