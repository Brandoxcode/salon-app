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
                        className="w-full object-contain"
                        width={1000}
                        height={1000}
                        src="/images/luz.jpeg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Luz</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Owner</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
                    <Image
                        className="w-full"
                        width={1000}
                        height={1000}
                        src="/images/kim.jpeg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Kimberly</div>
                        <p className="text-gray-700 text-base">
                            After moving to Florida in 2019 I was versed in the world of fashion and beauty. I decided to attend Florida academy and pursue my passion for it. It’s vital to me to stay educated on today’s trend in order to give each client their desired look. I truly believe in educating my clients on products and maintenance for their hair care needs in order for them to maintain the achieved look from the chair to their home.

                            Outside of work quality time with my family and friends is one of my favorite ways to spend my free time. I also love shopping, beaching, and traveling!


                            Most of all i’m more than excited to get to know you in my chair!
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Stylist</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
                    <Image
                        className="w-full"
                        width={1000}
                        height={1000}
                        src="/images/asis.jpeg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Lizbeth</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 pb-2 flex justify-center items-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Assistant</span>
                    </div>
                </div>
            </div>

        </>
    )
}
export default team