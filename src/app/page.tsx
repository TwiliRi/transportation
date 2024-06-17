'use client'
import { useRouter } from "next/navigation";

import Link from "next/link"
import Image from "next/image"
import Cars from '../../public/car.png'
import { ScrollButton } from "./_components/scroll-button";
import CopyButton from "./_components/copy-button";
import { api } from "~/trpc/react";
import { comment } from "postcss";
import React, { useState } from "react";
import { now } from "next-auth/client/_utils";
import { redirect } from 'next/navigation'
import { set } from "zod";
// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default function Home() {
  const [name,setName] = useState("")
  const [comments,setComment] = useState("")



  const router = useRouter()
  const mutation = api.comment.submitComment.useMutation()
  const getCom = api.comment.getCom10.useQuery();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault()
    const newCom= await mutation.mutateAsync({
      name,
      comments,
      createdAt: new Date(Date.now())
    })
  }


  return (
    <>
    <header className="">
      <section className="h-[100vh] w-full flex flex-col p-5">
        <div>
        <div className="flex flex-row justify-between ">
          <div><img src="" alt="" /></div>
          <nav>
            <ul className="flex flex-row items-center justify-center gap-8 p-11">
              <Link href='/'><li><b>Главная</b></li></Link>
              <Link href='/about'><li>О нас</li></Link>
              <Link href='/feedback'><li>Отзывы</li></Link>
            </ul>
          </nav>
          
        </div>

        <div className="flex flex-row gap-6 items-center justify-center h-[600px] w-full">
          <div className="w-[60%] max-sm:w-[0%] z-20">
            <Image src={Cars} 
            alt="Газель"
            className="absolute top-[100px] md:left-[-600px] xl:left-[-400px] 2xl:left-[-200px] lg:left-[-600px] sm:left-[-700px] min-w-[1200px] z-20 max-sm:left-[-900px]" />
          </div>

          <div className="flex flex-col justify-around w-[60%] max-sm:w-[100%] z-20 h-full rounded-md p-3">
            <h1 className="font-bold text-4xl ">Связь</h1>
            <div>
              <p className="">Здравствуйте, моё имя <b>Алексей</b>.</p>
              <p>Я предоставляю услуги грузоперевок и поездки за город. </p>
              <p>Предлагаю услуги по перевозке грузов и поездки за город. Предоствляю услуги в различных городах России специализируюсь в городе <b>Рязань</b>.</p>
              <p>Перед обращением лучше всего ознакомиться с <b>ценами</b>.</p>
            </div>
            <div className="flex flex-col gap-3">
              <button className=" border-black border-2 w-full rounded-md p-2 text-black "><a href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661">Написать в Авито</a></button>
              <CopyButton/>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
      </section>
      

      

    </header> 
    
    <section className="p-5">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-xl">Цены</p>
        <div className="w-[300px] rounded-2xl h-[2px] bg-black"></div>
        <div className="flex mt-[60px] flex-row max-md:flex-col max-md:gap-[20px] gap-[200px] justify-center items-center">
          <div className="w-[300px] border-2 rounded-md border-black p-7 flex flex-col justify-center items-center hover:shadow-3xl">
            <p className="text-xl">Город</p>
            <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
            <p className="mt-3">Цена договорная</p>
            <p>От 1100 рублей/час</p>
            <p></p>
          </div>
          <div className="w-[300px] border-2 rounded-md border-black p-7 flex flex-col justify-center items-center hover:shadow-3xl">
            <p className="text-xl">Поездки за город</p>
            <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
            <p className="mt-3">Цена договорная</p>
            <p>от 25 рублей/км</p>
            <p></p>
          </div>
        </div>
      </div>      
    
      <div className="flex flex-col justify-center items-center ">
      <div className="w-[300px] p-6 border-2 rounded-md border-black mt-[100px] flex flex-col justify-center items-center hover:shadow-3xl  shadow-black">
        <p className="text-xl">Дополнительные услуги</p>
        <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
        <ul className="mt-3 list-disc">
          <li>Услуги грузчика(от 500 рублей/час)</li>
          <li>Сборка (от 1000 рублей/час)</li>
        </ul>
      </div>
      </div>
    </section>

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
        <Link href='/feedback'><button className="px-4 py-3 bg-black text-white rounded-lg">Больше отзывов</button></Link>


      </div>

    </section>

    <section className="flex flex-col justify-center items-center mb-5">
      <div className="w-[70%] max-sm:w-[100%]">
        <div className="mt-[100px] flex flex-col justify-center items-center">
          <p className="text-2xl">Оставить отзыв</p>
        </div>
        <form method="get" onSubmit={
          handleSubmit
          } className="p-5 rounded-sm mt-[30px] flex flex-col gap-5 justify-center items-center text-center">
          <label className="text-sm font-medium flex flex-col justify-center items-center text-gray-700 w-full">
            <p className="">Ваше ФИО</p>
            <input 
            onChange={(e)=>setName(e.target.value)}
            required type="text" placeholder="Сталин Иосиф Виссарионович" name="name" className="mt-1 block  w-[80%] px-3 py-2 border-b-2 border-black  focus:outline-none focus:ring-black  focus:border-black sm:text-sm" />
          </label>
          <label className={"text-sm font-medium flex flex-col justify-center items-center text-gray-700 w-full "}>
            <p className="">Ваш комментарий</p>
            <textarea 
            onChange={(e)=>setComment(e.target.value)}
            required rows={5}  placeholder="Лучший сервис" name="name" className="mt-1 block resize-none w-[80%] px-3 py-2  border-2 border-black rounded-md focus:outline-none  sm:text-sm" /> 
          </label>
          <button type="submit" className=" px-4 py-3 bg-black text-white rounded-lg active:bg-white active:text-black" >Отправить</button>
        </form>
        <footer>

        </footer>
      </div>
    </section>





    
    </>
  );
}

