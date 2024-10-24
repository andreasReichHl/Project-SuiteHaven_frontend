import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
    const [auth, setAuth] = useState(null);
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
            });
    }, []);

    useEffect(() => {
        if (auth === false) {
            navigate("/login");
        }
    }, [auth, navigate]);

    if (auth === null)
        return (
            <div>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );

    return auth ? children : null;
};

export default ProtectRoute;
