import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const { name, chef, photo, supplier, taste, category, details, } = coffee;

    return (
        <div className='max-w-[1600px] mx-auto my-20'>
            <Link to="/"><button className='flex btn bg-transparent shadow-none border-none text-3xl my-7 gap-4'><BiArrowBack /> Back to Home</button></Link>
            <div className="card lg:card-side bg-[#F5F4F1] p-24 gap-20">
                <figure><img src={photo} alt={name} className="flex-1" /></figure>
                <div className="flex-1 p-5 md:p-10 space-y-2">
                    <h1 className="text-4xl text-[#331A15] font-bold">Niceties</h1>
                    <h2 className="text-xl font-semibold ">name : <span className="text-[#1B1A1AB3] font-normal">{name}</span></h2>
                    <h2 className="text-xl font-semibold ">Chef : <span className="text-[#1B1A1AB3] font-normal">{chef}</span></h2>
                    <h2 className="text-xl font-semibold ">supplier : <span className="text-[#1B1A1AB3] font-normal">{supplier}</span></h2>
                    <h2 className="text-xl font-semibold ">taste : <span className="text-[#1B1A1AB3] font-normal">{taste}</span></h2>
                    <h2 className="text-xl font-semibold ">category : <span className="text-[#1B1A1AB3] font-normal">{category}</span></h2>
                    <h2 className="text-xl font-semibold ">details : <span className="text-[#1B1A1AB3] font-normal"> {details}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;