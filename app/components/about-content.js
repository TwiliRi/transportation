
import Link from "next/link"
import Image from "next/image"
import {ScrollButton} from '../components/scroll-button'
import Cars from '../../public/car2.png'
import CopyButton from "../components/copy-button";
// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";


export default function About() {

 
  

  return (
    <>
    <header className="">
      <section className="min-h-[90dvh] w-full flex flex-col p-2">
      <div className="flex flex-row justify-center ">
          <nav>
            <ul className="flex flex-row items-center justify-center gap-12 p-11">
              <Link href='/'><li>Главная</li></Link>
              <Link href='/about'><li><b>О мне</b></li></Link>
            </ul>
          </nav>
          
        </div>

      

      <div className="flex flex-row gap-6 items-center justify-center  w-full ">
         

          <div className="flex flex-col items-center  justify-around w-[60%] max-sm:w-[100%] z-20 rounded-md p-3">
            <h1 className="font-bold text-4xl text-center ">О мне</h1>
            <div className="w-[70%]  rounded-2xl h-[2px] my-8 bg-black"></div>
            <div className="">
              <p className="text-l">Здравствуйте, меня зовут Алексей.</p>
              
              <p className="text-l">Я профессиональный водитель с более чем 10-летним опытом работы в сфере грузоперевозок. За это время я помог сотням клиентов безопасно и своевременно доставить их грузы.</p>
              <br/>
              <p className="text-l">Предлагаю услуги по перевозке грузов и поездки за город. Предоставляю услуги в различных городах России, специализируюсь в городе <b>Рязань</b>.</p>
              <p className="text-l">Перевозки грузов осуществляются на автомобиле марки "Газель" ГАЗ A31R23</p>
              <br/>
              <p>Работаю по принципу "Грузоперевозки – быстро, надежно, удобно!"</p>
              <br/>
              

              <div className="bg-black text-white p-5 rounded-lg text-center max-w-md mx-auto mb-8">
                  <p className="text-xl mb-2"> Мобильный номер телефона:</p>
                  <p className="text-3xl font-bold">+7 (495) 222-22-22</p>
                  <a href="tel:+74952222222" className=" cursor-pointer bg-white text-black my-4 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition inline-block">
                  Позвонить сейчас
                  </a>
                </div>


            </div>
            <div className="flex flex-col gap-3 min-w-[70%]">
            <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661"><button className="cursor-pointer border-black border-2 w-full rounded-md p-2 text-black ">Написать в Авито</button></Link>

              <CopyButton/>
              
            </div>
            
          </div>
          
        </div>
        
        {/* Кнопка прокрутки всегда будет на одинаковой высоте */}
        <div className="sticky bottom-0 border-0 z-50">
          <ScrollButton />
        </div>
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

    <div className="mt-[50px] flex flex-col justify-center items-center">
      <p className="text-xl">Как я работаю</p>
      <div className="w-[300px] rounded-2xl h-[2px] bg-black"></div>
      <div className="grid xl:grid-cols-4 min-[850px]:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[30px]">
        <div className="border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center">
          <div className="text-3xl font-bold mb-2">1</div>
          <p className="font-bold text-lg mb-2">Принимаю заказ</p>
          <p>Обсуждаем детали перевозки, согласовываем время и стоимость</p>
        </div>
        <div className="border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center">
          <div className="text-3xl font-bold mb-2">2</div>
          <p className="font-bold text-lg mb-2">Подаю транспорт</p>
          <p>Приезжаю точно в оговоренное время на место погрузки</p>
        </div>
        <div className="border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center">
          <div className="text-3xl font-bold mb-2">3</div>
          <p className="font-bold text-lg mb-2">Выполняю перевозку</p>
          <p>Бережно и аккуратно доставляю ваш груз до места назначения</p>
        </div>
        <div className="border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center">
          <div className="text-3xl font-bold mb-2">4</div>
          <p className="font-bold text-lg mb-2">Завершаю работу</p>
          <p>Помогаю с разгрузкой и получаю оплату удобным для вас способом</p>
        </div>
      </div>
    </div>

    <div className="mt-[50px] flex flex-col justify-center items-center mb-[30px]">
      <p className="text-xl">Часто задаваемые вопросы</p>
      <div className="w-[300px] rounded-2xl h-[2px] bg-black"></div>
        <div className="w-full max-w-[800px] mt-[30px] space-y-6">
          <div className=" border-black rounded-md p-4 shadow-md">
            <p className="font-bold text-lg mb-2">Как рассчитывается стоимость перевозки?</p>
            <p>Стоимость перевозки по городу рассчитывается почасово (от 1100 руб/час), за город - по километражу (от 25 руб/км). Минимальный заказ - 2 часа.</p>
          </div>
          <div className=" border-black rounded-md p-4 shadow-md">
            <p className="font-bold text-lg mb-2">Нужно ли заказывать заранее?</p>
            <p>Желательно заказывать за 1-2 дня, но при наличии свободного транспорта возможен выезд в течение часа.</p>
          </div>
          <div className=" border-black rounded-md p-4 shadow-md">
            <p className="font-bold text-lg mb-2">Какие документы нужны для заказа?</p>
            <p>Для заказа достаточно указать адрес погрузки, адрес выгрузки и контактный телефон.</p>
          </div>
        </div>
    </div>
    </>
  );
}

