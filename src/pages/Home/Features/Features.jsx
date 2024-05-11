

const Features = ({food}) => {

    const { food_name, food_image, food_quantity, donator_image, donator_name, pickup_location, expired_datetime, additional_notes} = food;

    return (
        <div className="card ml-5 rounded-xl w-[90%] h-96 lg:card-side bg-base-100 shadow-xl">
            <figure className="w-[50%]"><img className="h-full" src={food_image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p>{food_quantity}{donator_name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Features;