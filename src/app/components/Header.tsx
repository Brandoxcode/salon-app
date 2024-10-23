import Link from "next/link"

const header = () => {
    return (
        <>
            <div className="w-full h-full">
                <nav className="bg-white p-1 w-full fixed top-0 z-20">
                    <div className="flex justify-center items-center">
                        <div className="flex-none font-bold text-4xl">
                            <h1>Bloosom Blue</h1>
                            <h1 className="pl-[70px]">Salon</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-black">
                        <div className="border-b-2 border-transparent  hover:text-cyan-400 rounded hover:border-blue-500 mx-1.5 font-semibold p-1">
                            <Link href={"/"}>Home</Link>
                        </div>
                        <div className="flex">
                            <div className="border-b-2 border-transparent  hover:text-cyan-400 rounded hover:border-blue-500 mx-1.5 font-semibold p-1">
                                <Link href={"/Gallery"}>Photo Gallery</Link>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="border-b-2 border-transparent  hover:text-cyan-400 rounded hover:border-blue-500 mx-1.5 font-semibold p-1">
                                <Link href={"/Services"}>Services</Link>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="border-b-2 border-transparent  hover:text-cyan-400 rounded hover:border-blue-500 mx-1.5 font-semibold p-1">
                                <a href="https://www.vagaro.com/blueblossomhairsaloninc" target="_blank">Book now</a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="border-b-2 border-transparent  hover:text-cyan-400 rounded hover:border-blue-500 mx-1.5 font-semibold p-1">
                                <a href="#footer">Contact us</a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}
export default header