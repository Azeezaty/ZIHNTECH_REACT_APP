
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-[#DDA5AF] text-[#754B43] pt-12">

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Brand Section */}
                    <div className="flex flex-col items-start">

                        <img
                            src="/src/assets/logo.png"
                            alt="Logo"
                            className="h-20 w-auto object-contain"
                        />

                        <h3 className="text-lg font-bold mt-3">
                            Skincare
                        </h3>

                        <p className="mt-3 text-sm leading-7 max-w-xs">
                            Discover skincare essentials designed to
                            nourish, care for, and bring out your skin's
                            natural glow.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex gap-5 mt-5 text-xl">
                            <a href="#" aria-label="Instagram"
                                className="hover:text-white transition">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Facebook"className="hover:text-white transition"><FaFacebookF /></a>
                            <a href="#" aria-label="WhatsApp"className="hover:text-white transition"><FaWhatsapp /></a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-center">
                        <h3 className="text-lg font-bold mb-5">Quick Links</h3>
                        <ul className="flex flex-col gap-3 font-medium">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#services" className="hover:text-white transition">Services </a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start lg:items-center">
                        <h3 className="text-lg font-bold mb-5">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-4 justify-content-center items-center">
                            <p className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                <span>Your Location</span>
                            </p>
                            <p className="flex items-center gap-3 ml-14">
                                <FaPhoneAlt />
                                <span>Your Phone Number</span>
                            </p>
                            <p className="flex items-center gap-3 ml-10">
                                <FaEnvelope />
                                <span>your@email.com</span>
                            </p>
                        </div>
                        <a href="#products"className="ml-10 bg-[#E2838D] text-white px-6 py-3 rounded-lg hover:bg-[#754B43] transition duration-300 mt-6">
                            Make Your Order
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#754B43]/30 mt-10 py-5 text-center">
                <p className="text-sm">
                    &copy; 2026 Zihntech. All rights reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;
