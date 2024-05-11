import { useQuery } from '@tanstack/react-query';
import Features from '../Home/Features/Features';

const AvailableFoods = () => {

    const { isPending, isError, error, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/foods');
            return res.json();
        }
    })
    console.log(foods);

    if (isPending) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div className=' mx-12 lg:mx-24 pb-8'>
            <h2 className="text-4xl text-center my-12 font-bold text-red-600">Features</h2>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-y-5">
                {
                    foods?.map(food => <Features key={food._id} food={food}></Features>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;