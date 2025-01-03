

import { HijabProduct } from "@/app/components/HijabProduct";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";


interface BlogPageProps {
  params: Promise<{ slug: string }>; // Updated to reflect that params is a Promise
}

// Generate static params for all articles
export async function generateStaticParams() {
  return HijabProduct.map((hijab) => ({
    slug: hijab.slug,
  }));
}

// Blog Page component
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params; // Await the resolution of params

  // Find the article based on the slug
  const hijab = HijabProduct.find((a) => a.slug === slug);

  if (!hijab) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <Header/>
    <div className=" font-[sans-serif] p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
      {/* Article Image */}
      <div className="flex  w-full h-100 justify-center items-center">
        <Image
          src={hijab.image}
          alt={hijab.title}
          width={800}
          height={800}
          className="w-full h-96 object-fill mb-6 rounded-t-lg"
        />
      </div>

      {/* Article Metadata */}
      <div>
        <div className="w-full">
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800">{hijab.title}</h1>
        <p className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-2"> Rs.{hijab.price}</p>
        <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-lg px-2.5 bg-white- text-yellow-400 rounded-full">
              <p>4</p>
              <svg className="w-[13px] h-[13px] fill-yellow-400" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">253 ratings and 27 reviews</p>
            </div>
            <p className="text-gray-800 text-sm mt-2">{hijab.paragraph}</p>
            <p className="text-gray-700 text-sm mt-2">{hijab.order}</p>
        <hr className="my-6 border-gray-300" />

      {/* Sizes and buttons */}
      <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">Sizes</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <button type="button"
              className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">SM</button>
            <button type="button"
              className="w-10 h-9 border border-blue-600 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">MD</button>
            <button type="button"
              className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">LG</button>
            <button type="button"
              className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">XL</button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button type="button"
              className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  ">Add
              to wishlist</button>
            <button type="button"
              className="px-4 py-3 w-[45%] border border-blue-600 bg-blue-900 hover:bg-blue-700 text-white text-sm font-semibold  ">Add
              to cart</button>
          </div>
        </div>
      <div>
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mt-6">Product Information</h2>
       <p className="text-lg mb-4 mt-4 text-gray-800">{hijab.content}</p>
      </div>
      
      <div>
        
        <li className="text-lg font-semibold text-gray-700">{hijab.p1}</li>
        <li className="text-lg font-semibold text-gray-700">{hijab.p2}</li>
        <li className="text-lg font-semibold text-gray-700">{hijab.p3}</li>
      </div>
      </div>
      </div>
      </div>
      </div> 
    </div>
    <Footer/>
    </div>
  );
}
