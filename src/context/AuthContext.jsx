'use client';

import { createContext, useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const { data: session, isPending: loading } = authClient.useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (session?.user) {
            setUser(session.user);
        } else {
            setUser(null);
        }
    }, [session]);

    const createUser = async (email, password, name, image) => {
        return await authClient.signUp.email({
            email,
            password,
            name,
            image,
            callbackURL: "/login"
        });
    };

    const login = async (email, password) => {
        return await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        });
    };

    const googleSignIn = async () => {
        return await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/'
        });
    };

    const logOut = async () => {
        setUser(null);
        return await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/login";
                }
            }
        });
    };

    const authInfo = { user, loading, createUser, login, googleSignIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};