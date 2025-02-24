import React from "react";
import Locations from "./Locations";
import DataContext from "./Context";
function NavBar(){
    const [state,setState]=React.useState(false);
    const {visbleLocation,setVisibleLocation}=React.useContext(DataContext);

    window.addEventListener('scroll', function() {
        let scrolledAmount = window.scrollY;
        if(scrolledAmount>=500){
            // document.querySelector(".loc").classList.add("down");
            setState(true);
        }
        else{
            // document.querySelector(".loc").classList.remove("down");
            setState(false);
        }
      });
    function handleClick(){
        document.body.style.overflow = "hidden"; 
        document.querySelector(".slider").classList.remove("slide-right");
        document.querySelector(".slider").classList.add("slide");
        document.querySelector(".black").style.visibility="visible";
        
    }
    return(
        <div className="flex w-full border-r-[10px]  mt-[40px] text-white justify-center fixed z-20  " >
         
           <div className=" rounded-2xl w-[90%] flex align-middle justify-center" style={state?{backgroundColor:"white",color:"gray"}:null}>
           <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x" alt="" />
            <div className="flex font-mulish font-bold ml-[30px]" >
                <button className="ml-[30px] mr-[30px] cursor-pointer flex  items-center">
                <svg class="h-4 w-4"   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                    <p
                    className="flex items-center"
                    onMouseOver={()=>{
                        setVisibleLocation(true);
                        document.querySelector(".loc").classList.add("down");
                        // console.log()
                    }}
                    onMouseLeave={()=>{
                        document.querySelector(".loc").classList.remove("down");
                        setVisibleLocation(false);
                    }} 
                    >Locations <svg 
                     
                    
                    className="loc h-5 w-5 items-center "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg></p></button>
                    
                    <Locations/>
                <button className="ml-[30px] mr-[30px] cursor-pointer flex items-center">
                <img className="size-5 mr-[10px]" src={!state?"offer-white.png":"offer-gray.png"} alt="" />
                    <p>Offers</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer flex items-center">
                <img className="size-5 mr-[10px]" src={!state?"ride-white.png":"ride-gray.png"} alt="" />
                    <p>Rides</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer flex items-center">
                <img className="size-5 mr-[10px]" src={!state?"restaurant-white.png":"restaurant-gray.png"} alt="" />
                    <p>Restaurants</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer flex items-center">
                <img className="size-5 mr-[10px]" src={!state?"events-white.png":"events-gray.png"} alt="" />
                    
                    <p>Events</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Book Tickets</p></button>
            </div>
            
            <div className="nav  flex-col cursor-pointer" onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
           </div>
        </div>
    )
}
export default NavBar;