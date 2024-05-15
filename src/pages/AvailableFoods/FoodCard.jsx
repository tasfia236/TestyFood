import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {

    const { _id, food_name, food_image, food_quantity, donator_image, donator_name, pickup_location, expired_datetime } = food;

    return (
        <div className="card lg:card-side h-full bg-base-100 shadow-xl ">
            <figure className="h-[380px] lg:w-[45%]">
                <img className="w-full h-full" src={food_image} alt="Album" />
            </figure>
            <div className="card-body sm:h-[30%]">
                <h2 className="card-title text-red-400 font-black flex-grow">{food_name}</h2>
                <div className="">
                    <p><span className="font-bold">Quantity:</span> {food_quantity}</p>
                    <div className='flex flex-col lg:flex-row'>
                        <div><p className="font-bold">Donator: </p></div>
                        <div className="flex gap-2">
                            <div><img className="w-8 h-8 btn-circle" src={donator_image} alt="" /></div>
                            <div>{donator_name}</div>
                        </div>
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