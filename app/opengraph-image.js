import { ImageResponse } from 'next/og'

export const alt = 'Грузоперевозки Рязань 62 - Надежные транспортные услуги'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🚛</div>
        <div style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Грузоперевозки Рязань 62</div>
        <div style={{ fontSize: 24, textAlign: 'center', opacity: 0.9 }}>Надежные транспортные услуги</div>
        <div style={{ fontSize: 20, textAlign: 'center', marginTop: 20, opacity: 0.8 }}>Газель • Фургон • Грузчики • 24/7</div>
      </div>
    ),
    {
      ...size,
    }
  )
}