import { useLoaderData } from "react-router-dom";

const Coffees = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <h1>Coffee : {coffees.length}</h1>
        </div>
    );
};

export default Coffees;