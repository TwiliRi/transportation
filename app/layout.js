import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Грузоперевозки Рязань 62 - Транспортные услуги | Доставка грузов по области',
  description: 'Профессиональные грузоперевозки в Рязани и Рязанской области. Перевозка мебели, стройматериалов, переезды квартир и офисов. Газель, фургон, грузчики. Быстро, надежно, недорого. Работаем 24/7.',
  keywords: [
    'грузоперевозки рязань 62',
    'транспорт рязань',
    'доставка грузов рязань',
    'перевозка мебели рязань',
    'газель рязань',
    'грузчики рязань',
    'переезд рязань',
    'грузовое такси рязань',
    'фургон рязань',
    'доставка стройматериалов',
    'квартирный переезд',
    'офисный переезд',
    'грузоперевозки рязанская область',
    'транспортные услуги рязань',
    'перевозка грузов недорого',
    'грузовые перевозки 24 часа',
    'доставка по рязани',
    'межгород грузоперевозки',
    'малотоннажные перевозки',
    'услуги грузчиков'
  ].join(', '),
  author: 'Грузоперевозки Рязань 62',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  openGraph: {
    title: 'Грузоперевозки Рязань 62 - Надежные транспортные услуги',
    description: 'Профессиональные грузоперевозки в Рязани. Газель, фургон, грузчики. Переезды, доставка мебели и стройматериалов. Работаем круглосуточно.',
    url: 'https://www.perevozki-gruzov62.ru',
    siteName: 'Грузоперевозки Рязань 62',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Грузоперевозки Рязань 62',
    description: 'Надежные грузоперевозки в Рязани и области. Газель, грузчики, переезды.',
  },
  alternates: {
    canonical: 'https://www.perevozki-gruzov62.ru',
  },
  other: {
    'geo.region': 'RU-RYA',
    'geo.placename': 'Рязань',
    'geo.position': '54.6269;39.6916',
    'ICBM': '54.6269, 39.6916',
  }
}

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer>
          
          <div className="w-[90%] m-auto rounded-2xl h-[2px] bg-black"></div>
          <div className="flex flex-row max-sm:flex-col gap-5 justify-between items-center  p-11">
           
            <nav>
              <ul className="flex flex-row gap-8">
                <Link href='/'><li>Главная</li></Link>
                <Link href='/about'><li>О мне</li></Link>
              </ul>
            </nav>
            <div>
              <p className="">prod.by <b><a href="https://github.com/twiliri">@TwiliRi</a></b></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
