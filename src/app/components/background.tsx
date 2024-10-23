import ServicesComponent from "./servicesComponent";

const background = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
            {/* Overlay oscuro para hacer el contenido más legible */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Contenido encima del overlay */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-8">Services</h1>
                    <ServicesComponent />
                </div>
            </div>
        </div>
    );
}
export default background