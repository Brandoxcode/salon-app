import { data } from "../../../utils/data";

export default function servicesComponent() {
    const { services } = data
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <ul className="space-y-4">
                {services.map((service, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white bg-opacity-25 p-4 rounded-lg shadow-md text-white"
                    >
                        <span className="font-medium">{service.name}</span>
                        <span className="font-medium">{service.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}