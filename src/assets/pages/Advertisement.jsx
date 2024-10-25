import { useState } from "react";
import PageOneQuery from "../components/PageOneQuery";
import suiteHavenLogoSmall from "../img/suiteSmall.svg";
import PageTwoQuery from "../components/PageTwoQuery";

export default function Advertisement() {
    const [title, setTitle] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [description, setDescription] = useState(null);
    const [person, setPerson] = useState(1);
    const [price, setPrice] = useState(0);
    const [cleaning, setCleaning] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [kitchen, setKitchen] = useState(0);
    const [bath, setBath] = useState(0);
    const [livingroom, setLivingroom] = useState(0);
    const [amenity, setAmenity] = useState([]);

    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <>
            <div className="flex flex-col h-screen">
                <img
                    className="pl-10 block w-80"
                    src={suiteHavenLogoSmall}
                    alt="SuperBnB Logo"
                />
                <div className="flex-grow">
                    {step === 1 && (
                        <PageOneQuery
                            title={title}
                            setTitle={setTitle}
                            city={city}
                            setCity={setCity}
                            country={country}
                            setCountry={setCountry}
                            description={description}
                            setDescription={setDescription}
                        />
                    )}
                    {step === 2 && (
                        <PageTwoQuery
                            person={person}
                            setPerson={setPerson}
                            bedrooms={bedrooms}
                            setBedrooms={setBedrooms}
                            kitchen={kitchen}
                            setKitchen={setKitchen}
                            bath={bath}
                            setBath={setBath}
                            livingroom={livingroom}
                            setLivingroom={setLivingroom}
                        />
                    )}
                </div>
                <div className="flex gap-3">
                    <div className="bg-customPayne h-0.5 w-full" />
                    <div
                        className={`h-0.5 w-full ${
                            step >= 2 ? "bg-customPayne" : "bg-customPlatinum"
                        }`}
                    />
                    <div
                        className={`h-0.5 w-full ${
                            step >= 3 ? "bg-customPayne" : "bg-customPlatinum"
                        }`}
                    />
                </div>
                <div className="h-28">
                    <div className="flex justify-between py-5 px-10 flex-row-reverse">
                        <button
                            className="bg-black text-customFrenchGray p-3 px-10 rounded-md text-xl  justify-items-end  font-Roboto disabled:bg-customPlatinum disabled:cursor-not-allowed"
                            onClick={nextStep}
                        >
                            Weiter
                        </button>
                        {step > 1 && (
                            <button
                                className="bg-black text-cu p-3 px-10 rounded-md text-xl  justify-items-end text-customFrenchGray font-Roboto disabled:bg-customPlatinum disabled:cursor-not-allowed "
                                onClick={prevStep}
                            >
                                Zurück
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
