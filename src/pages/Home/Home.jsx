import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import Features from "./Features/Features";
import { Link } from "react-router-dom";

const Home = () => {

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
        <div className="bg-image glass pb-8">
            <div className=" max-w-screen-2xl mx-auto">
                <Banner></Banner>
                <h2 className="text-4xl text-center my-12 font-bold text-red-600">Features</h2>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-y-5 mx-12 gap-8">
                    {
                        foods?.slice(0, 6).map(food => <Features key={food._id} food={food}></Features>)
                    }
                </div>
                <div className="flex justify-center pt-5">
                    <Link to='/availablefood'><button className="btn btn-neutral">All Tourist Spots</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;