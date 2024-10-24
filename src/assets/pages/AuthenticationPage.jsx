import { Outlet } from "react-router-dom";

export default function AuthenticationPage(props) {
    return (
        <div className="flex justify-center pl-10 pr-10">
            <div className="w-full rounded-md  md:w-1/2 md:shadow-gray-300 md:shadow-md md:p-5 pt-0 md:border-customPlatinum md:border">
                <Outlet />
            </div>
        </div>
    );
}
