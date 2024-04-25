import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const Coffee = useLoaderData()
    const { name, chef, photo, price } = coffee;

    return (
        <div className='max-w-[1600px] mx-auto my-20'>
            <Link to="/"><button className='flex btn bg-transparent shadow-none border-none text-3xl my-7 gap-4'><BiArrowBack /> Back to Home</button></Link>
            <div className="card lg:card-side bg-[#F5F4F1] shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className=" flex items-center justify-between w-full p-5 md:p-10 ">
                    <div className="space-y-2">
                        <h2 className="card-title py-2">name : <span className="text-[#1B1A1AB3]">{name}</span></h2>
                        <h2 className="card-title py-2">Chef : <span className="text-[#1B1A1AB3]">{chef}</span></h2>
                        <h2 className="card-title py-2">Price :<span className="text-[#1B1A1AB3]">{price}</span></h2>
                    </div>
                    <div className="flex flex-col space-y-2 ">
                        <Link to="/coffeeDetails"><button className="btn text-2xl text-white bg-[#D2B48C] "><FaEye /></button></Link>
                        <button className="btn text-2xl text-white bg-[#3C393B] "><FaPen /></button>
                        <button className="btn text-2xl text-white bg-[#EA4744] "><FaDeleteLeft /></button>
                    </div>
                </div>
            </div>        </div>
    );
};

export default CoffeeDetails;