import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Грузоперевозки Рязань 62 - Надежные транспортные услуги'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Загружаем иконку грузовика
  const truckIconPath = join(process.cwd(), 'public', 'free-icon-delivery-truck-310215.png')
  const truckIconBuffer = readFileSync(truckIconPath)
  const truckIconBase64 = `data:image/png;base64,${truckIconBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Иконка грузовика */}
        <div 
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            width: '120px',
            height: '120px',
            background: '#000000',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <img
            src={truckIconBase64}
            alt="Грузовик"
            style={{
              width: '80px',
              height: '80px',
              filter: 'invert(1)', // Делаем иконку белой
            }}
          />
        </div>
        
        {/* Основной контент */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <div style={{ 
            fontSize: 52, 
            fontWeight: 'bold', 
            marginBottom: 20,
            color: '#000000'
          }}>
            Грузоперевозки Рязань
          </div>
          
          {/* Разделительная линия */}
          <div style={{
            width: '300px',
            height: '3px',
            background: '#000000',
            borderRadius: '2px',
            marginBottom: '30px'
          }}></div>
          
          <div style={{ 
            fontSize: 28, 
            marginBottom: 25,
            color: '#374151',
            fontWeight: '600'
          }}>
            Надежные транспортные услуги
          </div>
          
          <div style={{ 
            fontSize: 22, 
            color: '#6b7280',
            marginBottom: '30px'
          }}>
            Газель • Фургон • Грузчики • 24/7
          </div>
          
          {/* Телефон в черном блоке */}
          <div style={{
            background: '#000000',
            color: '#ffffff',
            padding: '20px 40px',
            borderRadius: '12px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            +7 920 997-77-11
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          fontSize: '18px',
          color: '#9ca3af',
          fontWeight: '500'
        }}>
          Алексей
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}