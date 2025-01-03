import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Chadars = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] ">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center"> CHADARS</h1>
           {/* View Collection Button */}
           <div className="mt-2 flex justify-center items-center">
            <Link href={"/Chadars"}><button className="bg-white py-2 px-6  text-black  border-2 hover:border-black">
              View All
            </button></Link>
          </div> 

          {/* Product Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 shadow-lg shadow-slate-400">
            {/* Product 1 */}
            <div className="w-full h-auto ">
              <Image
                src={'/images/chadar1.png'}
                height={700}
                width={700}
                alt="Abayas"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-2 text-[#2A254B]">
                <p className="py-2 text-center font-normal">BLUE PETAL CHADAR</p>
                <p className=" text-center font-sans">Rs. 3,995  </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chadar2.png'}
                height={700}
                width={700}
                alt="Formal Hijab"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-2 text-[#2A254B]">
                <p className="py-2 text-center">MULTI MOTIF CHADAR</p>
                <p className=" text-center font-sans">Rs. 3,995  </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chadar3.png'}
                height={1000}
                width={1000}
                alt="Hijabs"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-2 text-[#2A254B]">
                <p className="py-2 text-center">fEROZA BORDER CHADAR</p>
                <p className=" text-center font-sans">Rs. 3,995  </p>
              </div>
            </div>

           {/* Product 4*/}
            <div className="w-full h-auto">
              <Image
                src={'/images/chadar4.png'}
                height={700}
                width={700}
                alt="Chadars"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-2 text-[#2A254B]">
                <p className="py-2 text-center">RED PETAL CHADAR</p>
                <p className=" text-center font-sans">Rs. 3,995  </p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  )
}

export default Chadars;