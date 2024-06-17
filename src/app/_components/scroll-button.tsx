"use client";
export function ScrollButton() {
    
  

    return(
      <div onClick={()=>window.scrollTo(0,700)} className="mt-[100px] w-full h-[100px] flex flex-row justify-center items-center hover:cursor-pointer">
          <div className="w-[50px] h-1 rotate-[315deg] relative left-[8.5px]  bg-black"></div>
          <div className="w-[50px] h-1 rotate-[45deg] relative left-[-8.5px] bg-black"></div>
      </div>
    )
  }