'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;


        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        });

        if (error) {
            toast.error(error.message || "Login failed! Check credentials.");
        } else {
            toast.success("Successfully Logged In!");
            router.push('/');
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: '/'
            });
        } catch (error) {
            toast.error("Google Login failed!");
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        toast('Please contact support to reset your password.', {
            icon: <Lock className="text-white" size={20} />,
            style: {
                borderRadius: '12px',
                background: '#1e293b',
                color: '#fff',
                fontWeight: 'bold'
            },
        });
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">

            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_8px_30_rgb(0,0,0,0.08)]">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-3 font-medium text-sm">
                        Enter your credentials to access your account
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between ml-1">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">Password</label>
                            <button
                                onClick={handleForgotPassword}
                                type="button"
                                className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl text-base font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="loading loading-spinner loading-sm"></span>
                                Signing in...
                            </span>
                        ) : "Sign In"}
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase tracking-wider">Or continue with</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full py-3.5 px-4 bg-white border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        Sign in with Google
                    </button>

                    <p className="mt-8 text-center text-sm text-gray-600 font-medium">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-blue-600 font-bold hover:text-blue-700 hover:underline transition-all">
                            Sign up for free
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}