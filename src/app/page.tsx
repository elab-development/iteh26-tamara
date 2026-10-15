"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [counterOver20, setCounterOver20] = useState(false);
  const [counterMinus, setCounterMinus] = useState(false);

  useEffect(()=>{
    setCounterOver20(count>20);
  },[count])
  useEffect(()=>{
    setCounterMinus(count<0);
  },[count])

  return (
    <div className={"bg-blue-400 text-white "}>
      <p className={"text-[32px]"}>
        Brojac: {count}
      </p>
      <button className={"bg-yellow-400"} onClick={()=> setCount(prev=>prev+1)} >Povecaj brojac</button>
      <button className={"bg-green-400"} onClick={()=> setCount(prev=>prev-1)} >Smanji brojac</button>
      {counterOver20 && 
        <p className={"text-[32px]"}>Brojac presao 20</p>
      }
      {counterMinus && 
        <p className={"text-[32px]"}>Brojac u minusu</p>
      }
        </div>

  );
}
