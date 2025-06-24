import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[taLogado, settaLogado] = useState(false);

    const login = () => settaLogado(true);
    const logout = () => settaLogado(false);

    return (
        <AuthContext.Provider value={{taLogado, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);