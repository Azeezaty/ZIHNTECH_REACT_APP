function Hero() {
  return (
   <section
  className="font-sans relative h-[80vh] bg-cover bg-center mt-30"
  style={{ backgroundImage: "url('/src/assets/imgniu.png')" }}>

  <div className="absolute inset-0 bg-black/70"></div>

  
  <div className="relative z-10 container mx-auto px-6 py-20" >
    <h1 className="text-4xl font-bold text-white mt-30">
      Your Skincare Journey Starts Here.
    </h1>

    <p className="text-lg text-white mt-8">
     From everyday skincare essentials to your favourite beauty finds, <br />explore our collection and shop products to complement your skincare routine.
    </p>
    <button className="bg-[#E2838D] border border-white/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.7)] hover:bg-[#441B0B]/50 text-white px-8 py-3 rounded-xl transition-all duration-300 rounded-lg mt-8">
    Shop Now
    </button> 
  </div>
  
</section>
  );
}

export default Hero;