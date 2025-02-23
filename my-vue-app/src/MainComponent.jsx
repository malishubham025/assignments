import React from "react";
import { useRef, useState, useEffect } from "react";
import DataContext from "./Context";
import { Controls } from "./CarouselControls";
import { waterData,LandData,kidsData } from "./data";
import CategorySliderbar from "./CategorySidebar";
import RideCard from "./RideCard";
import {motion} from "motion/react";
function Carousel() {
  
  const containerRef = useRef(null); // Ref for the carousel container
  const [position, setPosition] = useState(0); // Track scroll position
  const [maxScroll, setMaxScroll] = useState(0); // Track maximum scroll position
  const [state, setState] = useState(true); 
  const {data,setData}=React.useContext(DataContext);
  // Calculate the maximum scroll position
  useEffect(() => {
    if (containerRef.current) {
      
      // let total=0;
      
      function calcmaxWidth(){
        let totalChildrenWidth = 0;
        const containerWidth = containerRef.current.offsetWidth;
        Array.from(containerRef.current.children).map((child)=>{
          totalChildrenWidth=totalChildrenWidth+child.offsetWidth + 16;
        })
        setMaxScroll(totalChildrenWidth - containerWidth);
        console.log(totalChildrenWidth - containerWidth);
      }
      calcmaxWidth();
      window.addEventListener("resize", calcmaxWidth);
      
      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", calcmaxWidth);
      
     
    }
  }, []);

  // Scroll left
  const handleLeftClick = () => {

    setPosition((prev) => Math.max(prev - 300, 0)); // Scroll by 300px (adjust as needed)
  };
  let forwardInterval,backwordInterval;
  useEffect(() => {
    if (!state) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= maxScroll) {
          return 0; // Reset to start if at the end
        }
        return Math.min(prev + 100, maxScroll); // Otherwise, scroll right
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount or state change
  }, [state, maxScroll]);
  // Scroll right
  const handleRightClick = () => {
    
    setPosition((prev) => Math.min(prev + 300, maxScroll)); // Scroll by 300px (adjust as needed)
  };

  return (
    <div className="flex bg-[#22304a]">
      
      <div className="w-[34%] bg-[#22304a]">
        
        <CategorySliderbar/>
      </div>
      <div className="relative w-[60%] mt-[120px] overflow-hidden"
       onMouseLeave={()=>{
        setState(true);
      }} 
      onMouseOver={()=>{
        setState(false);
      }}
      >


      {/* Cards Container */}
      <div className="flex ">
      <h2 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">Our Iconic Rides</h2>
      <Controls mouseleaveHandler={()=>{
        setState(true);
      }} mouseoverHandler={()=>{
        setState(false);
      }} handleRightClick={handleRightClick} handleLeftClick={handleLeftClick}/>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 transition-transform duration-300 "
        style={{ transform: `translateX(${-position}px)` }}
      >
        {/* Cards */}
        {data.map((ride, index) => (
  <RideCard key={`${ride.name}-${index}`} name={ride.name} info={ride.info} place={ride.place} link={ride.link}/>
))}

        
      </div>
    </div>
    </div>
    
 
  );
}

export default Carousel;