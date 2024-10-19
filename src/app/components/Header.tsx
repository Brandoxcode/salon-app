import Link from "next/link"

const header = () => {
    return (
        <>

            <nav className=" bg-[#0369a1] p-5 w-full flex justify-start">
                <div className="text-black flex items-end pl-4">
                    <Link href={"/"}>Home</Link>
                </div>
                <div className="text-black flex items-end pl-20">
                    <Link href={"/Gallery"}>Photo Gallery</Link>
                </div>
                <div className="text-black flex items-start pl-[1300px]">
                    <p>Make an appoiment</p>
                </div>
                <div className="text-black flex items-start pl-10">
                    <a href="https://www.facebook.com/brandon.araya.100" target="_blank">Facebook</a>
                </div>
                <div className="text-black flex items-start pl-10">
                    <a href="https://www.instagram.com/bran_araya10" target="_blank">Instagram</a>
                </div>

            </nav>
            <div className=" bg-[#0369a1] p-1/4 mt-2 w-full flex">
                <p className="text-[#0369a1] flex items-center justify-normal">xd</p>
            </div>
        </>
    )
}
export default header