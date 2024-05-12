import { Link } from "react-router-dom";


const Features = ({ food }) => {

    const { _id,food_name, food_image, food_quantity, donator_image, donator_name, pickup_location, expired_datetime, additional_notes } = food;
    
    return (
        <div className="card lg:card-side h-[98%] lg:h-[300px] bg-base-100 shadow-xl ">
            <figure className="h-[300px] lg:w-[45%]"><img className="w-full lg:h-full h-[350px]" src={food_image} alt="Album" /></figure>
            <div className="card-body sm:h-[30%]">
                <h2 className="card-title text-red-400 font-black">{food_name}</h2>
                <div className="">
                    <p><span className="font-bold">Quantity:</span> {food_quantity}</p>
                    <p className="font-bold">Donator: </p>
                    <div className='flex gap-4'>

                        <div>{donator_image}</div>
                        <div>{donator_name}</div>
                    </div>
                </div>

                <p><span className="font-bold">Pickup Location:</span>{pickup_location}</p>
                <p><span className="font-bold">Expired Date/Time:</span>{expired_datetime}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-accent btn-sm">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Features;