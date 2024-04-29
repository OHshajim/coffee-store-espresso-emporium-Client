import Instagram from "../Instagram";
import Banner from "./Banner";
import Coffees from "./Coffees";
import Tags from "./Tags";

const Home = () => {
    return (
        <div>
            <Banner />
            <Tags />
            <Coffees />
            <Instagram/>
        </div>
    );
};

export default Home;