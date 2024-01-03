// import { useEffect,useState } from "react";


// //we we Use just for naming convention
// //we are taking naming convention
// function useCurrencyInfo(currency){
//     // when any component is mounted then i want to call the api so we use hook
//     // that is "useEffect"
//     // useEffect(()=>{},[])  takeks Call back and a Dependencies Array
//     // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//    // mostly Api Call values comes in String Format so we need to change in Json
//     const [data,setData] = useState({})
//    useEffect(()=>{

//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=>{res.json()}).then((response)=>{console.log("API Response:", response);
//         setData(response[currency]);})
//         console.log(data);
//     },[currency])

//     console.log(data);

//     return data
// }

// export default useCurrencyInfo;


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    console.log("Current currency : ",currency)
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;