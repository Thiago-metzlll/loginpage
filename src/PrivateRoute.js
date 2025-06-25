import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { taLogado } = useAuth();
    console.log("Está logado?", taLogado); // 👈 Adicione isso
    return taLogado ? children : <Navigate to="/" />
};

export default PrivateRoute; 