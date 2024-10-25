import minus from "../img/minus.svg";
import plus from "../img/plus.svg";

export default function PageTwoQuery({
    person,
    setPerson,
    bedrooms,
    setBedrooms,
    kitchen,
    setKitchen,
    bath,
    setBath,
    livingroom,
    setLivingroom,
}) {
    const items = [
        { label: "Gäste", count: person, setCount: setPerson, min: 1 },
        {
            label: "Schlafzimmer",
            count: bedrooms,
            setCount: setBedrooms,
            min: 1,
        },
        { label: "Badezimmer/WCs", count: bath, setCount: setBath, min: 0 },
        { label: "Küchen", count: kitchen, setCount: setKitchen, min: 0 },
        {
            label: "Wohnzimmer",
            count: livingroom,
            setCount: setLivingroom,
            min: 0,
        },
    ];

    return (
        <>
            <div className="flex items-center justify-center flex-col">
                <div className="pl-10 customWidth">
                    <h2 className="text-2xl mb-5">Schritt 2</h2>
                    <h3 className="text-5xl mb-2">
                        Mach einige grundlegende Angaben zu deiner Unterkunft
                    </h3>
                    <h4 className="text-2xl text-customFrenchGray mb-9">
                        Weitere Details (zum Beispiel die Art der Betten) kannst
                        du später hinzufügen.
                    </h4>
                </div>
                {items.map((item, index) => (
                    <div key={index} className="customWidthbox">
                        <div className="border-b border-customPlatinum flex justify-between text-2xl mb-5">
                            <p>{item.label}</p>
                            <div className="flex items-center gap-4 pb-5">
                                <button
                                    className="border rounded-full hover:border-customPayne disabled:border-gray-200"
                                    onClick={() =>
                                        item.setCount(item.count - 1)
                                    }
                                    disabled={item.count <= item.min}
                                >
                                    <span>
                                        <img
                                            className="w-10"
                                            src={minus}
                                            alt=""
                                        />
                                    </span>
                                </button>
                                <p>{item.count}</p>
                                <button
                                    className="border rounded-full hover:border-customPayne "
                                    onClick={() =>
                                        item.setCount(item.count + 1)
                                    }
                                >
                                    <span>
                                        <img
                                            className="w-10"
                                            src={plus}
                                            alt=""
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
