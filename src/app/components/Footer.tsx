

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-8 bg-orange-800 mt-8'>
        <div className="flex flex-wrap gap-2 md:gap-[60px] lg:gap-[60px]">

       

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-[20px] md:text-xl font-bold">Contact Us</h1>
            <div className='mt-4'>
            <p className='w-[300px]'>Abaya.pk has a dedicated customer service team. 
            We are available at your service regarding your orders and queries.
             We are connected to you with WhatsApp, E-mail and social media platforms, managed by hijabi.pk</p>
            <p className='font-bold mt-4'>+92-321-2278111</p>
            <p className='font-bold mt-4'>support@abaya.pk</p>
            <p className='font-bold mt-4'>Address: 32/18 A-Block Shabbirabad Karachi</p>
            </div>
          </div>
          <div>
           <h2 className='  h-[20px] text-[20px] w-[140px]  mb-9 font-bold  text-[#FAFAFA] 3%'> New Arrivals</h2>           
            <p className="w-[90px] h-[22px] font-Poppins mb-5  font-normal text-[16px] text-[#FAFAFA]">Abayas</p>           
            <p className="font-Poppins text-[16px] mb-4 font-normal w-[90px] text-[#FAFAFA] h-[19px]">Hijabs</p>
           <p className="font-Poppins text-[16px] mb-5  font-normal w-[120px] text-[#FAFAFA] h-[19px]">Chadars</p>
           <p className="font-Poppins text-[16px] mb-5  font-normal w-[128px] text-[#FAFAFA] h-[19px]">Hijabs Caps</p>           
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[84px] text-[#FAFAFA] h-[19px]">Accessories</p>
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[100px] text-[#FAFAFA] h-[19px]">Eastern Wear</p>
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[120px] text-[#FAFAFA] h-[19px]">For International Order</p>
                        </div>
                       

           <div>
           <h2 className='  h-[20px] text-[20px] w-[84px]  mb-9 font-bold  text-[#FAFAFA] 3%'> Reviews</h2>
           <p className="w-[100px] h-[19px] font-Poppins mb-5  font-normal text-[16px] text-[#FAFAFA]"> About Us</p>
           <p className="font-Poppins text-[16px] mb-4 font-normal w-[100px] text-[#FAFAFA] h-[19px]">Contact Us</p>
           <p className="font-Poppins text-[16px] mb-5  font-normal w-[100px] text-[#FAFAFA] h-[19px]">Privacy Policy</p>
           <p className="font-Poppins text-[16px] mb-5  font-normal w-[140px] text-[#FAFAFA] h-[19px]">Terms & Conditions</p>
           <p className="font-Poppins text-[16px] mb-5  font-normal w-[120px] text-[#FAFAFA] h-[19px]">Terms of service</p>
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[120px] text-[#FAFAFA] h-[19px]">Refund policy</p>
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[180px] text-[#FAFAFA] h-[19px]">Delivery & Return Policy</p>
           <p className="font-Poppins text-[16px] mb-5 font-normal w-[150px] text-[#FAFAFA] h-[19px]">Affiliate Marketing</p>
          </div>

           {/* Mailing List Section */}
           <div className="text-white w-full sm:w-auto">
           <h1 className="text-[20px] md:text-xl font-bold">Sign up and save</h1>
           <p className='font-sans mt-4'>Subscribe to get special offers, free giveaways, <br/>and once-in-a-lifetime deals.</p>
            <h1 className="text-lg md:text-xl font-semibold mt-20">Enter Your Email here</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                <Link href="/signIn">
                Submit
                </Link>
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>© 2025 Abaya.pk Brand of Snapit Ventures. All Rights Reserved.</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'https://www.linkedin.com/in/kashaf-tariq-1400072b6/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;