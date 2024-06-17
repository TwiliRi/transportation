import Link from "next/link"
import Image from "next/image"
import {ScrollButton} from '../_components/scroll-button'
import Cars from '../../../public/car2.png'
import CopyButton from "../_components/copy-button";
// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";


export default function About() {

 
  

  return (
    <>
    <header className="">
      <section className="h-[100vh] w-full flex flex-col p-5">
        <div className="flex flex-row justify-between ">
          <div><img src="" alt="" /></div>
          <nav>
            <ul className="flex flex-row items-center justify-center gap-8 p-11">
            <Link href='/'><li>Главная</li></Link>
              <Link href='/about'><li><b>О нас</b></li></Link>
              <Link href='/feedback'><li>Отзывы</li></Link>
            </ul>
          </nav>
        </div>

      

      <div className="flex flex-row gap-6 items-center justify-center h-[600px] w-full">
         

          <div className="flex flex-col items-center justify-around w-[60%] max-sm:w-[100%] z-20 h-full rounded-md p-3">
            <h1 className="font-bold text-4xl text-center ">О нас</h1>
            <div className="w-[300px] rounded-2xl h-[2px] bg-black"></div>
            <div className="text-center">
              <p className="">Здравствуйте, моё имя Алексей.</p>
              <p>Предлагаю услуги по перевозке грузов и поездки за город. Предоствляю услуги в различных городах России специализируюсь в городе <b>Рязань</b>.</p>
              <p>Перевозки грузов осуществляются на автомобиле марки "Газель" ГАЗ A31R23</p>
              <br/>
              <p>Мобильный номер телефона: +7 (495) 222-22-22</p>
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
    
    <section className="p-5">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-xl">Характеристики машины</p> 
        <div className="w-[300px]  rounded-2xl h-[2px] bg-black"></div>
        
        <div className="mt-[60px]">
            <Image src={Cars} 
            alt="Газель"
             />
        </div>
        <div className="flex flex-row gap-3">
          <p>Грузоподъёмность</p>
          <p><b>до 1.5 тонн</b></p>
        </div>
        <div className="flex flex-row gap-3">
          <p>Длина грузового отсека</p>
          <p><b>3031мм.</b></p>
        </div>
        <div className="flex flex-row gap-3">
          <p>Высота</p>
          <p><b>1927мм.</b></p>
        </div>
        <div className="flex flex-row gap-3">
          <p>Объём</p>
          <p><b>11.5 М³</b></p>
        </div>
       
      </div>    

    </section>

    
    </>
  );
}

