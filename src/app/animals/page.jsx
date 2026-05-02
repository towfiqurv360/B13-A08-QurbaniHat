'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AnimalsPage() {
    const [animals, setAnimals] = useState([]);
    const [displayAnimals, setDisplayAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/animals.json')
            .then((res) => res.json())
            .then((data) => {
                setAnimals(data);
                setDisplayAnimals(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSort = (type) => {
        let sortedData = [...displayAnimals];

        if (type === 'low-to-high') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (type === 'high-to-low') {
            sortedData.sort((a, b) => b.price - a.price);
        }

        setDisplayAnimals(sortedData);
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh] gap-4">
                <span className="loading loading-ring loading-lg text-blue-600"></span>
                <p className="text-gray-500 font-medium animate-pulse">Loading amazing animals...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-20">

            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 ">
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Discover Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Animals</span>
                    </h1>
                    <p className="text-lg text-gray-500">
                        Browse our premium collection for your Qurbani.
                    </p>
                </div>

                <div className="dropdown dropdown-end cursor-pointer">
                    <div tabIndex={0} role="button" className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 border-none shadow-lg">
                        Sort by Price
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white rounded-xl w-52 border border-gray-100 mt-2">
                        <li>
                            <button onClick={() => handleSort('low-to-high')} className="font-bold text-gray-600 hover:text-blue-600">
                                Price: Low to High
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSort('high-to-low')} className="font-bold text-gray-600 hover:text-blue-600">
                                Price: High to Low
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 cursor-pointer">
                {displayAnimals.map((animal) => (
                    <div
                        key={animal.id}
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                    >
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <p className="text-lg font-bold text-emerald-600">৳ {animal.price}</p>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-1">{animal.name}</h2>

                            <div className="flex flex-wrap gap-2 mb-5">
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {animal.type}
                                </span>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {animal.breed}
                                </span>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-400 uppercase text-xs">Weight</span>
                                    <span className="text-gray-800 font-medium text-base">{animal.weight} kg</span>
                                </div>
                                <div className="w-px h-8 bg-gray-200"></div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-400 uppercase text-xs">Age</span>
                                    <span className="text-gray-800 font-medium text-base">{animal.age} yrs</span>
                                </div>
                            </div>

                            <div className="mt-auto pt-2">
                                <Link
                                    href={`/details-page/${animal.id}`}
                                    className="btn w-full bg-gray-900 hover:bg-blue-600 text-white rounded-xl border-none shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}