import InputFieldAdvertisment from "../components/InputFieldAdvertisment";

export default function PageOneQuery({
    title,
    setTitle,
    city,
    setCity,
    country,
    setCountry,
    description,
    setDescription,
}) {
    const inputFields = [
        { placeholder: "Titel", type: "text", onChange: setTitle },
        { placeholder: "Stadt", type: "text", onChange: setCity },
        { placeholder: "Country", type: "text", onChange: setCountry },
    ];

    return (
        <>
            <div className="grid lg:grid-cols-2">
                <div className="m-auto pl-10">
                    <h2 className="text-3xl mb-5">Schritt 1</h2>
                    <h3 className="text-7xl mb-5">
                        Erzähl uns von deiner Unterkunft
                    </h3>
                    <p>
                        In diesem Schritt fragen würden wir gerne wissen, wo
                        sich deine Unterkunft befindet, was deine Gäste erwarten
                        können und danach, ob Gästen die gesamte Unterkunft
                        oder nur ein Zimmer zur Verfügung steht. Anschließend
                        und wie viele Personen bei dir übernachten können.
                    </p>
                </div>
                <div className="px-10 lg:px-16  w-full">
                    <div className=" ">
                        {inputFields.map((field, index) => (
                            <InputFieldAdvertisment
                                key={index}
                                placeholder={field.placeholder}
                                type={field.type}
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                        ))}
                        <textarea
                            className="text-xl md:text-md mt-1 block w-full px-3 py-4 h-72 bg-white border border-customPayne rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-customBlue mb-4"
                            placeholder="Beschreibung"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}
