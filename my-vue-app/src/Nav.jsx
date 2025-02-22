import React from "react";
function NavBar(){
    return(
        <div className="flex w-full  mt-[40px] text-white justify-center fixed z-20  ">
            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x" alt="" />
            <div className="flex font-mulish font-bold ml-[30px]">
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
    )
}
export default NavBar;