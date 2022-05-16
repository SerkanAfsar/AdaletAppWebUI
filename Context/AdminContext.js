import React, { useState, createContext } from "react";

const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
    const [closed, setClosed] = useState(false);

    return (
        <AdminContext.Provider value={{ closed, setClosed }}>
            {children}
        </AdminContext.Provider>
    )
}
export { AdminContext, AdminProvider };