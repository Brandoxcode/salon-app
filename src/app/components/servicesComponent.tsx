import { data } from "../../../utils/data";

export default function servicesComponent() {
    const { services, treatments, cc, makeups, waxs } = data
    return (
        <div>
            <ul className="flex flex-col items-center justify-center text-white">
                <div className="space-y-3 px-5">
                    <span className="text-4xl font-bold pb-3">Haircuts & Styles</span>
                    {services.map((service, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-black"
                        >
                            <span className="font-medium">{service.name}</span>
                            <span className="font-medium px-2">{service.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 pt-3">
                    <span className="text-4xl font-bold pb-3">Keratin Treatment</span>
                    {treatments.map((treatment, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-black"
                        >
                            <span className="font-medium">{treatment.name}</span>
                            <span className="font-medium px-2">{treatment.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 px-5 pt-3">
                    <span className="text-4xl font-bold pb-3">Hair Color & Extension</span>
                    {cc.map((color, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-black"
                        >
                            <span className="font-medium">{color.name}</span>
                            <span className="font-medium px-2">{color.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 px-5 pt-3">
                    <span className="text-4xl font-bold pb-3 pt-40">Make Up</span>
                    {makeups.map((makeup, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-black"
                        >
                            <span className="font-medium">{makeup.name}</span>
                            <span className="font-medium px-2">{makeup.price}</span>
                        </li>
                    ))}
                </div>
                <div className="space-y-3 px-5 pt-3">
                    <span className="text-4xl font-bold pb-3 pt-40">Waxing</span>
                    {waxs.map((wax, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-black"
                        >
                            <span className="font-medium">{wax.name}</span>
                            <span className="font-medium px-2">{wax.price}</span>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}