import HomeContent from './components/home-content';

export const metadata = {
  title: 'Грузоперевозки в Рязани | Алексей - Газель 3м, 4м, 6м',
  description: 'Качественные услуги грузоперевозок в Рязани и области. Газели 3м, 4м, 6м. Быстро, надежно, недорого. Звоните: +7 920 997-77-11',
  keywords: 'грузоперевозки, Рязань, газель, перевозка грузов, доставка, транспорт, Алексей',
  openGraph: {
    title: 'Грузоперевозки в Рязани | Алексей',
    description: 'Качественные услуги грузоперевозок в Рязани и области. Газели разных размеров.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: 'Грузоперевозки в Рязани | Алексей',
    description: 'Качественные услуги грузоперевозок в Рязани и области.',
  },
};

export default function Home() {
  return <HomeContent />;
}