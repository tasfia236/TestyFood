import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import RequestTable from "./RequestTable";

const RequestFood = () => {

    const { user, loading } = useContext(AuthContext);
    const [request, setRequest] = useState([]);
    

    const url = `http://localhost:8000/requestfoods?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setRequest(res.data);
            })
    }, [url]);
    
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
                            ></RequestTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestFood;