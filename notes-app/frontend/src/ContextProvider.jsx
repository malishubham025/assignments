import React from "react";
import NoteContext from "./NoteContext";
function ContextProvider({children}){
    const [singleNote,setsingleNote]=React.useState({});
    const [notes,setNotes]=React.useState([]);
    return (<NoteContext.Provider value={{singleNote,setsingleNote,notes,setNotes}}>
        {children}
    </NoteContext.Provider>
    );
}
export default ContextProvider;