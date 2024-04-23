import { Outlet } from "react-router-dom";
import Nav from "./assets/Components/Nav";
import Footer from "./assets/Components/Footer";

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;