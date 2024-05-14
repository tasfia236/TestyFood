
const RequestTable = ({request, handleReqFoodDelete}) => {

    const { food_name, donator_name, pickup_location, expired_datetime } = request.food;
    const { _id, currentDate } = request
    console.log(request);

    return (

        <tr>
            <td>
                {food_name}
            </td>
            <td>
                {donator_name}
            </td>
            <td>
                {pickup_location}
            </td>
            <td>{expired_datetime}</td>
            <td>{currentDate}</td>
            <th>
                <button onClick={() => handleReqFoodDelete(_id)} className="btn btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default RequestTable;