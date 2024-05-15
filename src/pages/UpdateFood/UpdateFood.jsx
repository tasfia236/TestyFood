import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const food = useLoaderData();
    const { _id, food_name, food_image, food_quantity, additional_notes, pickup_location, expired_datetime, donator_name, donator_email, donator_image, intStatus } = food;
    
    const handleUpdateFood = e => {
        e.preventDefault();
        const from = e.target;
        const food_image = from.image.value;
        const food_name = from.food_name.value;
        const food_quantity = from.food_quantity.value;
        const pickup_location = from.location.value;
        const additional_notes = from.additional_notes.value;
        const expired_datetime = from.expired.value;
        const donator_name = from.donator_name.value;
        const donator_email = from.donator_email.value;
        const donator_image = from.donatorimage.value;
        const status = from.status.value;
    //    const intStatus = JSON.parse(status);

        const UpdateFood = { food_image, food_name, food_quantity, pickup_location, additional_notes, expired_datetime, donator_name, donator_email, donator_image, status };
        console.log(UpdateFood);

        fetch(`https://testy-food-server-ten.vercel.app/updatefoods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(UpdateFood);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate(location?.state ? location.state : '/managefood')
                }
            })
        }

    return (

        <div className="p-12 min-h-screen bg-base-200">
            <Helmet>
                <title>Testy Food | Update Food</title>
            </Helmet>
            <div className="">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold">Update Food!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="image" className="block mb-2">Food Image URL:</label>
                                <input type="text" id="image" name="image" defaultValue={food_image} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="food_name" className="block mb-2">Food Name:</label>
                                <input type="text" id="food_name" name="food_name" defaultValue={food_name} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="food_quantity" className="block mb-2">Food Quantity:</label>
                                <input type="text" id="food_quantity" name="food_quantity" defaultValue={food_quantity} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2">Pickup Location:</label>
                                <input type="text" id="location" name="location" defaultValue={pickup_location} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="status" className="block mb-2">Status:</label>
                                <select id="status" name="status" defaultValue={intStatus} className="w-full px-3 py-2 border rounded-md">
                                    <option value="0">Available</option>
                                    <option value="1">Not Available</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="expired" className="block mb-2">Expired Date/Time:</label>
                                <input type="text" id="expired" name="expired" defaultValue={expired_datetime} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="donator_name" className="block mb-2">Donator Name:</label>
                                <input type="text" id="donator_name" name="donator_name" defaultValue={donator_name} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="donator_email" className="block mb-2">Donator Email:</label>
                                <input type="text" id="donator_email" name="donator_email" defaultValue={donator_email} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="donatorimage" className="block mb-2">Donator image URL:</label>
                                <input type="text" id="donatorimage" name="donatorimage" defaultValue={donator_image} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="additional_notes" className="block mb-2">Additional Notes:</label>
                                <textarea type="text" id="additional_notes" name="additional_notes" defaultValue={additional_notes} className=" w-full px-3 py-2 border rounded-md" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;