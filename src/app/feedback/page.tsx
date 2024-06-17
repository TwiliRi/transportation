'use client'
import Link from 'next/link'
import { ScrollButton } from '../_components/scroll-button'
import CopyButton from '../_components/copy-button'
import { api } from "~/trpc/react";
import React from 'react';

export default function Feedback() {
  const [num,setNum] = React.useState(9); 
  const getCom = api.comment.getCom.useQuery(num);
    return (
        <>
        <header className="">
          <section className="h-[100vh] w-full flex flex-col p-5">
            <div className="flex flex-row justify-between ">
              <div><img src="" alt="" /></div>
              <nav>
                <ul className="flex flex-row items-center justify-center gap-8 p-11">
                  <Link href='/'><li>Главная</li></Link>
                  <Link href='/about'><li>О нас</li></Link>
                  <Link href='/feedback'><b><li>Отзывы</li></b></Link>
                </ul>
              </nav>
            </div>
            <div className="flex flex-row gap-6 items-center justify-center h-[600px] w-full">
         

          <div className="flex flex-col items-center justify-around w-[60%] z-20 h-full rounded-md p-3">
            <h1 className="font-bold text-4xl text-center ">Отзывы</h1>
            <div className="w-[300px] rounded-2xl h-[2px] bg-black"></div>
            <div className="text-center">
              <p>На этой странице вы можете увидеть отзывы</p> 
              <p>людей о проделанной работе.</p> 
              <br/>
            </div>
            <div className="flex flex-col gap-3">
            <button className=" border-black border-2 w-full rounded-md p-2 text-black "><a href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661">Написать в Авито</a></button>

              <CopyButton/>
            </div>
          </div>
        </div>

        <ScrollButton />
        </section>
        </header>
        <section>
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <p className="text-2xl">Последние отзывы</p>
        <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
        
        <div className="p-5 mt-[30px] grid xl:grid-cols-3 min-[850px]:grid-cols-2 max-sm:grid-cols-1 justify-center ">

        {getCom.data?.map((comment)=>{
            return <div className="w-[400px] p-3 mb-[40px] break-all" key={comment.id}>
              <p className=""><b>{comment.name}</b></p>
              <p className="">{comment.createdAt.getDate()+ "." + comment.createdAt.getMonth() + "." + comment.createdAt.getFullYear()}
                в {comment.createdAt.getHours()}:{comment.createdAt.getMinutes()}
              </p>
              <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
              <p>Комментарий: </p>
              <p className="text-lg">{comment.comments}</p>
            </div>
          })}


        </div>
        <button onClick={()=>setNum(num+9)} className="px-4 py-3 my-[30px] bg-black text-white rounded-lg">Показать больше</button>


        </div>

    </section>
        </>
    )
}
