import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FoodCard from './FoodCard';

const AvailableFoods = () => {
    const { isPending, isError, error, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/foods');
            return res.json();
        }
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(foods);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const filteredFoods = foods.filter(food =>
            food.food_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredFoods);
    };

    if (isPending) {
        return <span className="loading loading-spinner text-primary"></span>;
    }

    if (isError) {
        return <p>{error.message}</p>;
    }

    return (
        <div className='mx-12 lg:mx-24 pb-8'>
            <h2 className="text-4xl text-center my-12 font-bold text-red-600">Available Food</h2>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search by food name"
                    className="border border-gray-300 rounded-md px-4 py-2 mr-2"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
                {searchResults.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
