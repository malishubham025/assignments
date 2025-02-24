import React from "react";
import DataContext from "./Context";
function Locations() {
    const [visble,setVisible]=React.useState(false);
    const {visbleLocation,setVisibleLocation}=React.useContext(DataContext);
  return (
    <div
    
    style={visbleLocation?{visibility:"visible"}:{visibility:"hidden"}} 
    onMouseOver={()=>{
        setVisibleLocation(true);
        document.querySelector(".loc").classList.add("down");
    }}
    onMouseLeave={()=>{
      document.querySelector(".loc").classList.remove("down");

        setVisibleLocation(false);
    }}
    className="absolute loc  bg-white w-[300px] pt-[20px] mt-[65px] pb-[40px] pr-[20px] pl-[10px] text-black rounded-2xl">
      <div className="invisible-gap"></div>

      <p className="flex items-center">
        <img className="h-[48px] w-[48px] object-cover ml-[20px] rounded-xl mr-[10px] mt-[10px]" src="https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75" alt="Kochi" />
        KOCHI
      </p>
      <hr className="text-[#d4d4d4] w-[80%] mt-1 mb-1 mx-auto"/>
      <p className="flex items-center w-[100%] cursor-pointer relative "
              onMouseOver={()=>{
                setVisible(true);
            }}
            onMouseLeave={()=>{
                setVisible(false);
            }}
      >
        <img className="h-[48px] w-[48px] object-cover cursor-pointer ml-[20px] rounded-xl mr-[10px] mt-[10px]" src="https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75" alt="Bengaluru" />
        BENGALURU
        
        <svg className="h-7 w-7 text-black-500 relative left-[80px] cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
        <div style={visble?{visibility:"visible"}:{visibility:"hidden"}} 
        onMouseOver={()=>{
            setVisible(true);
        }}
        onMouseLeave={()=>{
            setVisible(false);
        }} className="absolute right-[-160px] rounded-xl ml-[20px] bg-white p-[10px]">
            <div className=" h-[200px] w-[200px] absolute left-[-100px] z-0"></div>
            <p className="flex items-center z-20">
                <img className="h-[48px] w-[48px] object-cover ml-[10px] rounded-xl mr-[10px] mt-[10px]" src="https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75" alt="Kochi" />
                Park
            </p>
            <p className="flex items-center">
                <img className="h-[48px] w-[48px] object-cover ml-[10px] rounded-xl mr-[10px] mt-[10px]" src="https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75" alt="Kochi" />
                Resort
            </p>
        </div>
      </p>
      <hr className="text-[#d4d4d4] w-[80%] mt-1 mb-1 mx-auto"/>
      <p className="flex items-center">
        <img className="h-[48px] w-[48px] object-cover ml-[20px] rounded-xl mr-[10px] mt-[10px]" src="https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75" alt="Hyderabad" />
        HYDERABAD
      </p>
      <hr className="text-[#d4d4d4] w-[80%] mt-1 mb-1 mx-auto"/>
      <p className="flex items-center">
        <img className="h-[48px] w-[48px] object-cover ml-[20px] rounded-xl mr-[10px] mt-[10px]" src="https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75" alt="Bhubaneswar" />
        BHUBANESHWAR
      </p>
    </div>
  );
}

export default Locations;