import Image from "next/image"

const team = () => {
    Image
    return (
        <>

            <div className="mb-12 flex justify-center items-center">
                <h1 className="tracking-widest font-medium text-3xl bg-opacity-50">Our awsome team!</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
                    <Image
                        className="w-full"
                        width={70}
                        height={70}
                        src="/images/bblogo.png"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Kimberly</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Estilista</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
                    <Image
                        className="w-full"
                        width={70}
                        height={70}
                        src="/images/bblogo.png"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Luz</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Jefe</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
                    <Image
                        className="w-full"
                        width={70}
                        height={70}
                        src="/images/bblogo.png"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Liu</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Asistente</span>
                    </div>
                </div>
            </div>

        </>
    )
}
export default team