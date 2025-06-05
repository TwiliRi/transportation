"use client";
import Link from "next/link"
import Image from "next/image"
import {ScrollButton} from './scroll-button'
import Cars from '../../public/car2.png'
import CopyButton from "./copy-button";
import React, { useState, useEffect } from "react";

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        
        @keyframes flipIn {
          from {
            opacity: 0;
            transform: rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: rotateY(0deg);
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
        
        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.8s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
        
        .animate-rotateIn {
          animation: rotateIn 0.8s ease-out;
        }
        
        .animate-flipIn {
          animation: flipIn 0.8s ease-out;
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
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
        
        .delay-1000 {
          animation-delay: 1.0s;
        }
        
        .delay-1100 {
          animation-delay: 1.1s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
        
        .delay-1300 {
          animation-delay: 1.3s;
        }
        
        .delay-1400 {
          animation-delay: 1.4s;
        }
        
        .delay-1500 {
          animation-delay: 1.5s;
        }
        
        .delay-1600 {
          animation-delay: 1.6s;
        }
        
        .delay-1700 {
          animation-delay: 1.7s;
        }
        
        .delay-1800 {
          animation-delay: 1.8s;
        }
      `}</style>
      
      <header className="">
        <section className="min-h-[90dvh] w-full flex flex-col p-2">
          <div className="flex flex-row justify-center">
            <nav className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <ul className="flex flex-row items-center justify-center gap-12 p-11">
                <Link href='/'><li className="transition-all duration-300 hover:scale-110 hover:text-gray-800">Главная</li></Link>
                <Link href='/about'><li className="transition-all duration-300 hover:scale-110 hover:text-gray-800"><b>О мне</b></li></Link>
              </ul>
            </nav>
          </div>

          <div className="flex flex-row gap-6 items-center justify-center w-full">
            <div className={`flex flex-col items-center justify-around w-[60%] max-sm:w-[100%] z-20 rounded-md p-3 ${isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
              <h1 className="font-bold text-4xl text-center transition-all duration-500 hover:text-gray-800 hover:scale-105">О мне</h1>
              <div className="w-[70%] rounded-2xl h-[2px] my-8 bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
              <div className="">
                <p className="text-l transition-all duration-300 hover:translate-x-2">Здравствуйте, меня зовут Алексей.</p>
                <p className="text-l transition-all duration-300 hover:translate-x-2">Я профессиональный водитель с более чем 10-летним опытом работы в сфере грузоперевозок. За это время я помог сотням клиентов безопасно и своевременно доставить их грузы.</p>
                <br/>
                <p className="text-l transition-all duration-300 hover:translate-x-2">Предлагаю услуги по перевозке грузов и поездки за город. Предоставляю услуги в различных городах России, специализируюсь в городе <b>Рязань</b>.</p>
                <p className="text-l transition-all duration-300 hover:translate-x-2">Перевозки грузов осуществляются на автомобиле марки "Газель" ГАЗ A31R23</p>
                <br/>
                <p className="transition-all duration-300 hover:translate-x-2">Работаю по принципу "Грузоперевозки – быстро, надежно, удобно!"</p>
                <br/>

                <div className="bg-black text-white p-5 rounded-lg text-center max-w-md mx-auto mb-8 transition-all duration-500 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl animate-pulse-custom">
                  <p className="text-xl mb-2">Мобильный номер телефона:</p>
                  <p className="text-3xl font-bold animate-bounce-custom">+7 920 997-77-11</p>
                  <a href="tel:+79209977711" className="cursor-pointer bg-white text-black my-4 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300 inline-block hover:scale-110 hover:shadow-lg">
                    Позвонить сейчас
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[70%]">
                <Link href="https://www.avito.ru/ryazan/predlozheniya_uslug/gruzoperevozki_4385585661">
                  <button className="cursor-pointer border-black border-2 w-full rounded-md p-2 text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg">Написать в Авито</button>
                </Link>
                <div className="transition-all duration-300 hover:scale-105">
                  <CopyButton/>
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
          <p className="text-xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Характеристики машины</p> 
          <div className="w-[300px] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
          
          <div className={`mt-[60px] transition-all duration-1000 hover:scale-105 ${isVisible ? 'animate-slideInFromLeft delay-500' : 'opacity-0'}`}>
            <Image src={Cars} alt="Газель" />
          </div>
          
          <div className={`flex flex-row gap-3 transition-all duration-300 hover:translate-x-2 ${isVisible ? 'animate-fadeInLeft delay-600' : 'opacity-0'}`}>
            <p>Грузоподъёмность</p>
            <p><b>до 1.5 тонн</b></p>
          </div>
          <div className={`flex flex-row gap-3 transition-all duration-300 hover:translate-x-2 ${isVisible ? 'animate-fadeInLeft delay-700' : 'opacity-0'}`}>
            <p>Длина грузового отсека</p>
            <p><b>3031мм.</b></p>
          </div>
          <div className={`flex flex-row gap-3 transition-all duration-300 hover:translate-x-2 ${isVisible ? 'animate-fadeInLeft delay-800' : 'opacity-0'}`}>
            <p>Высота</p>
            <p><b>1927мм.</b></p>
          </div>
          <div className={`flex flex-row gap-3 transition-all duration-300 hover:translate-x-2 ${isVisible ? 'animate-fadeInLeft delay-900' : 'opacity-0'}`}>
            <p>Объём</p>
            <p><b>11.5 М³</b></p>
          </div>
        </div>    
      </section>

      <div className={`mt-[50px] flex flex-col justify-center items-center ${isVisible ? 'animate-slideInFromBottom delay-1000' : 'opacity-0'}`}>
        <p className="text-xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Как я работаю</p>
        <div className="w-[300px] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
        <div className="grid xl:grid-cols-4 min-[850px]:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[30px]">
          <div className={`border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center transition-all duration-500 hover:scale-105 hover:bg-gray-50 hover:border-gray-600 ${isVisible ? 'animate-scaleIn delay-1100' : 'opacity-0'}`}>
            <div className="text-3xl font-bold mb-2 transition-all duration-300 hover:text-gray-800 hover:scale-125 hover:rotate-12">1</div>
            <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-700">Принимаю заказ</p>
            <p className="transition-all duration-300 hover:text-gray-600">Обсуждаем детали перевозки, согласовываем время и стоимость</p>
          </div>
          <div className={`border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center transition-all duration-500 hover:scale-105 hover:bg-gray-50 hover:border-gray-600 ${isVisible ? 'animate-rotateIn delay-1200' : 'opacity-0'}`}>
            <div className="text-3xl font-bold mb-2 transition-all duration-300 hover:text-gray-800 hover:scale-125 hover:rotate-12">2</div>
            <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-700">Подаю транспорт</p>
            <p className="transition-all duration-300 hover:text-gray-600">Приезжаю точно в оговоренное время на место погрузки</p>
          </div>
          <div className={`border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center transition-all duration-500 hover:scale-105 hover:bg-gray-50 hover:border-gray-600 ${isVisible ? 'animate-flipIn delay-1300' : 'opacity-0'}`}>
            <div className="text-3xl font-bold mb-2 transition-all duration-300 hover:text-gray-800 hover:scale-125 hover:rotate-12">3</div>
            <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-700">Выполняю перевозку</p>
            <p className="transition-all duration-300 hover:text-gray-600">Бережно и аккуратно доставляю ваш груз до места назначения</p>
          </div>
          <div className={`border-2 border-black rounded-md p-4 max-w-[250px] shadow-md hover:shadow-xl text-center transition-all duration-500 hover:scale-105 hover:bg-gray-50 hover:border-gray-600 ${isVisible ? 'animate-scaleIn delay-1400' : 'opacity-0'}`}>
            <div className="text-3xl font-bold mb-2 transition-all duration-300 hover:text-gray-800 hover:scale-125 hover:rotate-12">4</div>
            <p className="font-bold text-lg mb-2 transition-all duration-300 hover:text-gray-700">Завершаю работу</p>
            <p className="transition-all duration-300 hover:text-gray-600">Помогаю с разгрузкой и получаю оплату удобным для вас способом</p>
          </div>
        </div>
      </div>

      <div className={`mt-[50px] flex flex-col justify-center items-center mb-[30px] ${isVisible ? 'animate-fadeInUp delay-1500' : 'opacity-0'}`}>
        <p className="text-xl transition-all duration-500 hover:text-gray-800 hover:scale-110">Часто задаваемые вопросы</p>
        <div className="w-[300px] rounded-2xl h-[2px] bg-black transition-all duration-500 hover:bg-gray-800 hover:h-[4px]"></div>
        <div className="w-full max-w-[800px] mt-[30px] space-y-6">
          <div className={`border-2 border-gray-300 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-gray-400 ${isVisible ? 'animate-slideInFromLeft delay-1600' : 'opacity-0'}`}>
            <p className="font-bold text-lg mb-3 transition-all duration-300 hover:text-gray-800 hover:translate-x-2">Как рассчитывается стоимость перевозки?</p>
            <p className="transition-all duration-300 hover:text-gray-700 hover:translate-x-1">Стоимость перевозки по городу рассчитывается почасово (от 1100 руб/час), за город - по километражу (от 25 руб/км). Минимальный заказ - 2 часа.</p>
          </div>
          <div className={`border-2 border-gray-300 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-l hover:from-gray-50 hover:to-white hover:border-gray-400 ${isVisible ? 'animate-slideInFromRight delay-1700' : 'opacity-0'}`}>
            <p className="font-bold text-lg mb-3 transition-all duration-300 hover:text-gray-800 hover:translate-x-2">Нужно ли заказывать заранее?</p>
            <p className="transition-all duration-300 hover:text-gray-700 hover:translate-x-1">Желательно заказывать за 1-2 дня, но при наличии свободного транспорта возможен выезд в течение часа.</p>
          </div>
          <div className={`border-2 border-gray-300 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-gray-400 ${isVisible ? 'animate-scaleIn delay-1800' : 'opacity-0'}`}>
            <p className="font-bold text-lg mb-3 transition-all duration-300 hover:text-gray-800 hover:translate-x-2">Какие документы нужны для заказа?</p>
            <p className="transition-all duration-300 hover:text-gray-700 hover:translate-x-1">Для заказа достаточно указать адрес погрузки, адрес выгрузки и контактный телефон.</p>
          </div>
        </div>
      </div>
    </>
  );
}