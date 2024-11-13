import { data } from "../../../utils/data";

export default function servicesComponent() {
    const { services, treatments, cc, makeups, waxs } = data

    return (
        <div>
            <ul className="flex flex-wrap items-center justify-center text-black">
                <div className="space-y-3 px-3">
                    <span className="text-4xl text-black font-bold pb-3">Haircuts & Styles</span>

                    {services.map((service) => (
                        <li
                            key={service.id}
                            className="flex justify-between items-center bg-black bg-opacity-35 p-3 rounded-lg shadow-md text-white"
                        >
                            <span className="font-medium">{service.name}</span>
                            <span className="font-medium px-2">{service.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 px-3 pt-3">
                    <span className="text-4xl text-black font-bold pb-3">Hair Color & Extension</span>
                    {cc.map((color) => (
                        <li
                            key={color.id}
                            className="flex justify-between items-center bg-black bg-opacity-35 p-3 rounded-lg shadow-md text-white"
                        >
                            <span className="font-medium">{color.name}</span>
                            <span className="font-medium px-2">{color.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 px-3 pt-3">
                    <span className="text-4xl text-black font-bold pb-3 pt-40">Waxing</span>
                    {waxs.map((wax) => (
                        <li
                            key={wax.id}
                            className="flex justify-between items-center bg-black bg-opacity-35 p-3 rounded-lg shadow-md text-white"
                        >
                            <span className="font-medium">{wax.name}</span>
                            <span className="font-medium px-2">{wax.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 pt-3">
                    <span className="text-4xl text-black font-bold pb-3">Keratin Treatment</span>
                    {treatments.map((treatment) => (
                        <li
                            key={treatment.id}
                            className="flex justify-between items-center bg-black bg-opacity-35 p-3 rounded-lg shadow-md text-white"
                        >
                            <span className="font-medium">{treatment.name}</span>
                            <span className="font-medium px-2">{treatment.price}</span>
                        </li>
                    ))}
                </div>

                <div className="space-y-3 px-3 pt-3">
                    <span className="text-4xl text-black font-bold pb-3 pt-40">Make Up</span>
                    {makeups.map((makeup) => (
                        <li
                            key={makeup.id}
                            className="flex justify-between items-center bg-black bg-opacity-35 p-3 rounded-lg shadow-md text-white"
                        >
                            <span className="font-medium">{makeup.name}</span>
                            <span className="font-medium px-2">{makeup.price}</span>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}
