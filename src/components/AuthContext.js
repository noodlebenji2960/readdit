import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie } from '../functions/getCookie';
import { setAuthUserDataCookie } from '../functions/redditApi';
import { RANDOM_STRING_LENGTH } from '../functions/redditApi';
import { getToken, getUser } from '../functions/redditApi';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [userCookie, setUserCookie] = useState(getCookie("userData"))
    const [authData, setAuthData] = useState(() => {
        return {
            user: userCookie ? JSON.parse(userCookie) : undefined,
            isAuthenticated: userCookie ? true : false,
        }
    });

    const setAuthUserDataCookie = async () => {
        const authorizationCode = window.location.hash.substring(43)
        if (window.location.hash.substring(25, 25 + RANDOM_STRING_LENGTH) == getCookie("randomString")) {
            try {
                return getToken(authorizationCode)
                    .then((token) => {
                        document.cookie = `token=${token.access_token}`
                        return getUser(token.access_token).then((userData) => {
                            document.cookie = `userData=${JSON.stringify(userData)}`
                            setUserCookie(userData)
                            setAuthData({
                                user: userData,
                                isAuthenticated: true,
                            })
                        })
                    })
            } catch (error) {
                console.error("Error getting token or user:", error);
            }
        }
        return null
    };

    useEffect(() => {
        if (window.location.href.includes("?state=")) {
            setAuthUserDataCookie()
        }
    }, [])

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}