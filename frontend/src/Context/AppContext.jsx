import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    // ************ Check localStorage for saved theme and apply it ************
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.className = theme; 
        localStorage.setItem("theme", theme); 
    }, [theme]);

    // ************ Provide authenticated user and token ************
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    async function getUser() {
        const res = await fetch("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (res.ok) {
            setUser(data);
        }
    }

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return <AppContext.Provider value={{ user, setUser, token, setToken, theme, setTheme }}>{children}</AppContext.Provider>;
}
