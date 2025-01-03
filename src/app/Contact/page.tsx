

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ContactPage =()=>{
  return(
    <div>
      <Header/>

    <div className="grid sm:grid-cols-2 items-center  gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] mt-10">
      <div className='items-center justify-center'>
    
      {/*<!-- modify this form HTML and place wherever you want your form -->*/}
<form
  action="https://formspree.io/f/meoorzbn"
  method="POST"
  className=" mt-4 "
>
<label >
    Name:
    <input type="name" name="name" 
    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-4" ></input>
  </label>
               
  <label>
    Your email:
    <input type="email" name="email"
     className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-4" ></input>
  </label>
  <label>
    Subject:
    <input type="text" name="subject"
     className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-4" ></input>
  </label>
  <label>
    Your message:
    <textarea name="message"
     className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent mt-4"></textarea>
  </label>
  {/*<!-- your other form fields go here -->*/}
  <button type="submit"
  className="text-white bg-blue-800 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
</form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default ContactPage



