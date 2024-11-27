import { useState } from "react";
import suiteHavenLogo from "./assets/img/superbnb_Logo-1.svg";
import suiteHavenLogoSmall from "./assets/img/suiteSmall.svg";
import RegisterCard from "./assets/components/RegisterCard";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <img
                className="pl-10 block md:hidden"
                src={suiteHavenLogoSmall}
                alt="SuperBnB Logo"
            />
            <img
                className="pl-10 hidden md:block"
                src={suiteHavenLogo}
                alt="SuperBnB Logo"
            />
            <Outlet />
        </>
    );
}

export default App;
