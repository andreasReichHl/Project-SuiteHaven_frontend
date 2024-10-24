import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import RegisterCard from "./assets/components/RegisterCard.jsx";
import RegistryDone from "./assets/pages/RegistryDone.jsx";
import Forwarding from "./assets/pages/Forwarding.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import LoginPages from "./assets/components/Login.jsx";
import AuthenticationPage from "./assets/pages/AuthenticationPage.jsx";

const ProtectRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <AuthenticationPage />,
                children: [
                    {
                        path: "",
                        element: (
                            <RegisterCard head={"Gastgeber Registrierung"} />
                        ),
                    },
                ],
            },
            {
                path: "dashboard",
                element: (
                    <ProtectRoute>
                        <Dashboard />
                    </ProtectRoute>
                ),
            },
            {
                path: "login",
                element: <AuthenticationPage />,
                children: [
                    {
                        path: "",
                        element: <LoginPages head={"Gastgeber Login"} />,
                    },
                ],
            },
        ],
    },

    {
        path: "/registryDone",
        element: <RegistryDone />,
    },
    {
        path: "/verify-mail",
        element: <Forwarding />,
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
