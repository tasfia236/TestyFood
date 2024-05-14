import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ManageTable from "./ManageTable";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const ManageFood = () => {
    const { user, loading } = useContext(AuthContext);
    const [added, setAdded] = useState([]);

    const url = `http://localhost:8000/managefoods?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setAdded(res.data);
            })
    }, [url]);

    const handleDelete = id => {
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
                fetch(`http://localhost:8000/deletefoods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Food has been deleted.",
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

    const handleStatusAvailable = id => {
        fetch(`http://localhost:8000/statusfoods/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 0 })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Available',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    // update state
                    const remaining = added.filter(added => added._id !== id);
                    const updated = added.find(added => added._id === id);
                    updated.status = 0
                    const newFoods = [updated, ...remaining];
                    setAdded(newFoods);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">My Added Foods: {added.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Food Quantity</th>
                            <th>Pickup Location</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            added.map(added => <ManageTable
                                key={added._id}
                                added={added}
                                handleDelete={handleDelete}
                                handleStatusAvailable={handleStatusAvailable}
                            ></ManageTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageFood;