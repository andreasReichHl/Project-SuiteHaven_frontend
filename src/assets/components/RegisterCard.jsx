import { useEffect, useState } from "react";

export default function RegisterCard() {
    const inputCss =
        "text-sm mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-customPink mb-4";

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfimPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isValidat, setValidad] = useState(false);

    useEffect(()=>{}, [firstname, lastname, confirmPassword])

    const checkPasswords = () => {
        if (password != confirmPassword)
        {
            setMessage("Passwörter simmen nicht überein!"); 
            return false;
        } else {
            setMessage("")
            return true;
        };
    };

    return (
        <div className="flex justify-center">
            <div className="rounded w-1/4 shadow-gray-300 shadow-md  p-3">
                <h2 className="mb-5 text-2xl text-slate-700">
                    Gastgeber Registrierung
                </h2>
                <div>
                    <input
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        className={inputCss}
                        placeholder="Vorname"
                        required
                    />

                    <input
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        className={inputCss}
                        placeholder="Nachname"
                        required
                    />

                    <input
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        className={inputCss}
                        placeholder="Email"
                        required
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className={inputCss}
                        placeholder="Passwort"
                        required
                    />

                    <input
                        onChange={(e)=> setConfimPassword(e.target.value)}
                        type="password"
                        className={inputCss}
                        placeholder="Wiederholung Passwort"
                        required
                    />
                    <button className="bg-gray-200 p-2 rounded text-sm justify-items-end text-customPink" disabled={isValidat}>
                        Registrieren
                    </button>
                </div>
            </div>
        </div>
    );
}
