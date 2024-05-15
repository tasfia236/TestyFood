import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import FoodCard from './FoodCard';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';

const AvailableFoods = () => {

    const { scrollYProgress } = useViewportScroll();
    const animationControl = useAnimation();

    useEffect(() => {
        scrollYProgress.onChange((latest) => {
            animationControl.start({ opacity: latest });
        });
    }, [scrollYProgress, animationControl]);

    
    const { isPending, isError, error, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/foods');
            return res.json();
        }
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [sortOption, setSortOption] = useState('Sorted By');
    const [layout, setLayout] = useState('grid-cols-3');

    useEffect(() => {
        setSearchResults(foods);
    }, [foods]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const filteredFoods = foods.filter(food =>
            food.food_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredFoods);
    };

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sorted = [...searchResults];
        sorted.sort((a, b) => {
            const dateA = new Date(a.expired_datetime);
            const dateB = new Date(b.expired_datetime);
            if (option === "asc") {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
        setSearchResults(sorted);
    };

    const toggleLayout = () => {
        setLayout(layout === 'grid-cols-3' ? 'grid-cols-2' : 'grid-cols-3');
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
            <div className='flex justify-around items-center mb-8'>
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by food name"
                        className="border border-gray-300 rounded-md px-4 py-2 mr-2"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearch} className="px-4 py-2 bg-sky-500 text-white rounded-md">Search</button>
                </div>
                <div className="flex justify-center my-4">
                    <select className="bg-sky-500 text-white font-bold p-3 rounded-xl" id="sort" value={sortOption} onChange={handleSortChange}>
                        <option disabled>Sorted By</option>
                        <option value="asc">Expiry Date Ascending</option>
                        <option value="desc">Expiry Date Descending</option>
                    </select>
                </div>
                <div className="flex justify-center my-4">
                    <button onClick={toggleLayout} className="px-4 py-2 bg-sky-500 text-white rounded-md">
                        Change Layout
                    </button>
                </div>
            </div>
            <motion.div
                    initial={{ opacity: 0.9 }}
                    animate={animationControl}
                    transition={{ duration: 0.1 }}
                >
            <div className={`grid lg:${layout} sm:grid-cols-3 gap-8`}>
                {searchResults.map(food => food.intStatus === 0 &&
                    <FoodCard key={food._id} food={food} />
                )}
            </div>
            </motion.div>
        </div>
    );
};

export default AvailableFoods;
