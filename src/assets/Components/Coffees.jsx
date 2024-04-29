import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { RiCupFill } from "react-icons/ri";
import { useState } from "react";

const Coffees = () => {
    const loadCoffees = useLoaderData()
    const [coffees, setCoffee] = useState(loadCoffees)
    return (
        <div>
            <img src="../../../public/more/1.png" alt="" className="absolute z-10"/>
            <div className="max-w-[1600px] mx-auto my-20">
                <p className="text-center">--- Sip & Savor ---</p>
                <h1 className="text-6xl text-center">Our Popular Products</h1>
                <Link to="/addCoffee"><button className="flex btn text-xl text-white bg-[#E3B577] mx-auto my-10">Add Coffee <RiCupFill /></button></Link>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffee={setCoffee} coffee={coffee} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Coffees;