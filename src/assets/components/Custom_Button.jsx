import { useEffect, useState } from "react";

export default function Costum_Button(props) {
    const [isValidat, setValidad] = useState(true);

    useEffect(() => {
        setValidad(props.isValidat);
    }, [props]);

    return (
        <>
            <button
                onClick={props.onClick}
                className="bg-customBlue p-5 pl-3 pr-3 rounded-md text-xl w-full justify-items-end text-customFrenchGray font-Roboto disabled:bg-customPlatinum disabled:cursor-not-allowed "
                disabled={isValidat}
            >
                {props.submit}
            </button>
        </>
    );
}
