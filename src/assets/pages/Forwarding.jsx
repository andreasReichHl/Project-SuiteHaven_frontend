import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Forwarding() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    localStorage.setItem("token", token);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) unlocked();
    }, [token]);

    const unlocked = async () => {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND + "/auth/unlocked",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: token }),
                }
            );

            if (response.ok) {
                navigate("/dashboard");
            } else {
                console.error("Failed to unlock account:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <h1>Forwarding</h1>;
}
