"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import toast from "react-hot-toast";
import { User, Mail, Lock, Image as ImageIcon, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
            callbackURL: "/login"
        });

        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Account Created Successfully!");
            router.push('/login');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">

            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_8px_30_rgb(0,0,0,0.08)]">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                        Join Us Today
                    </h2>
                    <p className="text-gray-500 mt-3 font-medium text-sm">
                        Create an account to start your journey
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleRegister}>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide ml-1">Full Name</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <User size={18} />
                            </span>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                className="w-full pl-11 pr-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide ml-1">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Mail size={18} />
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full pl-11 pr-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide ml-1">Password</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Lock size={18} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide ml-1">Profile Image URL</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <ImageIcon size={18} />
                            </span>
                            <input
                                type="text"
                                name="image"
                                placeholder="https://example.com/photo.jpg"
                                className="w-full pl-11 pr-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 px-4 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl text-base font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center cursor-pointer gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Creating account...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>

                    <p className="mt-8 text-center text-sm text-gray-600 font-medium">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-600 font-bold hover:text-blue-700 hover:underline transition-all cursor-pointer">
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}