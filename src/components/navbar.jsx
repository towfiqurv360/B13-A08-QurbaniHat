'use client';

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, loading, logOut } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
      router.push('/login');
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar min-h-[5rem] px-0">

          <div className="navbar-start flex-1">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white rounded-box w-52 text-gray-700 font-medium border border-gray-100">
                <li><Link href="/" className="hover:text-blue-600 hover:bg-blue-50 py-2">Home</Link></li>
                <li><Link href="/animals" className="hover:text-blue-600 hover:bg-blue-50 py-2">All Animals</Link></li>
              </ul>
            </div>

            <Link href="/" className="btn btn-ghost text-2xl md:text-3xl font-extrabold tracking-tight hover:bg-transparent px-0">
              <span className="text-blue-600 drop-shadow-sm">Qurbani</span>
              <span className="text-emerald-500 drop-shadow-sm">Hat</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-gray-600 gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/animals" className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg px-4 py-2">
                  All Animals
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex gap-2 w-auto items-center">
            {loading ? (
              <span className="loading loading-spinner text-emerald-500"></span>
            ) : user ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold text-gray-800">{user?.name || "User"}</p>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-emerald-400 hover:ring-blue-500 transition-all">
                    <div className="w-10 rounded-full">

                      <img
                        alt="User Avatar"
                        src={user?.image || "https://i.ibb.co/30B37f0/avatar.jpg"}
                        onError={(e) => { e.target.src = "https://i.ibb.co/30B37f0/avatar.jpg"; }}
                      />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-xl w-52 border border-gray-100">
                    <li className="pointer-events-none md:hidden mb-2">
                      <span className="font-bold text-gray-800 border-b pb-2">{user?.name || "User"}</span>
                    </li>
                    <li>
                      <Link href="/my-profile" className="hover:text-blue-600 hover:bg-blue-50 font-medium py-2">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="text-red-500 hover:bg-red-50 hover:text-red-600 font-bold py-2 w-full text-left">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-4 md:px-6 transition-all duration-300 btn-sm md:btn-md"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn bg-gradient-to-r from-blue-600 to-emerald-500 text-white border-none rounded-full px-4 md:px-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 btn-sm md:btn-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}