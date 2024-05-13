
const RequestTable = ({request}) => {

    const { _id, donator_name, pickup_location, expired_datetime } = request.food;
    const { currentDate } = request
    console.log(request);

    return (

        <tr>
            <td>
                {donator_name}
            </td>
            <td>
                {pickup_location}
            </td>
            <td>{expired_datetime}</td>
            <td>{currentDate}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default RequestTable;