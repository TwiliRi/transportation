import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} scroll-smooth`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <footer>
          
          <div className="w-[90%] m-auto rounded-2xl h-[2px] bg-black"></div>
          <div className="flex flex-row max-sm:flex-col gap-5 justify-between items-center  p-11">
           
            <nav>
              <ul className="flex flex-row gap-8">
                <Link href='/'><li>Главная</li></Link>
                <Link href='/about'><li>О нас</li></Link>
                <Link href='/feedback'><li>Отзывы</li></Link>
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
