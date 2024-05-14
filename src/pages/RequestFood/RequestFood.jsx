import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import RequestTable from "./RequestTable";
import Swal from "sweetalert2";

const RequestFood = () => {

    const { user, loading } = useContext(AuthContext);
    const [request, setRequest] = useState([]);
    const [added, setAdded] = useState([]);

    const url = `http://localhost:8000/requestfoods?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setRequest(res.data);
            })
    }, [url]);

    
    const handleReqFoodDelete = id => {
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
                fetch(`http://localhost:8000/deletereqfoods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Requested Food has been deleted.",
                                "success"
                            );
                            const remaining = added.filter(added => added._id !== id);
                            setAdded(remaining);
                        }
                    })
            }
        })
    }
    
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return (
        <div>
            <h2 className="text-5xl">My Requested Foods: {request.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Nmae</th>
                            <th>Donar Name</th>
                            <th>PickUp Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map(request => <RequestTable
                                key={request._id}
                                request={request}
                                handleReqFoodDelete={handleReqFoodDelete}
                            ></RequestTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestFood;