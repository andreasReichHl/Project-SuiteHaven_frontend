import { useEffect, useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

export default function RegisterCard(e) {
    e.preventDefault;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfimPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isValidat, setValidad] = useState(false);
    const [emailValidat, setEmailValidat] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const inputFields = [
        { placeholder: "Vorname", type: "text", onChange: setFirstname },
        { placeholder: "Nachname", type: "text", onChange: setLastname },
        { placeholder: "Email", type: "text", onChange: setEmail },
        { placeholder: "Passwort", type: "password", onChange: setPassword },
        {
            placeholder: "Wiederholung Passwort",
            type: "password",
            onChange: setConfimPassword,
        },
    ];

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    useEffect(() => {
        if (validateEmail(email)) {
            setEmailValidat(true);
        } else {
            setEmailValidat(false);
        }
    }, [email, confirmPassword]);

    useEffect(() => {
        if (confirmPassword != "") {
            if (password != confirmPassword) {
                setMessage("Passwörter simmen nicht überein!");
                setValidad(true);
            } else {
                setMessage("");
                setValidad(false);
            }
        }
    }, [confirmPassword, email]);

    const handleSubmit = async () => {
        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        };

        setLoading(true); // Setze Ladezustand auf true
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND + "/auth/newHost",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                }
            );

            if (response.ok) {
                console.log("Host wurde erfolgreich angelegt");
                navigate("/registryDone");
            } else if (response.status === 409) {
                console.error(
                    "Registration failed: Benutzer existiert bereits."
                );
            } else {
                console.error(
                    "Registration failed with status: " + response.status
                );
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center pl-10 pr-10">
            <div className="w-full rounded-md  md:w-1/2 md:shadow-gray-300 md:shadow-md md:p-5 pt-0 md:border-customPlatinum md:border">
                <h2 className="mb-8 text-3xl text-customOuterSpace">
                    Gastgeber Registrierung
                </h2>
                <div>
                    {inputFields.map((field, index) => (
                        <InputField
                            key={index}
                            placeholder={field.placeholder}
                            type={field.type}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    ))}

                    <p className="mb-2 text-red-700">{message}</p>
                    <button
                        className="bg-customBlue p-5 pl-3 pr-3 rounded-md text-xl w-full justify-items-end text-customFrenchGray font-Roboto disabled:bg-customPlatinum disabled:cursor-not-allowed "
                        onClick={handleSubmit}
                        disabled={
                            isValidat ||
                            !firstname ||
                            !lastname ||
                            !email ||
                            !emailValidat
                        }
                        submit="Registrieren"
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            "Registrieren"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
