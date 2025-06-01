"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import Cars from "../public/car.png";
import { ScrollButton } from "./components/scroll-button";
import CopyButton from "./components/copy-button";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [comments, setComment] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          className={`text-xl transition-all duration-300 hover:scale-125 ${
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
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
        
        .animate-bounce-custom {
          animation: bounce 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        /* Responsive table styles */
        @media (max-width: 800px) {
          .responsive-table table, 
          .responsive-table thead, 
          .responsive-table tbody, 
          .responsive-table th, 
          .responsive-table td, 
          .responsive-table tr {
            display: block;
          }
          
          .responsive-table thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
          
          .responsive-table tr {
            margin-bottom: 10px;
            border-radius: 4px;
          }
          
          .responsive-table td {
            border: none;
            position: relative;
            padding-left: 50%;
            text-align: right;
          }
          
          .responsive-table td:before {
            position: absolute;
            top: 12px;
            left: 12px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            font-weight: bold;
            text-align: left;
          }
          
          .responsive-table thead {
            background-color: #d1d5dc;
          }

          .responsive-table td:nth-of-type(1):before { content: "ТИП ТРАНСПОРТА"; }
          .responsive-table td:nth-of-type(1) { background-color: #000; color: white; }
          .responsive-table td:nth-of-type(2):before { content: "ГОРОД"; }
          .responsive-table td:nth-of-type(3):before { content: "ДО 30КМ"; }
          .responsive-table td:nth-of-type(4):before { content: "ДО 50КМ"; }
          .responsive-table td:nth-of-type(5):before { content: "ДО 70КМ"; }
          .responsive-table td:nth-of-type(6):before { content: "ДО 90КМ"; }
          .responsive-table td:nth-of-type(7):before { content: "ДО 150КМ"; }
          .responsive-table td:nth-of-type(8):before { content: "МЕЖГОРОД"; }
        }
      `}</style>
      
      <header className="">
        <section className=" w-full flex flex-col p-2">
          <div>
            <div className="flex flex-row justify-center">
              <nav className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <ul className="flex flex-row items-center justify-center gap-12 p-11">
                  <Link href="/">
                    <li className="transition-all duration-300 hover:scale-110 hover:text-gray-800">
                      <b>Главная</b>
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="transition-all duration-300 hover:scale-110 hover:text-gray-800">О мне</li>
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="flex flex-row gap-6 items-center justify-center  w-full">
              <div className="w-[60%] max-sm:w-[0%] z-20">
                <Image
                  src={Cars}
                  alt="Газель"
                  className={`absolute top-[100px]  md:left-[-600px] xl:left-[-400px] 2xl:left-[-200px]
                  lg:left-[-600px] min-[750px]:left-[-650px] sm:left-[-700px] min-w-[1200px]
                  z-20 max-sm:left-[-900px]
                  min-[100px]:left-[-1000px] transition-all duration-1000 hover:scale-105
                  ${isVisible ? 'animate-slideInFromLeft' : 'opacity-0'}
                  `}
                />
              </div>

              <div className={`flex gap-8 flex-col justify-around w-[60%] max-sm:w-[100%] z-20 h-full rounded-md p-3 ${isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
                <h1 className="font-bold text-4xl text-center transition-all duration-500 hover:text-gray-800 hover:scale-105">Добро пожаловать</h1>
                <div className="w-[70%] self-center rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
                <div className="space-y-4">
                  <p className="transition-all duration-300 hover:translate-x-2">
                    Меня зовут <b className="text-gray-800">Алексей</b>, и я рад приветствовать вас на
                    моём сайте. 
                  </p>
                  <p className="transition-all duration-300 hover:translate-x-2">
                    Предоставляю качественные услуги грузоперевозок в различных
                    городах России, но основная зона моей работы — город{" "}
                    <b className="text-gray-800">Рязань</b> и Рязанская область.
                  </p>
                  <br/>
                  <p className="transition-all duration-300 hover:translate-x-2">
                    Помогу потодобрать <b className="text-gray-800">различные типы газелей</b> — от компактных 3-метровых 
                    до просторных 6-метровых, что позволяет подобрать оптимальный вариант под любой груз.
                  </p>
                  <br/>
                
                  <p className="text-black mix-blend-difference transition-all duration-300 hover:translate-x-2">
                    Чтобы наше сотрудничество было максимально комфортным,
                    рекомендую ознакомиться с <b className="text-gray-800">ценами</b> на услуги ниже.
                  </p>
                </div>

                <div className="bg-black text-white p-5 rounded-lg text-center max-w-md mx-auto transition-all duration-500 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl animate-pulse-custom">
                  <p className="text-xl mb-2"> Мобильный номер телефона:</p>
                  <p className="text-3xl font-bold animate-bounce-custom">+7 920 997-77-11</p>
                  <a href="tel:+79209977711" className="my-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300 inline-block hover:scale-110 hover:shadow-lg">
                  Позвонить сейчас
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661">
                    <button className="border-black border-2 w-full cursor-pointer rounded-md p-2 text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg">
                      Написать в Авито
                    </button>
                  </Link>
                  <div className="transition-all duration-300 hover:scale-105">
                    <CopyButton />
                  </div>
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
        <div className={`flex flex-col justify-center items-center ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          <h2 className="text-xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Цены</h2>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
          
          {/* Таблица с ценами в стиле Statement Summary */}
          <div className="mt-[60px] w-full max-w-[1098px]">
            
            <div className={`responsive-table  border overflow-x-hidden border-gray-200 rounded-lg shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
              <table className="w-full text-left">
                <thead className="bg-black  border-gray-300">
                  <tr>
                    <th className="py-3 px-4 font-semibold text-white transition-all duration-300 hover:bg-gray-800">ТИП ТРАНСПОРТА</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ГОРОД</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ДО 30КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ДО 50КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ДО 70КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ДО 90КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">ДО 150КМ</th>
                    <th className="py-3 px-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-800">МЕЖГОРОД</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <td className="py-3 px-4 font-medium transition-all duration-300 hover:text-gray-800">Газель 3м. 10 куб</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">1100</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">2200</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">3300</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">4400</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">5500</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">31</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">30</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <td className="py-3 px-4 font-medium transition-all duration-300 hover:text-gray-800">Газель 4м. 16 куб</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">1200</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">2400</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">3600</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">4800</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">6000</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">33</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">32</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <td className="py-3 px-4 font-medium transition-all duration-300 hover:text-gray-800">Газель 5м. 24 куб</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">1300х2</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">3900</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">5200</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">6500</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">7800</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">43</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">34</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <td className="py-3 px-4 font-medium transition-all duration-300 hover:text-gray-800">Газель 6м. 32 куб</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">1400х2</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">4200</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">5600</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">7000</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">8400</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">45</td>
                    <td className="py-3 px-4 text-center transition-all duration-300 hover:text-gray-800 hover:font-bold">35</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            
            
            <div className={`mt-8 bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isVisible ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
              <h3 className="text-xl font-bold mb-4 transition-all duration-300 hover:text-gray-800">Тарифы и условия перевозки:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">Стоимость работы машины до 20:00, от 1100 руб. за час</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">Стоимость работы машины после 20:00, 1.8*дневной оплаты руб. за час</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">Первый час работы оплачивается полностью, далее оплата каждые 30 минут</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">При заказе машины за город, стоимость взимается с учётом обратной дороги</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">Если машина должна прибыть на загрузку за город (без заказчика) заказчик вносит предоплату</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">При заказе машины за город 30 минут на погрузку и выгрузку включены в ставку, далее по тарифу</li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-gray-800">Если перед поездкой за город машина будет работать и по Рязани то работа по городу оплачивается отдельно</li>
              </ul>
              <div className="mt-4 p-4 text-white bg-black rounded-lg transition-all duration-500 hover:bg-gray-800 hover:scale-105">
                <p className="font-bold">Для переездов</p>
                <p>Предоставляем машину с грузчиками. Стоимость работы такой бригады (машина и два грузчика) от 2400 руб/час (минимальное время заказа 2 часа). Точный расчет будет произведен после уточнения характера груза.</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="p-5">
        <div className={`flex flex-col justify-center items-center mt-[50px] ${isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'}`}>
          <p className="text-xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Наши преимущества</p>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
          <div className="grid xl:grid-cols-3 list-disc min-[850px]:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[30px]">
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">
                Профессиональный водитель
              </p>
              <p className="transition-all duration-300 hover:text-gray-700">
                Опытный водители с большим стажем работы, знающие город и
                область
              </p>
            </div>
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">Надежный транспорт</p>
              <p className="transition-all duration-300 hover:text-gray-700">
                Ухоженный автомобили в отличном техническом состоянии
              </p>
            </div>
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">Доступные цены</p>
              <p className="transition-all duration-300 hover:text-gray-700">Прозрачная система расчета без скрытых платежей</p>
            </div>
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">Оперативность</p>
              <p className="transition-all duration-300 hover:text-gray-700">Быстрая обработка заказов и гибкий график работы</p>
            </div>
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">Гарантия безопасности</p>
              <p className="transition-all duration-300 hover:text-gray-700">Своевременная и безопасная доставка вашего груза</p>
            </div>
            <div className={`border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
              <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-800">Различные способы оплаты</p>
              <p className="transition-all duration-300 hover:text-gray-700">Наличный или безналичный расчёт (без НДС)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[30px]">
        <div className={`mt-[100px] flex flex-col justify-center items-center ${isVisible ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
          <p className="text-2xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Последние отзывы</p>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>

          <div className="p-5 mt-[30px] grid xl:grid-cols-3 min-[850px]:grid-cols-2 max-sm:grid-cols-1 justify-center gap-4">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`border-2 border-black rounded-md max-w-[350px] p-4 shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-blue-50 hover:border-blue-500 ${isVisible ? `animate-fadeInUp delay-${(index + 1) * 100}` : 'opacity-0'}`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-bold transition-all duration-300 hover:text-gray-800">{review.author}</p>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                <p className="text-sm text-gray-500 transition-all duration-300 hover:text-blue-500">{review.date}</p>
                <div className="w-full h-[1px] bg-gray-300 my-2 transition-all duration-300 hover:bg-blue-300"></div>
                <p className="transition-all duration-300 hover:text-gray-700">{review.text}</p>
                <p className="text-xs text-gray-400 mt-2 transition-all duration-300 hover:text-blue-400">Источник: Авито</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-4 items-center">
            <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661#open-reviews-list">
              <button className="px-4 py-3 bg-black text-white rounded-lg cursor-pointer transition-all duration-500 hover:bg-gray-800 hover:scale-110 hover:shadow-2xl animate-pulse-custom">
                Больше отзывов
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}