import { useState, useEffect } from "react";

function useCurrencyInfo(Currency){

  const [data, setData]= useState({})

  useEffect(()=>{

    fetch(`https://v6.exchangerate-api.com/v6/2fd90ac0868802c1e1452ee9/latest/${Currency}`)

    .then((res) => res.json())
    .then((res)=> setData(res[Currency]))

    console.log(data);


  },[Currency])

  console.log(data)

  return data



}

export default useCurrencyInfo;
