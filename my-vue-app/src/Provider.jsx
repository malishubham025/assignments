import React from "react";
import DataContext from "./Context";
import { LandData } from "./data";

function DataProvider({children}){
    const [data,setData]=React.useState(LandData);
    return (
    <DataContext.Provider value={{data,setData}}>
        {children} 
    </DataContext.Provider>
    );
}
export default DataProvider;