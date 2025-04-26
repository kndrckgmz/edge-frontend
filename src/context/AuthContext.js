'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(null);

    let tokenCheck = () => {
        setTimeout(() => {
            let token = localStorage.getItem('token')
            if (token !== null && token !== "") {
                setAuth(true)
            }
            else {
                setAuth(false)
            }
        }, 100)
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    const toggleAuth = () => {
        setAuth((prevAuth) => (prevAuth === false ? true : false));
    };

    return (
        <AuthContext.Provider value={{ auth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);