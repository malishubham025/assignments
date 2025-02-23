import React from "react";
import {motion} from "motion/react";
function RideCard(props){
return(
  
    <div className="flex-shrink-0 relative ml-[10px] w-[245px] h-[346px] rounded-[20px] mt-[20px]  card">
        <video className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]"   loop muted autoPlay controls = ''>
        <source src={props.link} type="video/mp4" />
        </video>
        <div className="absolute bottom-0 z-1 text-white w-[100%] p-[10px]">
            <h1 className="text-lg font-mulish capitalize !leading-[1.255] font-bold">{props.name}</h1>
            <h5 className="text-xs inline-block font-mulish font-normal !leading-[1.255] mt-px opacity-80">{props.place}</h5>
            <p className="mt-1.5 line-clamp-4 text-xs leading-[1.255]">{props.info}</p>
            <motion.button 

    whileHover={{
        scale: 1.1, // Slightly enlarges the button
        // rotate: 5, // Rotates the button a little
    }}
  transition={{ type: "spring", stiffness: 300 }}
            className="h-10 mt-[10px] cursor-pointer w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-blue text-[#1e71b6] bg-yellow-400 "><h5>RIDE DETAILS</h5></motion.button>
        </div>
        <div className="grad"></div>
    </div>
    
)
}
export default RideCard;