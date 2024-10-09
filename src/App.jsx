import { useState } from "react";
import SuperbnbLogo from "./assets/img/superbnb_Logo-1.svg";
import RegisterCard from "./assets/components/RegisterCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <img src={SuperbnbLogo} alt="SuperBnB Logo" />
            <RegisterCard />
        </>
    );
}

export default App;
