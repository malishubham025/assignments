import React from "react";
function RideCard(){
return(
  
    <div className="relative ml-[10px] w-[245px] h-[346px] rounded-[20px]  card">
        <video className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]"   loop muted autoPlay controls = ''>
        <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 z-1 w-[100%] p-[10px]">
            <h1>Name</h1>
            <h5>Place</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, accusamus?</p>
        </div>

    </div>
    
)
}
export default RideCard;