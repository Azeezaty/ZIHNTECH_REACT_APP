import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaTag, FaShoppingCart } from 'react-icons/fa';
function Navbar() {
  return (
 
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full bg-[#B5485D]/50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">

            <div className="flex items-center gap-4">
            <FaInstagram />
            <FaWhatsapp />
            <FaPhoneAlt />
            </div>

            <div className="flex items-center gap-4">
            <p>08088917139</p>
            <FaTag />
            <FaShoppingCart />
            </div>

        </div>
        </div>
        <div className="container mx-auto flex justify-between items-center">
            <img src="/src/assets/logo.png" alt="Logo" className="h-30 w-70" />
            <ul className="text-medium font-medium flex flex-row gap-2 p-8 sm:flex-row sm:items-center sm:gap-20 sm:py-4">
            <li><a href="#home" className="text-[#754B43]/100 hover:text-black/400">Home</a></li>
            <li><a href="#about" className="text-[#754B43]/100 hover:text-black/400">About</a></li>
            <li><a href="#services" className="text-[#754B43]/100 hover:text-black/400">Services</a></li>
            <li><a href="#contact" className="text-[#754B43]/100 hover:text-black/400">Contact</a></li>
            </ul>
            <button className="bg-[#E2838D] text-white px-6 py-3 rounded-lg hover:bg-[#441B0B]/100">
            Add to Cart
            </button>

        </div>
    </nav>
  );
}

export default Navbar;

// Website element	Colour
// Navbar	White
// Logo	Mocha Brown
// Hero background	Warm Cream
// Main headings	Mocha Brown
// Buttons	Dusty Rose
// Product section	White
// Product cards	Soft Beige
// Footer	Mocha Brown