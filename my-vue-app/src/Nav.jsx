import React from "react";
function NavBar(){
    const [state,setState]=React.useState(false);
    window.addEventListener('scroll', function() {
        let scrolledAmount = window.scrollY;
        if(scrolledAmount>=800){
            setState(true);
        }
        else{
            setState(false);
        }
      });
    return(
        <div className="flex w-full border-r-[10px]  mt-[40px] text-white justify-center fixed z-20  " >
           <div className=" rounded-2xl w-[80%] flex align-middle justify-center" style={state?{backgroundColor:"white",color:"#788beb"}:null}>
           <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x" alt="" />
            <div className="flex font-mulish font-bold ml-[30px]" >
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Locations</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Offers</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Rides</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Restaurants</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Events</p></button>
                <button className="ml-[30px] mr-[30px] cursor-pointer"><p>Book Tickets</p></button>
            </div>
            
            <div className="nav  flex-col cursor-pointer">
                <div></div>
                <div></div>
                <div></div>
            </div>
           </div>
        </div>
    )
}
export default NavBar;