import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch(`https://coffee-store-espresso-emporium-server-navy.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Successfully Updated ',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className='max-w-[1600px] mx-auto my-20'>
            <Link to="/"><button className='flex btn bg-transparent shadow-none border-none text-3xl my-7 gap-4'><BiArrowBack /> Back to Home</button></Link>
            <div className="p-24 bg-[#F4F3F0] ">
                <h1 className="text-3xl font-extrabold text-center">Update Coffee </h1>
                <p className="text-lg text-[#1B1A1AB3]  text-center my-10"> Update yor coffee as you want !!!
                </p>

                <form className="space-y-5 " onSubmit={handleUpdate}>
                    <div className="w-full md:flex gap-5">
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Name</label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee name " className="w-full input " />
                        </div>
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Chef</label>
                            <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee chef" className="w-full input" />
                        </div>
                    </div>
                    <div className="w-full md:flex gap-5">
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Supplier</label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee supplier " className="w-full input " />
                        </div>
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Taste</label>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee taste" className="w-full input" />
                        </div>
                    </div>
                    <div className="w-full md:flex gap-5">
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Category</label>
                            <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee category " className="w-full input " />
                        </div>
                        <div className="form-control md:w-1/2 space-y-2">
                            <label className="text-xl font-semibold">Details</label>
                            <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee details" className="w-full input" />
                        </div>
                    </div>
                    <div className="w-full md:flex gap-5">
                        <div className="form-control w-full space-y-2">
                            <label className="text-xl font-semibold">Photo</label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="w-full input" />
                        </div>
                    </div>

                    <input type="submit" value="Update Coffee" className="btn w-full mt-2 bg-[#D2B48C] border-2 border-[#331A15]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;