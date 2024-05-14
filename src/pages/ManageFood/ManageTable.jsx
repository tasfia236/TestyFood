import { Link } from "react-router-dom";

const ManageTable = ({ added, handleDelete }) => {

    const { _id, food_image, food_name, food_quantity, pickup_location, intStatus } = added;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {food_image && <img src={food_image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {food_name}
            </td>
            <td>{food_quantity}</td>
            <td>{pickup_location}</td>
            <th>
                {
                    intStatus === 0 ? <span className="font-bold text-primary">Available</span> 
                    : <button className="btn btn-ghost btn-xs">Not Available</button>
            
                }
            </th>
            <th>
                <Link to={`/updatefood/${_id}`}><button className="btn btn-sm">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default ManageTable;