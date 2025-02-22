import React from "react";
function Controls(props){
    return(
        <div>
        <button
         onClick={()=>{
            props.handleLeftClick();
         }}
         onMouseOver={()=>{
            props.mouseoverHandler();
         }}
         onMouseLeave={()=>{
            props.mouseleaveHandler();
         }}
        className="l-click absolute cursor-pointer right-[80px] top-[30px]   z-10 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all"

      >
        ◀
      </button>
            <button
            className="r-click cursor-pointer absolute right-0  z-10 top-[30px] -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all"
            onClick={()=>{
                props.handleRightClick();
            }}
            onMouseOver={()=>{
            props.mouseoverHandler();
            }}
            onMouseLeave={()=>{
            props.mouseleaveHandler();
            }}
          >
            ▶
          </button>
          </div>
      
    )
}


export {Controls};