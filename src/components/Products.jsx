const products = [
    {
        id: 1,
        name: "Product 1",
        price: "$29.99",
        image: "/src/assets/img glow.png",
    },
    {
        id: 2,
        name: "Product 2",
        price: "$39.99",
        image: "/src/assets/img2.png",
    },
    {
        id: 3,
        name: "Product 3",
        price: "$49.99",
        image: "/src/assets/img3.png",
    },
    {
        id: 4,
        name: "Product 4",
        price: "$59.99",
        image: "/src/assets/img4.png",
    },
    {
        id: 5,
        name: "Product 5",
        price: "$69.99",
        image: "/src/assets/img5.png",
    },  
    {
        id: 6,
        name: "Product 6",
        price: "$79.99",
        image: "/src/assets/img6.png",
    },
    {
        id: 7,
        name: "Product 7",
        price: "$89.99",
        image: "/src/assets/img7.png",
    },
    {
        id: 8,
        name: "Product 8",
        price: "$99.99",
        image: "/src/assets/img8.png",
    },
    {
        id: 9,
        name: "Product 9",
        price: "$9.99",
        image: "/src/assets/img10.png",
    },
    {
        id: 10,
        name: "Product 10",
        price: "$119.99",
        image: "/src/assets/img glow.png",
    },
    {
        id: 11,
        name: "Product 11",
        price: "$129.99",
        image: "/src/assets/img korea.png",
    }
];

function Products() {
    return (
        <section className="products py-16">

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    Our Skincare Collection
                </h2>

                <p className="mt-2 text-gray-600">
                    Explore our skincare essentials for healthy, radiant skin.
                </p>
            </div>

            {/* Sliding Products */}
            <div className="flex gap-6 overflow-x-auto scroll-smooth mt-8 px-6 pb-4">

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card bg-white rounded-lg shadow-md p-4 min-w-[250px] flex-shrink-0 "
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
``
                        <h3 className="text-lg font-semibold mt-2">
                            {product.name}
                        </h3>

                        <p className="text-gray-600">
                            {product.price}
                        </p>
                    </div>
                ))}
                
                

            </div>
            <button className="bg-[#441B0B] text-white px-6 py-3 rounded-lg hover:bg-[#E2838D]/100 align-center mt-8 mx-auto block">
                    View All Products
                </button>
        </section>
    );
}

export default Products;