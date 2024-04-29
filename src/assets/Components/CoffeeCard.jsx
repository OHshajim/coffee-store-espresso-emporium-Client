import { FaEye, FaPen } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {
    const { _id, name, chef, photo, price } = coffee;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-espresso-emporium-server-navy.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffee(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card lg:card-side bg-[#F5F4F1] shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className=" flex items-center justify-between w-full p-5 md:p-10 ">
                    <div className="space-y-2">
                        <h2 className="card-title py-2">name : <span className="text-[#1B1A1AB3]">{name}</span></h2>
                        <h2 className="card-title py-2">Chef : <span className="text-[#1B1A1AB3]">{chef}</span></h2>
                        <h2 className="card-title py-2">Price :<span className="text-[#1B1A1AB3]">{price}</span></h2>
                    </div>
                    <div className="flex flex-col space-y-2 ">
                        <Link to={`/coffeeDetails/${_id}`}><button
                            className="btn text-2xl text-white bg-[#D2B48C] "><FaEye /></button></Link>

                        <Link to={`/updateCoffee/${_id}`}><button
                            className="btn text-2xl text-white bg-[#3C393B] "><FaPen /></button></Link>

                        <button
                            onClick={handleDelete}
                            className="btn text-2xl text-white bg-[#EA4744] "><FaDeleteLeft /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;