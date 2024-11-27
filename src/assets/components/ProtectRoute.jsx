import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/user", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                if (response.ok) setAuth(true);
                else setAuth(false);
            })
            .catch((error) => {
                setAuth(false);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <div className="flex justify-center">
                <span className="loading loading-dots loading-md bg-customBlue m-auto"></span>
            </div>
        );

    if (!auth) return <Navigate to="/login" />;
    else return <>{children}</>;
};

export default ProtectRoute;
