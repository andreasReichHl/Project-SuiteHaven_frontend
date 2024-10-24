import { useState } from "react";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const inputFields = [
        { placeholder: "Email", type: "text", onChange: setEmail },
        { placeholder: "Passwort", type: "password", onChange: setPassword },
    ];

    async function login() {
        setLoading(true);

        const encoded = btoa(email + ":" + password);
        try {
            await fetch(import.meta.env.VITE_BACKEND + "/auth/signIn", {
                method: "POST",
                headers: { Authorization: "Basic " + encoded },
            }).then((response) => {
                if (response.ok) {
                    const data = response.json();
                    localStorage.setItem("token", data.token);
                    navigate("/dashboard");
                } else if (response.status === 401) {
                    setErrorMessage("Benutzername oder Passwort falsch!");
                } else if (response.status === 500) {
                    setErrorMessage(
                        "Serverfehler: Bitte später erneut versuchen!"
                    );
                }
            });
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2 className="mb-8 text-3xl text-customOuterSpace">
                {props.head}
            </h2>
            {inputFields.map((field, index) => (
                <InputField
                    key={index}
                    placeholder={field.placeholder}
                    type={field.type}
                    onChange={(e) => field.onChange(e.target.value)}
                />
            ))}
            <p>{errorMessage}</p>
            <button
                className="bg-customBlue p-5 pl-3 pr-3 rounded-md text-xl w-full justify-items-end text-customFrenchGray font-Roboto disabled:bg-customPlatinum disabled:cursor-not-allowed mb-5"
                onClick={login}
                disabled={!email || !password}
            >
                {loading ? (
                    <span className="loading loading-spinner"></span>
                ) : (
                    "Login"
                )}
            </button>

            <Link to="/dashboard">Passwort vergessen?</Link>
        </div>
    );
}
