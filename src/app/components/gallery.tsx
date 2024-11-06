import Photos from "./photos"

const gallery = () => {

    return (
        <><div
            className="relative bg-cover bg-center bg-no-repeat h-screen "
            style={{ backgroundImage: "url('/images/space-background.jpg')" }}
        >
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <Photos />
                </div>
            </div>
        </div>
        </>
    )
}
export default gallery