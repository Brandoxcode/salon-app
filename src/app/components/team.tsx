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
                            A master hair colorist with over 20 years of experience in the beauty industry. I started my career in 2000 after graduating from the Academia de Belleza Juanito in Tuluá, Colombia. I specialize in balayage, color correction, and haircuts, with a passion for enhancing my clients’ natural beauty. I hold a cosmetology license and stay updated on the latest trends to deliver exceptional results. After moving to the U.S. nine years ago, I’ve continued building my reputation as a skilled stylist. For the past two years, I’ve proudly owned my own salon, where I provide personalized services tailored to every client’s needs.
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
                            My name is Lizbeth Polanco. I’ve been a hairstylist for a few months. I graduated from Fort Myers Technical College at the beginning of 2024, and since then, I’ve been doing blowouts, hair washing, and continuing to learn and grow in my craft. The reason I wanted to become a hairstylist is that, as a kid, I always had a passion for hair and loved the idea of creating fun colors for clients. A little more about me: I enjoy going to the gym to clear my mind and reset, playing games with friends, and swimming. When I have the time, I also do lashes.
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