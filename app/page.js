"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import Cars from "../public/car.png";
import { ScrollButton } from "./components/scroll-button";
import CopyButton from "./components/copy-button";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [comments, setComment] = useState("");

  // Массив с отзывами из Авито (обновлен согласно фото)
  const reviews = [
    {
      id: 1,
      author: "Lex Medved",
      date: "25 апреля",
      text: "Приехал во время, отличный человек и профессионал",
      rating: 5,
      category: "Грузоперевозки",
      status: "Сделка состоялась",
    },
    {
      id: 2,
      author: "Никита",
      date: "24 апреля",
      text: "договорились за 5 минут, все отлично, всем советую",
      rating: 5,
      category: "Грузоперевозки",
      status: "Сделка состоялась",
    },
    {
      id: 3,
      author: "Валерий",
      date: "7 апреля",
      text: "Все отлично! Приехали во время. Помогли. Ребята молодцы!",
      rating: 5,
      category: "Грузоперевозки",
      status: "Сделка состоялась",
    },
  ];

  // Функция для отображения звездного рейтинга
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <header className="">
        <section className=" w-full flex flex-col p-2">
          <div>
            <div className="flex flex-row justify-center">
              <nav>
                <ul className="flex flex-row items-center justify-center gap-12 p-11">
                  <Link href="/">
                    <li>
                      <b>Главная</b>
                    </li>
                  </Link>
                  <Link href="/about">
                    <li>О мне</li>
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="flex flex-row gap-6 items-center justify-center  w-full">
              <div className="w-[60%] max-sm:w-[0%] z-20">
                <Image
                  src={Cars}
                  alt="Газель"
                  className="absolute top-[100px]  md:left-[-600px] xl:left-[-400px] 2xl:left-[-200px]
                  lg:left-[-600px] min-[750px]:left-[-650px] sm:left-[-700px] min-w-[1200px]
                  z-20 max-sm:left-[-900px]
                  min-[100px]:left-[-1000px]
                  "
                />
              </div>

              <div className="flex gap-8 flex-col justify-around w-[60%] max-sm:w-[100%] z-20 h-full rounded-md p-3">
                <h1 className="font-bold text-4xl text-center">Добро пожаловать</h1>
                <div className="w-[70%] self-center rounded-2xl h-[2px] bg-black"></div>
                <div>
                  <p className="">
                    Меня зовут <b>Алексей</b>, и я рад приветствовать вас на
                    моём сайте. 
                  </p>
                  <p>
                    Предоставляю качественные услуги грузоперевозок в различных
                    городах России, но основная зона моей работы — город{" "}
                    <b>Рязань</b> и Рязанская область.
                  </p>
                  <br/>
                  <p>
                    Помогу потодобрать <b>различные типы газелей</b> — от компактных 3-метровых 
                    до просторных 6-метровых, что позволяет подобрать оптимальный вариант под любой груз.
                  </p>
                  <br/>
                
                  <p className="text-black mix-blend-difference">
                    Чтобы наше сотрудничество было максимально комфортным,
                    рекомендую ознакомиться с <b>ценами</b> на услуги ниже.
                  </p>
                </div>

                <div className="bg-black text-white p-5 rounded-lg text-center max-w-md mx-auto ">
                  <p className="text-xl mb-2"> Мобильный номер телефона:</p>
                  <p className="text-3xl font-bold">+7 (495) 222-22-22</p>
                  <a href="tel:+74952222222" className="my-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition inline-block">
                  Позвонить сейчас
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661">
                    <button className=" border-black border-2 w-full cursor-pointer rounded-md p-2 text-black ">
                      Написать в Авито
                    </button>
                  </Link>
                  <CopyButton />
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 border-0 z-50">
          <ScrollButton />
        </div>
        </section>
      </header>

    

      <section className="p-5">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-xl">Цены</h2>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
          
          {/* Таблица с ценами в стиле Statement Summary */}
          <div className="mt-[60px] w-full max-w-[1098px]">
            
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
              <style jsx>{`
                @media (max-width: 800px) {
                  table, thead, tbody, th, td, tr {
                    display: block;
                  }
                  
                  thead tr {
                    position: absolute;
                    top: -9999px;
                    left: -9999px;
                  }
                  
                  tr {
                    margin-bottom: 10px;
                    border-radius: 4px;
                  }
                  
                  td {
                    border: none;
                    position: relative;
                    padding-left: 50%;
                    text-align: right;
                  }
                  
                  td:before {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    width: 45%;
                    padding-right: 10px;
                    white-space: nowrap;
                    font-weight: bold;
                    text-align: left;
                  }
                  thead{
                  background-color: #d1d5dc;
                  }

                  td:nth-of-type(1):before { content: "ТИП ТРАНСПОРТА"; }
                  td:nth-of-type(1){background-color: #000; color:white }
                  td:nth-of-type(2):before { content: "ГОРОД"; }
                  td:nth-of-type(3):before { content: "ДО 30КМ"; }
                  td:nth-of-type(4):before { content: "ДО 50КМ"; }
                  td:nth-of-type(5):before { content: "ДО 70КМ"; }
                  td:nth-of-type(6):before { content: "ДО 90КМ"; }
                  td:nth-of-type(7):before { content: "ДО 150КМ"; }
                  td:nth-of-type(8):before { content: "МЕЖГОРОД"; }
                }
              `}</style>
              <table className="w-full text-left">
                <thead className="bg-black  border-gray-300">
                  <tr>
                    <th className="py-3 px-4 font-semibold text-white">ТИП ТРАНСПОРТА</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ГОРОД</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ДО 30КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ДО 50КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ДО 70КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ДО 90КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">ДО 150КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center">МЕЖГОРОД</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 font-medium">Газель 3м. 10 куб</td>
                    <td className="py-3 px-4 text-center ">1100</td>
                    <td className="py-3 px-4 text-center">2200</td>
                    <td className="py-3 px-4 text-center">3300</td>
                    <td className="py-3 px-4 text-center">4400</td>
                    <td className="py-3 px-4 text-center">5500</td>
                    <td className="py-3 px-4 text-center">31</td>
                    <td className="py-3 px-4 text-center">30</td>
                  </tr>
                  <tr className="hover:bg-gray-100 ">
                    <td className="py-3 px-4 font-medium">Газель 4м. 16 куб</td>
                    <td className="py-3 px-4 text-center ">1200</td>
                    <td className="py-3 px-4 text-center">2400</td>
                    <td className="py-3 px-4 text-center">3600</td>
                    <td className="py-3 px-4 text-center">4800</td>
                    <td className="py-3 px-4 text-center">6000</td>
                    <td className="py-3 px-4 text-center">33</td>
                    <td className="py-3 px-4 text-center">32</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 font-medium">Газель 5м. 24 куб</td>
                    <td className="py-3 px-4 text-center ">1300х2</td>
                    <td className="py-3 px-4 text-center">3900</td>
                    <td className="py-3 px-4 text-center">5200</td>
                    <td className="py-3 px-4 text-center">6500</td>
                    <td className="py-3 px-4 text-center">7800</td>
                    <td className="py-3 px-4 text-center">43</td>
                    <td className="py-3 px-4 text-center">34</td>
                  </tr>
                  <tr className="hover:bg-gray-100 ">
                    <td className="py-3 px-4 font-medium">Газель 6м. 32 куб</td>
                    <td className="py-3 px-4 text-center ">1400х2</td>
                    <td className="py-3 px-4 text-center">4200</td>
                    <td className="py-3 px-4 text-center">5600</td>
                    <td className="py-3 px-4 text-center">7000</td>
                    <td className="py-3 px-4 text-center">8400</td>
                    <td className="py-3 px-4 text-center">45</td>
                    <td className="py-3 px-4 text-center">35</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            
            
            <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Тарифы и условия перевозки:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Стоимость работы машины до 20:00, от 1100 руб. за час</li>
                <li>Стоимость работы машины после 20:00, 1.8*дневной оплаты руб. за час</li>
                <li>Первый час работы оплачивается полностью, далее оплата каждые 30 минут</li>
                <li>При заказе машины за город, стоимость взимается с учётом обратной дороги</li>
                <li>Если машина должна прибыть на загрузку за город (без заказчика) заказчик вносит предоплату</li>
                <li>При заказе машины за город 30 минут на погрузку и выгрузку включены в ставку, далее по тарифу</li>
                <li>Если перед поездкой за город машина будет работать и по Рязани то работа по городу оплачивается отдельно</li>
              </ul>
              <div className="mt-4 p-4 text-white bg-black rounded-lg">
                <p className="font-bold">Для переездов</p>
                <p>Предоставляем машину с грузчиками. Стоимость работы такой бригады (машина и два грузчика) от 2400 руб/час (минимальное время заказа 2 часа). Точный расчет будет произведен после уточнения характера груза.</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="p-5">
        <div className="flex flex-col justify-center items-center mt-[50px]">
          <p className="text-xl">Наши преимущества</p>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
          <div className="grid xl:grid-cols-3 list-disc min-[850px]:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[30px]">
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">
                Профессиональный водитель
              </p>
              <p>
                Опытный водители с большим стажем работы, знающие город и
                область
              </p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Надежный транспорт</p>
              <p>
                Ухоженный автомобили в отличном техническом состоянии
              </p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Доступные цены</p>
              <p>Прозрачная система расчета без скрытых платежей</p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Оперативность</p>
              <p>Быстрая обработка заказов и гибкий график работы</p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Гарантия безопасности</p>
              <p>Своевременная и безопасная доставка вашего груза</p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Различные способы оплаты</p>
              <p>Наличный или безналичный расчёт (без НДС)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[30px]">
        <div className="mt-[100px] flex flex-col justify-center items-center">
          <p className="text-2xl">Последние отзывы</p>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>

          <div className="p-5 mt-[30px] grid xl:grid-cols-3 min-[850px]:grid-cols-2 max-sm:grid-cols-1 justify-center gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-2 border-black rounded-md max-w-[350px] p-4 shadow-md "
              >
                <div className="flex justify-between items-center">
                  <p className="font-bold">{review.author}</p>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                <p className="text-sm text-gray-500">{review.date}</p>
                <div className="w-full h-[1px] bg-gray-300 my-2"></div>
                <p>{review.text}</p>
                <p className="text-xs text-gray-400 mt-2">Источник: Авито</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-4 items-center">
            <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661#open-reviews-list">
              <button className="px-4 py-3 bg-black text-white rounded-lg cursor-pointer">
                Больше отзывов
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
