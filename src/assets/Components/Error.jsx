import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Error = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <Link to="/"><button className='flex btn bg-transparent shadow-none border-none text-3xl my-7 gap-4'><BiArrowBack /> Back to Home</button></Link>
                <img src="../../../public/404/404.gif" alt="" />

            </div>
            <Footer/>
        </div>
    );
};

export default Error;