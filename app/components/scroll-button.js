"use client";
export function ScrollButton() {
    
  const smoothScroll = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth'
    });
  }

  return(

    <div className="relative w-full">
    {/* Градиентный фон под кнопкой */}
    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    
    <div onClick={smoothScroll} className="mt-[100px] w-full h-[100px] flex flex-row justify-center items-center hover:cursor-pointer">
        <div className="w-[50px] h-1 rotate-[315deg] relative left-[8.5px]  bg-black"></div>
        <div className="w-[50px] h-1 rotate-[45deg] relative left-[-8.5px] bg-black"></div>
    </div>

    </div>
  )
}