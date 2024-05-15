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
   
    


    <section className="relative bg-cover bg-bottom bg-center h-screen flex items-center justify-center text-white"
    style={{
      backgroundImage: "url('https://i.ibb.co/JphgHVf/hero-bg-dori.jpg')",
    }}
  >
    {/* <div className="absolute inset-0 bg-black opacity-100"></div> */}
    <div className="relative text-center z-10 max-w-xl px-4 pb-8 ">
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 py-10">
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
      <h2 className="text-4xl font-bold text-center text-primary mb-12">Peek into our bestsellers!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-primary text-white rounded-xl shadow-lg overflow-hidden px-12 pt-8 pb-6"
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full h-100 object-cover rounded-3xl border-2 border-white"
            />
            <div className="p-4">
              <hr className="mb-4 border-white border-1" />
              <div className="flex justify-between items-center py-2">
              <h3 className="text-2xl font-semibold ">{feature.title}</h3>
                <a
                  href="#"
                  className="bg-primary text-white px-2 rounded-lg hover:bg-primary-dark"
                >
                  <img  src={Arrow} alt="Arrow" style={{width: "40px"}} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container flex justify-center">
      <a
        href="#"
        className="bg-accent px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-dark my-10"
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



   <section className="aunty mx-auto"  >
    <div className="container mx-auto flex  justify-center h-full bg-bottom bg-cover  px-16 grid-rows-2" style={{backgroundImage: "url('https://i.ibb.co/p1FmbG9/Women-Empowerment.jpg')"}}>
      <div className="col w-1/2 mt-20">
        <h6 className="text-3xl font-bold text-primary mb-12">Creating opportunities for rural women to <br />
         handcraft India’s growth.</h6>
        <p className="text-xl text-primary  w-10/12">
        Your every purchase matters because their craft at Dori Handcrafts is no longer called a household but a way of fueling their livelihood. 
        <br />
        <br />
        Seeing our founder making macrame products as a hobby, to creating a memorable brand by empowering women artisans is a dream come true.      </p>


      </div>
      <div className="col h-full flex-1 w-full">
        <img className="h-full w-full" src="https://i.ibb.co/dGX4xL1/Aunty.png" alt="Aunty" />
      

      </div>

    </div>
    

   </section>

   <section className="stats bg-primary px-10 py-14 flex justify-center">
      <div className="container">
        <div className="flex item-center justif flex-wrap gap-8 text-center">

          <div className="border-2 border-white text-white p-6 rounded-2xl flex p-4 justify-between item-center flex-1">
            <div className="grp flex space-x-8 item-center justify-center">
              <img src={Rating} alt="Candidate" className="h-20" />
              <p className="text-[26px] text-start leading-8">Happy <br /> Customers</p>
            </div>
            <h2 className="text-[3rem]  font-bol font-count">100+</h2>   
          </div>
             
          
          <div className="border-2 border-white text-white p-6 rounded-2xl flex p-4 justify-between item-center flex-1">
            <div className="grp flex space-x-8 ">
              <img src={Rating} alt="Candidate" className="h-20" />
              <p className="text-[26px] text-start leading-8">Product <br /> Range</p>
            </div>
            <h2 className="text-[3rem]   font-bol font-count">100+</h2>   
          </div>
             
          
          <div className="border-2 border-white text-white p-6 rounded-2xl flex p-4 justify-between item-center flex-1">
            <div className="grp flex space-x-8 ">
              <img src={Rating} alt="Candidate" className="h-20" />
              <p className="text-[26px] text-start leading-8">Women <br /> Employed</p>
            </div>
            <h2 className="text-[3rem]  font-bol font-count">100+</h2>   
          </div>
             

        </div>
      </div>
    </section>

   <section className="bestsellers">
   <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-primary mb-12 py-16">Bestsellers</h2>
      <div className=" border-t-2 border-b-2 border-primary my-10">
        <div className="conatiner px-20">
      <div className="flex flex-warp px-8 my-10 space-x-20">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-primary rounded-lg overflow-hidden text-white px-4 py-4 rounded-lg flex-1"
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="px-4">
              <hr className="my-4 border-white w-full" />
              <div className="flex justify-between items-center py-2">
              <h3 className="text-sm font-semibold ">{feature.title}</h3>

              <a
                  href="#"
                  className="bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  <img  src={Arrow} alt="Arrow" style={{width: "25px"}} />
                </a>

                {/* <a
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
                >
                  Learn More
                </a> */}
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


    <section className="testimonials flex justify-center mx-auto">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 py-16">What our customers say about us?</h2>
        <div className="flex flex-wrap gap-8">
          <div className="bg-primary text-white rounded-lg overflow-hidden px-4 py-4 rounded-lg flex-1">
            <img
              src={Candidate}
              alt="Candidate"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="px-4">
              <hr className="my-4 border-white w-full" />
              <p className="text-lg text-white">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <h3 className="text-lg font-semibold text-white mt-4">John Doe</h3>
              <p className="text-sm text-white">CEO, Company</p>
            </div>
          </div>
          <div className="bg-primary text-white rounded-lg overflow-hidden px-4 py-4 rounded-lg flex-1">
            <img
              src={Art}
              alt="Art"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="px-4">
              <hr className="my-4 border-white w-full" />
              <p className="text-lg text-white">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <h3 className="text-lg font-semibold text-white mt-4">Jane Doe</h3>
              <p className="text-sm text-white">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>



















 </>

  );
}

export default HomePage;