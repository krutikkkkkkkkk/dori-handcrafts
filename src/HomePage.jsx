import React from "react";
import "./index.css";
import Arrow from "./assets/arrow.svg";
import Candidate from "./assets/Candidate.png";
import Art from "./assets/Art and design.png";
import Rating from "./assets/Rating.png";
  
const features = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/GVrRTXS/Product.jpg",
    title: "Cushions",
    description: "This is a description of feature 1.",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/GVrRTXS/Product.jpg",
    title: "Hand Bags",
    description: "This is a description of feature 2.",
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/GVrRTXS/Product.jpg",
    title: "Wall Hangings",
    description: "This is a description of feature 3.",
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/GVrRTXS/Product.jpg",
    title: "Swings",
    description: "This is a description of feature 4.",
  },
];


function HomePage() {
  return (
    <>
<header className="bg-primary text-white py-8 shadow-md">
      <nav className="container px-16 mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <img src="https://i.ibb.co/fYSqg3g/Dori-logo.png" style={{width: "80px"}} alt="Dori" />
        </a>
        <ul id="menu" className="hidden lg:flex space-x-8">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* <input type="text" placeholder="Search..." className="hidden lg:block px-4 py-1 rounded-lg text-gray-900"/> */}
          <a href="#" className="hidden lg:block bg-white text-primary px-4 py-1 rounded-lg hover:bg-gray-100">Login</a>

          <button id="mobile-menu-btn" className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {/* <!-- Mobile Menu --> */}
      <ul id="mobile-menu" className="hidden flex flex-col space-y-2 mt-4 px-4 lg:hidden">
        <li><a href="#" className="block hover:underline">Home</a></li>
        <li><a href="#" className="block hover:underline">About Us</a></li>
        <li><a href="#" className="block hover:underline">Shop</a></li>
        <li><a href="#" className="block hover:underline">Categories</a></li>
        <li><a href="#" className="block hover:underline">Contact Us</a></li>
        <li><input type="text" placeholder="Search..." className="block px-4 py-1 rounded-lg text-gray-900"/></li>
        <li><a href="#" className="block bg-white text-primary px-4 py-1 rounded-lg hover:bg-gray-100">Login</a></li>
      </ul>
    </header>
   
    
<section
  className="relative bg-cover bg-bottom bg-center h-screen flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('https://i.ibb.co/JphgHVf/hero-bg-dori.jpg')",
  }}
>
  <div className="relative text-center z-10 max-w-xl px-4 pb-8">
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 py-10">
      Crafting Life’s <br />
      Little Luxuries
    </h1>
    <a
      href="#"
      className="bg-primary px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-primary-dark my-10"
    >
      View More
    </a>
  </div>
</section>





    <section className="container mx-auto py-16 bg-accent">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Peek into our bestsellers!</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-4 md:px-8 lg:px-24">
    {features.map((feature) => (
      <div
        key={feature.id}
        className="bg-primary text-white rounded-xl shadow-lg overflow-hidden px-6 md:px-8 lg:px-12 pt-8 pb-6"
      >
        <img
          src={feature.imageUrl}
          alt={feature.title}
          className="w-full h-96 md:h-80 lg:h-[477px] object-cover rounded-3xl border-2 border-white"
        />
        <div className="p-4">
          <hr className="mb-4 border-white border-1" />
          <div className="flex justify-between items-center py-2">
            <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
            <a
              href="#"
              className="bg-primary text-white px-2 rounded-lg transform transition-transform duration-300 hover:rotate-45"
            >
              <img src={Arrow} alt="Arrow" style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-10">
    <a
      href="#"
      className="bg-accent px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-dark"
    >
      View More
    </a>
  </div>
</section>


   <section className="AboutUs mx-auto container py-20">

    <div className="container mx-auto py-16 px-16 bg-accent flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center text-primary mb-12 py-5">Why we started this?</h1>
        <p className="text-center text-lg text-primary  w-10/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          </p>
          </div>
          
         <div className="container flex justify-center">
         <hr className="mb-4 border-primary border-4 w-20" />
         </div>


   </section>

<section className="aunty mx-auto">
  <div
    className="container mx-auto flex flex-col lg:flex-row justify-center h-full bg-bottom bg-cover px-4 md:px-8 lg:px-16 pt-16"
    style={{ backgroundImage: "url('https://i.ibb.co/p1FmbG9/Women-Empowerment.jpg')" }}
  >
    <div className="col w-full lg:w-1/2 mt-10 lg:mt-20">
      <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-6 md:mb-8 lg:mb-12">
        Creating opportunities for rural women to <br />
        handcraft India’s growth.
      </h6>
      <p className="text-base md:text-lg lg:text-xl text-primary w-full md:w-10/12">
        Your every purchase matters because their craft at Dori Handcrafts is no longer called a household but a way of fueling their livelihood.
        <br />
        <br />
        Seeing our founder making macrame products as a hobby, to creating a memorable brand by empowering women artisans is a dream come true.
      </p>
    </div>
    <div className="col flex-1 w-full mt-8 lg:mt-0 lg:ml-10">
      <img className="h-full w-full object-cover rounded-xl" src="https://i.ibb.co/dGX4xL1/Aunty.png" alt="Aunty" />
    </div>
  </div>
</section>


<section className="stats bg-primary px-10 py-14 flex justify-center">
  <div className="container">
    <div className="flex items-center justify-center flex-wrap gap-8 text-center">
      <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
        <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
          <img src={Rating} alt="Happy Customers" className="h-16 md:h-20" />
          <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Happy <br /> Customers</p>
        </div>
        <h2 className="text-3xl md:text-[3rem] font-bold font-count">100+</h2>   
      </div>
      
      <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
        <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
          <img src={Rating} alt="Product Range" className="h-16 md:h-20" />
          <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Product <br /> Range</p>
        </div>
        <h2 className="text-3xl md:text-[3rem] font-bold font-count">100+</h2>   
      </div>
      
      <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
        <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
          <img src={Rating} alt="Women Employed" className="h-16 md:h-20" />
          <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Women <br /> Employed</p>
        </div>
        <h2 className="text-3xl md:text-[3rem] font-bold font-count">100+</h2>   
      </div>
    </div>
  </div>
</section>


<section className="bestsellers">
  <div className="container mx-auto py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Bestsellers</h2>
    <div className="border-t-2 border-b-2 border-primary my-10">
      <div className="container px-4 md:px-10 lg:px-20">
        <div className="flex flex-wrap justify-center gap-16 my-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-primary rounded-lg overflow-hidden text-white p-4 md:p-6 flex-1 min-w-[250px] max-w-[350px]"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="px-2 md:px-4">
                <hr className="my-4 border-white w-full" />
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
                  <a
                    href="#"
                    className="bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <img src={Arrow} alt="Arrow" style={{ width: "25px" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    <div className="container flex justify-center">
      <a
        href="#"
        className="bg-accent px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-dark my-10"
      >
        View all products
      </a>
      </div>


    </div>

  
   </section>


    <section className="testimonials flex justify-center mx-auto h-[900px] bg-cover bg-bottom bg-no-repeat" style={{backgroundImage: "url('https://i.ibb.co/7nWhpb4/Frame-16.jpg')"}}>
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 py-16">What our customers say about us?</h2>
        <div className="flex flex-wrap gap-8">
         
        </div>
      </div>
    </section>



<section className="contact mx-auto flex justify-center">
<div className="conatiner bg-accent  text-center p-6 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl md:text-6xl font-bold text-primary mb-4 leading-10">
          Ready to get <br /> Sophisticated
        </h2>
     
        <div className="flex justify-center text-primary space-x-4 mt-4">
        
          <button className="bg-accent border border-1 border-primary  py-2 px-6  text-start rounded-full item-bottom" style={{alignSelf: "end"}}>
            Shop
          </button>

          <div className="emailgrp flex flex-col">
          <input
          type="email"
          placeholder="Email"
          className=" py-2 w-[100%] border-b-2 border-primary placeholder:text-primary bg-transparent mb-4 w-full"
        />
         <button className="bg-accent border border-1 border-primary  text-start px-6 py-2 rounded-full">
            Newsletter
          </button>

          </div>
         
        </div>
      </div>

      </div>
</section>

<section className="footer">
<div className="border-t border-gray-300 py-6 text-start">
      
        <div className="container text-primary flex justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>All Products</li>
              <li>Categories</li>
              <li>Support</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Information</h3>
            <ul>
              <li>FAQs</li>
              <li>Policy</li>
              <li>Terms & Conditions</li>
              <li>Return & Exchange</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Socials</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>X</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div style={{alignContent: "center"}}>
          <img src="https://i.ibb.co/RD1BmW0/dori-brown.png" style={{width: "100px"}} alt="Dori" />
          </div>
        </div>
      </div>
        </div>

      <div className="border-t border-gray-300 py-6 text-center flex justify-center mx-auto">
      <div className="container flex justify-between px-8">
      <p>&copy; 2023 Kasturi Dori Pvt Ltd. All Rights Reserved.</p>
        <button className="mt-4 text-brown-800">Back to Top ↑</button>
      </div>
      </div>

</section>














 </>

  );
}

export default HomePage;