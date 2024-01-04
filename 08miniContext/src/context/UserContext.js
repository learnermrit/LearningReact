import React from 'react'


const UserContext = React.createContext()

export default UserContext;

//context will give us Provider as it provide us variable 
// UserContext we use as Wraper to  All our component the all will get access to Usercontext automatically

{/* <UserContext>  this will known as Provider (.jsx kyu ki top level pe rakhna hai)
    <Login/>
    <card>
        <Data/>
    </card>
</UserContext> */}

