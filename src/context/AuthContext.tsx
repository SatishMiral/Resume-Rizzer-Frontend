import React, { createContext, useState, useEffect } from 'react'
import type { User } from '../types/index'


type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const raw = localStorage.getItem('rr_user')
            return raw ? JSON.parse(raw) : null
        } catch {
            return null
        }
    })


    useEffect(() => {
        if (user) localStorage.setItem('rr_user', JSON.stringify(user))
        else localStorage.removeItem('rr_user')
    }, [user])


    const login = async (email: string, password: string) => {
        // Dummy auth — replace with real API call
        await new Promise((r) => setTimeout(r, 600))
        const fakeUser = { id: 'u1', email, name: 'Satish', token: 'fake-jwt' }
        setUser(fakeUser)
    }


    const logout = () => setUser(null)


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    )
}