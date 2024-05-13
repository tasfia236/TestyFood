import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {

    const { _id, food_name, food_image, food_quantity, donator_image, donator_name, pickup_location, expired_datetime } = food;

    return (
        <div className="card lg:card-side h-[98%] lg:h-[300px] bg-base-100 shadow-xl ">
            <figure className="h-[300px] lg:w-[45%]"><img className="w-full lg:h-full h-[350px]" src={food_image} alt="Album" /></figure>
            <div className="card-body sm:h-[30%]">
                <h2 className="card-title text-red-400 font-black">{food_name}</h2>
                <div className="">
                    <p><span className="font-bold">Quantity:</span> {food_quantity}</p>
                    <div className='flex items-center gap-4'>
                        <div><p className="font-bold">Donator: </p></div>

                        <div><img className="w-10 h-10 btn-circle" src={donator_image} alt="" /></div>
                        <div>{donator_name}</div>
                    </div>
                </div>


                <div>
                    <p className="font-bold">Pickup Location:</p>
                    <p>{pickup_location}</p>
                </div>

                <div>
                    <p className="font-bold">Expired Date/Time:</p>
                    <p>{expired_datetime}</p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-accent btn-sm">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;