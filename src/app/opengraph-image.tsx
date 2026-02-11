import { ImageResponse } from 'next/og';

export const alt = 'EXICE - 5.000€ Finderlohn für Fitnessflächen';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          position: 'relative',
        }}
      >
        {/* Accent bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#e6223d',
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <span style={{ color: '#f7f7f7', fontSize: '64px', fontWeight: 300, letterSpacing: '0.15em' }}>
            E X
          </span>
          <svg width="40" height="70" viewBox="0 0 80 140">
            <polygon points="50,0 80,0 30,140 0,140" fill="#e6223d" />
          </svg>
          <span style={{ color: '#f7f7f7', fontSize: '64px', fontWeight: 300, letterSpacing: '0.15em' }}>
            C E
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#ffffff', fontSize: '72px', fontWeight: 900, lineHeight: 1 }}>
            5.000€
          </span>
          <span style={{ color: '#e6223d', fontSize: '56px', fontWeight: 900, lineHeight: 1 }}>
            FINDERLOHN
          </span>
        </div>

        {/* Subtitle */}
        <span style={{ color: '#9ca3af', fontSize: '28px', marginTop: '32px' }}>
          Fitnessflächen ab 1.500m² gesucht
        </span>

        {/* City pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '28px',
          }}
        >
          {['Luxemburg', 'Saarbrücken', 'Wiesbaden', 'Mainz'].map((city) => (
            <span
              key={city}
              style={{
                padding: '8px 20px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '999px',
                color: '#ffffff',
                fontSize: '22px',
              }}
            >
              {city}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#6b7280', fontSize: '18px' }}>
            Community Fitness Clubs aus der Region
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
