import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section
        className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen p-4 shadow-lg shadow-slate-400"
      >
        {/* Responsive Image */}
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay Content (Hidden on larger screens) */}
        <div className=" animate-bounceInRight relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 sm:hidden">
          <h1 className="text-white text-2xl font-bold mb-4">
            Welcome to Zoe Abayas Collection
          </h1>
          <p className="text-white text-sm mb-6">
            Discover amazing deals and high-quality products tailored just for you.
          </p>
          
          {/* Shop Now Button */}
         <Link href={"/Abayas"}> <button className="bg-orange-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300">
            Shop Now
          </button></Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;




