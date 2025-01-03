import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Abayas = () => {
  return (
    <>
      <section>
        <div className="animate-bounceInRight px-4 md:px-8 py-12 text-[#2A254B] ">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center">ABAYAS</h1>
           {/* View Collection Button */}
           <div className="mt-2 flex justify-center items-center">
           <Link href={"/Abayas"}> <button className="bg-white py-2 px-6  text-black  border-2 hover:border-black">
              View All
            </button></Link>
          </div> 

          {/* Product Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 shadow-lg shadow-slate-400">
            {/* Product 1 */}
            <div className="w-full h-auto ">
              <Image
                src={'/images/abaya1.png'}
                height={700}
                width={700}
                alt="Abayas"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-center font-normal">GREEN FANCY BUTTON ABAYA</p>
                <p className=" text-center font-semibold">Rs.4,900</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/abaya2.png'}
                height={700}
                width={700}
                alt="Formal Hijab"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-center">BLUE FANCY BUTTONS</p>
                <p className=" text-center font-semibold ">Rs. 4,900</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/abaya3.png'}
                height={1000}
                width={1000}
                alt="Hijabs"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-center">LOOP BUTTON BLUE ABAYA</p>
                <p className=" text-center font-semibold ">Rs. 4,900</p>
              </div>
            </div>

           {/* Product 4*/}
            <div className="w-full h-auto">
              <Image
                src={'/images/abaya4.png'}
                height={700}
                width={700}
                alt="Chadars"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-center">BLUE EMBROIGRY WITH INNER ABAYA</p>
                <p className=" text-center font-semibold ">Rs. 7,500</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  )
}

export default Abayas;