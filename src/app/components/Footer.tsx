import { FaFacebook, FaInstagram } from 'react-icons/fa';

const footer = () => {
    return (
        <>
            <footer id='footer' className="bg-gray-900 text-white py-7">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                        <ul>
                            <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 10:00 AM - 4:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <ul>
                            <li>Address: 123 Example Street, City</li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></li>
                            <li>Email: <a href="mailto:email@example.com" className="hover:underline">email@example.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
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