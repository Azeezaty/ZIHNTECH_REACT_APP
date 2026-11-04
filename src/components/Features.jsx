import {
  FaShoppingCart,
  FaBoxOpen,
  FaTruck,
  FaStore,
  FaUndo,
} from "react-icons/fa";

function Features() {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

        {/* Add to Cart */}
        <div className="flex flex-col items-center gap-3 rounded-xl bg-[#F8EDE9] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FaShoppingCart className="text-3xl text-[#B5485D]" />
          <h3 className="text-lg font-semibold">Add to Cart</h3>
          <p className="text-sm text-gray-600">
            Easily add your favourite products to your shopping cart.
          </p>
        </div>

        {/* Secure Packaging */}
        <div className="flex flex-col items-center gap-3 rounded-xl bg-[#F8EDE9] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FaBoxOpen className="text-3xl text-[#B5485D]" />
          <h3 className="text-lg font-semibold">Secure Packaging</h3>
          <p className="text-sm text-gray-600">
            Your beauty essentials are carefully packaged for you.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center gap-3 rounded-xl bg-[#F8EDE9] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FaTruck className="text-3xl text-[#B5485D]" />
          <h3 className="text-lg font-semibold">Fast Delivery</h3>
          <p className="text-sm text-gray-600">
            Get your favourite skincare products delivered to your doorstep.
          </p>
        </div>

        {/* Store Pickup */}
        <div className="flex flex-col items-center gap-3 rounded-xl bg-[#F8EDE9] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FaStore className="text-3xl text-[#B5485D]" />
          <h3 className="text-lg font-semibold">Store Pickup</h3>
          <p className="text-sm text-gray-600">
            Enjoy the convenience of picking up your order from our store.
          </p>
        </div>

        {/* Return Policy */}
        <div className="flex flex-col items-center gap-3 rounded-xl bg-[#F8EDE9] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FaUndo className="text-3xl text-[#B5485D]" />
          <h3 className="text-lg font-semibold">Return Policy</h3>
          <p className="text-sm text-gray-600">
            Shop with confidence with our return policy for eligible purchases.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;