'use client'
import Link from "next/link"
import { useState, useEffect } from 'react';
import Image from "next/image";


const header = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (Math.abs(currentScrollY - lastScrollY) > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsNavbarVisible(false);
                } else {
                    setIsNavbarVisible(true);
                }
                setLastScrollY(currentScrollY);
            }
        };


        const optimizedHandleScroll = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', optimizedHandleScroll);

        return () => window.removeEventListener('scroll', optimizedHandleScroll);
    }, [lastScrollY]);

    return (
        <>
            <div className="w-full h-full">
                <nav className={`bg-white border-b-1 border-gray-300 p-1 w-full fixed top-0 z-20 transition-transform duration-300 ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-24'}`}>
                    <div className="flex justify-center items-center">
                        <div className="flex-none font-bold text-4xl pb-1">
                            <Link href={'/'}>
                                <Image
                                    width={110}
                                    height={30}
                                    alt="logo"
                                    src='/images/newLogo.png'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center justify-end">
                        <button
                            className="inline-flex items-center justify-start p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } w-full md:flex md:justify-center md:w-auto md:items-center`}
                    >
                        <div className="md:inline-block  text-black">
                            <div className=" md:inline-block hover:text-cyan-400 rounded  mx-1.5 font-semibold p-1">
                                <Link href={"/"} onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Home</Link>
                            </div>
                            <div className="md:inline-block hover:text-cyan-400 rounded mx-1.5 font-semibold p-1">
                                <Link href={"/Gallery"} onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Gallery</Link>
                            </div>
                            <div className=" md:inline-block hover:text-cyan-400 rounded  mx-1.5 font-semibold p-1">
                                <Link href={"/Services"} onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Services</Link>
                            </div>
                            <div className=" md:inline-block hover:text-cyan-400 rounded  mx-1.5 font-semibold p-1">
                                <Link href={"/Team"} onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Team</Link>
                            </div>
                            <div className=" md:inline-block hover:text-cyan-400 rounded  mx-1.5 font-semibold p-1">
                                <a href="https://www.vagaro.com/blueblossomhairsaloninc" target="_blank" onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Book now</a>
                            </div>
                            <div className=" md:inline-block hover:text-cyan-400 rounded  mx-1.5 font-semibold p-1">
                                <a href="#footer" onClick={closeMenu} className="border-b-2 border-transparent hover:border-blue-500">Contact us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default header