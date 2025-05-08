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
                  className="absolute top-[100px] md:left-[-600px] xl:left-[-400px] 2xl:left-[-200px]
                  lg:left-[-600px] min-[750px]:left-[-650px] sm:left-[-700px] min-w-[1200px]
                  z-20 max-sm:left-[-900px]"
                />
              </div>

              <div className="flex gap-8 flex-col justify-around w-[60%] max-sm:w-[100%] z-20 h-full rounded-md p-3">
                <h1 className="font-bold text-4xl text-center">Добро пожаловать</h1>
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
                  <p>
                    Чтобы наше сотрудничество было максимально комфортным,
                    рекомендую ознакомиться с <b>ценами</b> на мои услуги ниже.
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
          <p className="text-xl">Цены</p>
          <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
          <div className="flex mt-[60px] flex-row max-md:flex-col max-md:gap-[20px] gap-[200px] justify-center items-center">
            <div className="w-[300px] border-2 rounded-md border-black p-7 flex flex-col justify-center items-center hover:shadow-3xl">
              <p className="text-xl">Город</p>
              <div className="w-[70%] rounded-2xl h-[2px] bg-black"></div>
              <p className="mt-3">Цена договорная</p>
              <p>От 1200 рублей/час</p>
              <p>
                <b>Минимум 2 часа</b>
              </p>
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
              <li>Сборка (от 1000 рублей)</li>
            </ul>
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
                Опытный водитель с большим стажем работы, знающие город и
                область
              </p>
            </div>
            <div className=" border-black rounded-md p-4 max-w-[350px] shadow-md hover:shadow-xl">
              <p className="font-bold text-lg mb-2">Надежный транспорт</p>
              <p>
                Ухоженный автомобиль ГАЗель в отличном техническом состоянии
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
