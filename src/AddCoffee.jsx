
const AddCoffee = () => {
    const handleAdd = e=>{
        e.preventDefault();
        const form = e.target ;
        const name = form.name.value ;
        const chef = form.chef.value ;
        const supplier = form.supplier.value ;
        const taste = form.taste.value ;
        const category = form.category.value ;
        const details = form.details.value ;
        const photo = form.photo.value ;
        const newCoffee = {name,chef,supplier,taste,category,details,photo};
        console.log(newCoffee);
    }
    return (
        <div className="p-24 bg-[#F4F3F0]">
            <h1 className="text-3xl font-extrabold text-center">Add New Coffee</h1>
            <p className="text-lg text-[#1B1A1AB3]  text-center my-10">
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>

            <form className="space-y-5 " onSubmit={handleAdd}>
                <div className="w-full md:flex gap-5">
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Name</label>
                        <input type="text" name="name" placeholder="Enter Coffee name " className="w-full input " />
                    </div>
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Chef</label>
                        <input type="text" name="chef" placeholder="Enter Coffee chef" className="w-full input" />
                    </div>
                </div>
                <div className="w-full md:flex gap-5">
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter Coffee supplier " className="w-full input " />
                    </div>
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Taste</label>
                        <input type="text" name="taste" placeholder="Enter Coffee taste" className="w-full input" />
                    </div>
                </div>
                <div className="w-full md:flex gap-5">
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Category</label>
                        <input type="text" name="category" placeholder="Enter Coffee category " className="w-full input " />
                    </div>
                    <div className="form-control md:w-1/2 space-y-2">
                        <label className="text-xl font-semibold">Details</label>
                        <input type="text" name="details" placeholder="Enter Coffee details" className="w-full input" />
                    </div>
                </div>
                <div className="w-full md:flex gap-5">
                    <div className="form-control w-full space-y-2">
                        <label className="text-xl font-semibold">Photo</label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="w-full input" />
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn w-full mt-2 bg-[#D2B48C] border-2 border-[#331A15]" />
            </form>
        </div>
    );
};

export default AddCoffee;