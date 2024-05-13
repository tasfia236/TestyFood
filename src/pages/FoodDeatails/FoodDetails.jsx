
import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const [remove, setRemove] = useState([]);
    const [currentDate, setCurrentDate] = useState(getDate());
    const food = useLoaderData();

    //  const email = user?.email;

    //  console.log(food);
    const { _id, email, food_name, food_image, food_quantity, donator_email, donator_name, pickup_location, expired_datetime, additional_notes, intStatus } = food;

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const additional_notes = from.additional_notes.value;
    //    const intStatus = 1;
        const data = { additional_notes }
        console.log(data);


        fetch(`http://localhost:8000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    const handlerequestfood = () => {
        console.log(food);
        const email = user?.email
        const reqdata = { food, email, currentDate }
        console.log(reqdata);

        axios.post('http://localhost:8000/requestfoodadd', reqdata)
            .then(res => {
                const data = res.data;
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Food Requested Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    // const handleStateNotAvailable = (id) => {
    //     fetch(`http://localhost:8000/removestatusfoods/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 1 })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //            console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = remove.filter(remove => remove._id !== id);
    //                 const updated = remove.find(remove => remove._id === id);
    //                 updated.status = 1
    //                 const reqFoods = [updated, ...remaining];
    //                 setRemove(reqFoods);
    //             }
    //          })
    // }

    return (
        <div className="mx-8 lg:mx-24 mb-12">
            <Helmet>
                <title>Testy Foos | Food Details</title>
            </Helmet>

            <h2 className="text-4xl font-bold text-center pt-8 mb-12">Food Details</h2>
            <div className="flex justify-evenly py-5">
                <p className="text-xl"><span className="font-bold">Donar Name: </span>  {donator_name}</p>
                <p className="text-xl"><span className="font-bold">Location: </span>  {pickup_location}</p>
            </div>
            <div className="m-3 p-2 flex flex-col lg:flex-row justify-center items-center">
                <div className="w-[40%] mx-auto">
                    <img className="w-full h-full lg:h-[380px] btn-circle border-3 p-5" src={food_image} alt="" />
                </div>
                <div className="lg:w-[55%] px-24">
                    <h1 className="py-5 font-bold text-2xl text-red-500 sm:text-4xl">{food_name} </h1>
                    <p className="pb-3 text-xl">{additional_notes}</p>
                    <p className="font-medium text-base sm:text-xl"><span className="font-bold">Quantity: </span>{food_quantity}</p>
                    <p className="py-3 font-medium text-base sm:text-xl"><span className="font-bold">Expired Date: </span> {expired_datetime} </p>

                    <div>
                        <label htmlFor="my_modal_7" className="btn">Request</label>
                    </div>

                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-xl font-bold">{email}</h3>
                        <p><span className="font-bold">{food_name} </span>Requested Form.</p>
                        <p><span className="font-bold">Date: </span>{currentDate}</p>
                        <img className="w-20 pt-4" src={food_image} alt="" />
                        <p className="font-bold">Food Id: {_id}</p>
                        <textarea className="border-2 border-black px-2 w-96" name="additional_notes" defaultValue={additional_notes} />

                        <p><span className="font-bold">Expire Date:</span> {expired_datetime}</p>
                        <hr />
                        <div className="">
                            <p><span className="font-bold">Donator Name: </span>{donator_name}</p>
                            <p><span className="font-bold">Donator Email: </span>{donator_email}</p>
                        </div>
                        <p><span className="font-bold">PickUp Location: </span>{pickup_location}</p>
                        <div>
                        <button onClick={handlerequestfood} className="btn btn-sm btn-success text-white">Request</button>
                        
                            {/* <button onClick={() => { handlerequestfood(); handleStateNotAvailable() }} className="btn btn-sm btn-success text-white">Request</button> */}
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default FoodDetails;