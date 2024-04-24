import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { RiCupFill } from "react-icons/ri";

const Coffees = () => {
    const coffees = useLoaderData()
    return (
        <div className="max-w-[1600px] mx-auto my-20">
            <p className="text-center">--- Sip & Savor ---</p>
            <h1 className="text-6xl text-center">Our Popular Products</h1>
            <Link to="/addCoffee"><button className="flex btn text-xl text-white bg-[#E3B577] mx-auto my-10">Add Coffee <RiCupFill/></button></Link>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
                }
            </div>
        </div>
    );
};

export default Coffees;