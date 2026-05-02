'use client';

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { User, Image as ImageIcon, Mail, ShieldCheck, Loader2 } from "lucide-react";

export default function MyProfile() {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const image = e.target.image.value;

        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (error) {
            toast.error(error.message || "Update failed!");
        } else {
            toast.success("Profile updated successfully!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        setLoading(false);
    };

    if (!user) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50/50 py-24 px-4">
            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                    <div className="px-8 pb-8 -mt-16 text-center md:text-left md:flex md:items-end md:gap-6">
                        <div className="relative inline-block">
                            <img
                                className="w-32 h-32 rounded-3xl ring-8 ring-white object-cover shadow-xl bg-white"
                                src={user?.image || "https://i.ibb.co/30B37f0/avatar.jpg"}
                                alt="Profile"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-4 border-white">
                                <ShieldCheck size={20} />
                            </div>
                        </div>
                        <div className="mt-4 md:mb-2">
                            <h1 className="text-3xl font-black text-gray-900">{user?.name}</h1>
                            <p className="text-gray-500 font-medium flex items-center justify-center md:justify-start gap-2">
                                <Mail size={16} /> {user?.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Account Status</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Member Since</span>
                                    <span className="font-bold text-gray-700">2026</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Verified</span>
                                    <span className="text-emerald-600 font-bold">Yes</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-3">
                                <User className="text-blue-600" /> Account Settings
                            </h2>

                            <form onSubmit={handleUpdate} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={user?.name}
                                            className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Profile Photo URL</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <ImageIcon size={20} />
                                        </div>
                                        <input
                                            type="url"
                                            name="image"
                                            defaultValue={user?.image}
                                            className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium"
                                            required
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 ml-1 mt-1 font-medium">Use a direct image link (e.g., ImgBB, Cloudinary)</p>
                                </div>

                                <div className="space-y-2 opacity-60">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address (Fixed)</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Mail size={20} />
                                        </div>
                                        <input
                                            type="email"
                                            value={user?.email}
                                            disabled
                                            className="w-full pl-12 pr-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl cursor-not-allowed font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        disabled={loading}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Updating Profile...
                                            </>
                                        ) : "Save Changes"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}