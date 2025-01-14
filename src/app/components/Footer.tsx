import { FaFacebook, FaInstagram } from 'react-icons/fa';

const footer = () => {
    return (
        <>
            <footer id='footer' className="bg-black text-white py-7">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                        <ul>
                            <li>Tuesday to Friday: 10:00 AM - 5:00 PM</li>
                            <li>Saturday: 9:00 AM - 5:00 PM</li>
                            <li>Sunday & Monday: Closed</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <ul>
                            <li>Address: 3032 Santa Barbara Blvd, Cape Coral, FL 33914</li>
                            <li>Phone: <a href="tel:+1(239)471-7871" className="hover:underline">+1(239)471-7871</a></li>
                            <li>Email: <a href="mailto:Contact@blueblossomhairsalon.com" className="hover:underline">Contact@blueblossomhairsalon.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=100083897386534" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/blue_blossom_hair_salon/?hl=es" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Bloosom Blue. All rights reserved.
                </div>
            </footer>
        </>
    )
}
export default footer