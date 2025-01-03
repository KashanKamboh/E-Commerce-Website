"use client"
import Link from 'next/link';
import { AbayaProduct } from '../components/AbayaProducts';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className='bg-gray-50'>
      <Header/>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 p-6 shadow-lg">
      {AbayaProduct.map((abaya) => (
        
        <div key={abaya.slug} className="border rounded-lg shadow-lg p-4">
         <Link href={`/Abayas/${abaya.slug}`}> <Image
            src={abaya.image}
            alt={abaya.title}
            width={400}
            height={400}
            className="w-full h-100 rounded-t-lg"
          /></Link>
          <h2 className="text-xl font-bold mt-2 text-center">{abaya.title}</h2>
          <p className='text-normal text-center'> Rs.{abaya.price}</p>
          <div className='justify-center items-center flex'>
          <button
             className="text-white w-80   bg-blue-950 px-4 py-2 rounded-lg hover:bg-blue-700 scale-100 hover:scale-110 mt-6 ">Add to Cart
          </button></div>
          </div>
          ))}
        </div>
       
    <Footer/>
    
    </div>
  )
}

export default HomePage;

