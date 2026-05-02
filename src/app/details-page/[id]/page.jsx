'use client';

import React, { useEffect, useState, use } from 'react';
import toast from 'react-hot-toast';
// import PrivateRoute from '../components/PrivateRoute';
import PrivateRoute from '@/components/PrivateRoute';

export default function AnimalDetails({ params }) {
    const unwrappedParams = use(params);
    const id = unwrappedParams.id;

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/animals.json')
            .then((res) => res.json())
            .then((data) => {
                const selectedAnimal = data.find((item) => item.id == id);
                setAnimal(selectedAnimal);
                setLoading(false);
            })
            .catch((error) => console.error("Error:", error));
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success('Booking Successful! We will contact you soon.');
        e.target.reset();
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh] gap-4">
                <span className="loading loading-ring loading-lg text-blue-600"></span>
                <p className="text-gray-500 font-medium animate-pulse">Fetching details...</p>
            </div>
        );
    }

    if (!animal) {
        return <div className="text-center py-24 text-2xl font-bold text-gray-400">Animal not found!</div>;
    }

    return (
        <PrivateRoute>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">


                    <div className="lg:col-span-7 space-y-8">
                        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100">
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 flex gap-3">
                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-sm uppercase tracking-wide">
                                    {animal.type}
                                </span>
                                <span className="bg-emerald-500/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-white shadow-sm uppercase tracking-wide">
                                    {animal.breed}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{animal.name}</h1>
                                <p className="text-4xl font-black text-emerald-600">৳ {animal.price}</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Weight</p>
                                    <p className="text-lg font-bold text-gray-800">{animal.weight} kg</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Age</p>
                                    <p className="text-lg font-bold text-gray-800">{animal.age} Years</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 col-span-2 md:col-span-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Location</p>
                                    <p className="text-lg font-bold text-gray-800">{animal.location}</p>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">About this animal</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{animal.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-28 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-gray-900">Secure Booking</h2>
                                <p className="text-gray-500 text-sm mt-1">Submit your details to reserve this animal</p>
                            </div>

                            <form onSubmit={handleBooking} className="space-y-5">
                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-bold text-gray-700">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="John Doe" className="input bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 rounded-xl w-full transition-all" required />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label py-1">
                                            <span className="label-text font-bold text-gray-700">Email</span>
                                        </label>
                                        <input type="email" placeholder="email@test.com" className="input bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 rounded-xl w-full transition-all" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label py-1">
                                            <span className="label-text font-bold text-gray-700">Phone</span>
                                        </label>
                                        <input type="tel" placeholder="017XXXXXXXX" className="input bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 rounded-xl w-full transition-all" required />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-bold text-gray-700">Delivery Address</span>
                                    </label>
                                    <textarea placeholder="Flat, House, Road, City..." className="textarea bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 rounded-xl w-full min-h-[100px] transition-all" required></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white border-none rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-4 py-4 h-auto"
                                >
                                    Confirm My Booking
                                </button>

                                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-4">
                                    🔒 Secure & Verified Listing
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </PrivateRoute>
    );
}