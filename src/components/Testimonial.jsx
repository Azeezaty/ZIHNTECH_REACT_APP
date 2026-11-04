function Testimonial() {
    return (
        <section className="testimonial py-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    What Our Customers Say
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
                <div className="testimonial-card bg-[#F8EDE9] p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 mb-4">
                        "I absolutely love the products from this skincare collection! My skin has never felt better."
                    </p>
                    <h3 className="text-lg font-semibold">Jane Doe</h3>
                </div>
                <div className="testimonial-card bg-[#F8EDE9] p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 mb-4">
                        "The quality and effectiveness of these skincare products are unmatched. Highly recommend!"
                    </p>
                    <h3 className="text-lg font-semibold">John Smith</h3>
                </div>
                <div className="testimonial-card bg-[#F8EDE9] p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 mb-4">
                        "I've tried different lip balms, but this one truly stands out. The cracks on my lips are gone and it feels softer."
                    </p>
                    <h3 className="text-lg font-semibold">Emily Johnson</h3>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;