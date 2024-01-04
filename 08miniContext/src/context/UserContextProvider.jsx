import React from "react";
import UserContext from "./UserContext";


const UserContextProvider =({children})=>{
    const [user,setUser] = React.useState(null)

    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
        {children} 
        </UserContext.Provider>       
        </>
    )

}

export default UserContextProvider

// const UserContextProvider =({jo bhi Props aaye aage pass kr do, ayese hi Children naam de diye })=>{

// }

// const UserContextProvider =({children})=>{
//     const [user,setUser] = React.useState(null) // ek state hai user

//     return (
//         <>
//         <UserContext.Provider value={{user,setUser}}>  // provider kon kon sa data dega = "user" and setUSer
//         {children}   // jo bhi Html Tree aaye un sb component ko Provider se data mill jayga
//         </UserContext.Provider>       
//         </>
//     )

// }