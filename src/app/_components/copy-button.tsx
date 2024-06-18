'use client'

import { useState } from "react";

export default function CopyButton() {
const [state, setState] = useState(false);

  return (<>
    <button 
    onClick={function(){
    // tslint:disable-next-line:no-unsafe-any
    navigator.clipboard.writeText('+7 (495) 222-22-22')
    setState(true);
    setTimeout(() => {
        setState(false);
    }, 2000);
  
}}
    className="w-full rounded-md p-2 bg-black  text-white ">
        Скопировать номер
        </button>
        <div>
        <p className={"" 
        + (state ? 'absolute bg-[#686868] left-[50%] translate-x-[-50%] justify-center  text-white  p-1 rounded-md items-center' : 'invisible')

        }>{state ? 'Номер скопирован' : ''}</p>
        </div>
        </>)
}
