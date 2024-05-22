import React from "react";
import "./index.css";
import Arrow from "./assets/arrow.svg";
import Candidate from "./assets/Candidate.png";
import Art from "./assets/Art and design.png";
import Rating from "./assets/Rating.png";
import star from "./assets/Star.svg"
import UpArrow from "./assets/UpArrow.svg"
import sideArrow from "./assets/arrow-side-up.svg"
import sideArrowB from "./assets/arrow-side-up-b.svg"
import StatsSection from './StatsSection.jsx'

  
const features = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/GVrRTXS/Product.jpg",
    title: "Cushions",
    description: "This is a description of feature 1.",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/gZYzGMN/Handbag.jpg",
    title: "Hand Bags",
    description: "This is a description of feature 2.",
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/891VZYq/Wall-Hanging.jpg",
    title: "Wall Hangings",
    description: "This is a description of feature 3.",
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/VJrLg6q/Swing.jpg",
    title: "Swings",
    description: "This is a description of feature 4.",
  },
];


const testimonials = [
  {
    name: 'Deepa',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg', 
    text: 'Absolutely thrilled with my new macrame cushion! It has single-handedly transformed the ambiance of my home.',
    rating: 5,
  },
  {
    name: 'Dhruv',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyTZELsW9Qag5l84uBtoes0z0pDCbCALeUAd-6HIDZA&s', 
    text: 'Got the hang-bag from Dori for my girlfriend. It’s become her new favorite accessory, and she’s absolutely in love with it.',
    rating: 5,
  },
  {
    name: 'Krutik',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSJLd5w25w403fBGB6IpH-DVEZnQ4tglEKP5JP1k72g&s', 
    text: 'I couldn’t be more thrilled with my decision. This swing has truly transformed my patio into a serene oasis.',
    rating: 5,
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
              <path  stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
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
  className="relative bg-cover bg-bottom  h-screen flex items-center justify-center text-white"
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
      className="bg-primary px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-primary-dark my-10 flex items-center justify-center w-[max-content] mx-auto peer"
    >
     <span className="peer px-4">View More</span> <img src={sideArrow} alt="" className="h-[1rem] w-[1rem]   transform transition-transform duration-300 peer-hover:rotate-45" />
    </a>
  </div>
</section>





    <section className="container mx-auto py-16 bg-accent">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 px-4">Peek into our bestsellers!</h2>
 <div className="border-t-2 border-b-2 border-primary my-10">
      <div className="container px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 md:gap-16 gap-4 my-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-primary rounded-lg overflow-hidden text-white p-4 md:p-6 flex flex-col items-center"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-[150px] md:h-[500px] aspect-square object-cover rounded-xl"
              />
              <div className="px-2 md:px-4 w-full">
                <hr className="my-4 border-white w-full" />
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
                  <a
                    href="#"
                    className="bg-primary text-white rounded-lg hover:bg-primary-dark transform transition-transform duration-300 hover:rotate-45"
                  >
                    <img src={Arrow} alt="Arrow" className="w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  <div className="flex justify-center mt-10">
  <a
        href="#"
        className="bg-accent px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-dark my-10 w-[max-content] mx-auto flex items-center justify-center"
      >
     <span className="peer px-4">View more</span> <img src={sideArrowB} alt="" className="h-[1rem] w-[1rem]   transform transition-transform duration-300 peer-hover:rotate-45" />
      </a>
  </div>
</section>


   <section className="AboutUs mx-auto container md:py-20 py-4">

    <div className="container mx-auto md:py-16 md:px-16 px-4 py-2 bg-accent flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center text-primary md:mb-12 mb-2 md:py-5 py-2">Why we started this?</h1>
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

<section className="aunty mx-auto my-auto">
  <div
    className="container mx-auto flex flex-col lg:flex-row justify-center h-full bg-bottom bg-cover px-4 md:px-8 lg:px-16 pt-16"
    style={{ backgroundImage: "url('https://i.ibb.co/p1FmbG9/Women-Empowerment.jpg')" }}
  >
    <div className="col w-full lg:w-1/2 md:mt-10 mt-4 lg:mt-20">
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


<StatsSection/>



   <section className="bestsellers">
  <div className="container mx-auto py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Bestsellers</h2>
    <div className="border-t-2 border-b-2 border-primary my-10">
      <div className="container px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 md:gap-16 gap-4 my-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-primary rounded-lg overflow-hidden text-white p-4 md:p-6 flex flex-col items-center"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-[150px] md:h-[500px] aspect-square object-cover rounded-xl"
              />
              <div className="px-2 md:px-4 w-full">
                <hr className="my-4 border-white w-full" />
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
                  <a
                    href="#"
                    className="bg-primary text-white rounded-lg hover:bg-primary-dark transform transition-transform duration-300 hover:rotate-45"
                  >
                    <img src={Arrow} alt="Arrow" className="w-6" />
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
        className="bg-accent px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-dark my-10 w-max flex items-center justify-center"
      >
        <span className="peer px-4">View all products</span>
        <img src={sideArrowB} alt="" className="h-4 w-4 transform transition-transform duration-300 peer-hover:rotate-45" />
      </a>
    </div>
  </div>
</section>



   <section className="testimonials flex justify-center mx-auto h-auto md:h-[900px] bg-cover bg-bottom bg-no-repeat px-4" style={{ backgroundImage: "url('https://i.ibb.co/7nWhpb4/Frame-16.jpg')" }}>
  <div className="container mx-auto py-16 md:py-20">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-8 md:mb-12">What our customers say about us?</h2>
    <div className="flex flex-wrap justify-center md:px-14 py-10 gap-8 md:gap-10">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-none border border-primary text-primary py-4 rounded-2xl shadow-lg flex flex-col items-center w-full md:w-1/3 lg:w-1/4 h-auto md:h-[440px]">
          <div className="flex items-center justify-between space-x-4 mb-4 w-full px-4">
            <h3 className="text-lg">{testimonial.name}</h3>
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-[1px] border-white object-cover" />
          </div>
          <div className="testimonial-text h-auto md:h-[60%] border-x-0 border-y-2 border-primary flex text-center justify-center items-center text-white bg-primary opacity-60 px-4 py-6 md:py-0">
            <p className="text-sm md:text-lg w-full md:w-[80%]">{testimonial.text}</p>
          </div>
          <div className="flex space-x-1 justify-start py-6 w-full px-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <img key={i} src={star} alt="star" className="w-6 h-6 md:w-[38px] md:h-[38px]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




<section className="contact mx-auto flex justify-center py-12 md:py-20">
  <div className="container bg-accent text-center px-6 py-12 md:px-10 md:py-16">
    <div className="mb-8">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-primary mb-8 md:mb-12 leading-tight md:leading-none">
        Ready to get <br /> Sophisticated
      </h2>
     
      <div className="flex flex-col md:flex-row justify-center items-center text-primary space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <button className="bg-accent text-2xl md:text-3xl border border-primary py-4 px-6 rounded-full md:self-end w-[max-content] flex items-center">
          <span className="peer px-4">Shop</span>  <img src={sideArrowB} alt="" className="h-[1rem] w-[1rem]   transform transition-transform duration-300 peer-hover:rotate-45" />
        </button>

        <div className="emailgrp flex flex-col items-center md:items-start w-full md:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-auto text-xl md:text-2xl lg:text-3xl border-b-2 border-primary placeholder:text-primary bg-transparent mb-4 md:mb-8 py-2 px-4"
          />
          <button className="bg-accent w-full text-start text-2xl md:text-3xl border border-primary py-4 px-6 rounded-full mt-4 md:mt-0 w-[max-content] flex items-center justify-between">
            <span className="peer">Newsletter</span>  <img src={sideArrowB} alt="" className="h-[1rem] w-[1rem]   transform transition-transform duration-300 peer-hover:rotate-45" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="footer bg-accent">
  <div className="border-t border-gray-300 py-12 px-10 text-start">
    <div className="container text-primary mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
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

        <div className="flex justify-center lg:justify-start items-center">
          <img src="https://i.ibb.co/RD1BmW0/dori-brown.png" className="w-20" alt="Dori" />
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-300 py-6 text-center">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <p>&copy; 2023 Kasturi Dori Pvt Ltd. All Rights Reserved.</p>
      <button className="mt-4 md:mt-0 text-brown-800 flex text-lg items-center">Back to Top <span className="px-4"><img src={UpArrow} alt="" className="h-[3rem] w-[3rems]" /></span></button>
    </div>
  </div>
</section>



 </>

  );
}

export default HomePage;