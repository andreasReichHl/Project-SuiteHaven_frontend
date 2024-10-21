import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterCard from "./assets/components/RegisterCard.jsx";
import RegistryDone from "./assets/pages/RegistryDone.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <RegisterCard />,
            },
        ],
    },
    {
        path: "/registryDone",
        element: <RegistryDone />
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
