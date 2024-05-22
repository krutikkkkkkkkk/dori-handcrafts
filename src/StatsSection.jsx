import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter'
import "./index.css";
import Candidate from "./assets/Candidate.png";
import Art from "./assets/Art and design.png";
import Rating from "./assets/Rating.png";


const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats bg-primary px-10 py-14 flex justify-center">
      <div className="container">
        <div className="flex items-center justify-center flex-wrap gap-8 text-center">
          <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
            <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
              <img src={Rating} alt="Happy Customers" className="h-16 md:h-20" />
              <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Happy <br /> Customers</p>
            </div>
            <Counter id="counter1" endVal={100} trigger={isVisible} />
          </div>
          
          <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
            <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
              <img src={Art} alt="Product Range" className="h-16 md:h-20" />
              <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Product <br /> Range</p>
            </div>
            <Counter id="counter2" endVal={100} trigger={isVisible} />
          </div>
          
          <div className="border-2 border-white text-white p-6 rounded-2xl flex justify-between items-center flex-1">
            <div className="grp flex space-x-4 md:space-x-8 items-center justify-center">
              <img src={Candidate} alt="Women Employed" className="h-16 md:h-20" />
              <p className="text-lg md:text-[26px] text-start leading-6 md:leading-8">Women <br /> Employed</p>
            </div>
            <Counter id="counter3" endVal={100} trigger={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
