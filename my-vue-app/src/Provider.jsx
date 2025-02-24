import React from "react";
import DataContext from "./Context";
import { LandData } from "./data";

function DataProvider({children}){
    const [data,setData]=React.useState(LandData);
    const [visbleLocation,setVisibleLocation]=React.useState(false);
    return (
    <DataContext.Provider value={{data,setData,visbleLocation,setVisibleLocation}}>
        {children} 
    </DataContext.Provider>
    );
}
export default DataProvider;