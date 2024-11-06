import ServicesComponent from "./servicesComponent";

const background = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat pt-40 pb-10"
            style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <ServicesComponent />
                </div>
            </div>
        </div>
    );
}
export default background