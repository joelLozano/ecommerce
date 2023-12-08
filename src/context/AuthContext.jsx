import { useContext, createContext, useState, Children } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState("dfgdfgfd")

    const isAuth = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token)
        console.log(decoded)
        setUser(decoded)
    }


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    AuthContext,
    useAuthContext
}