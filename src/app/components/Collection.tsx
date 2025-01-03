"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Collection = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!visibleIndexes.includes(index)) {
              setVisibleIndexes((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll('.product-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [visibleIndexes]);

  const products = [
    { src: '/images/pic1.jpg', alt: 'Abayas', label: 'Abayas' },
    { src: '/images/pic2.png', alt: 'Formal Hijabs', label: 'Formal Hijabs' },
    { src: '/images/pic3.png', alt: 'Hijabs', label: 'Hijabs' },
    { src: '/images/pic4.png', alt: 'Chadars', label: 'Chadars' },
  ];

  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center">
          Collection List
        </h1>

        {/* Product Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- mt-12">
          {products.map((product, index) => (
            <div
              key={index}
              data-index={index}
              className={`product-item w-full h-auto transform transition-transform duration-700 ${
                visibleIndexes.includes(index) ? 'animate-bounceInRight opacity-100' : 'opacity-0 translate-x-full'
              }`}
            >
              <Image
                src={product.src}
                height={700}
                width={700}
                alt={product.alt}
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-center">{product.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
