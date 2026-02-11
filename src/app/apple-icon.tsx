import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          borderRadius: '36px',
        }}
      >
        {/* Red diagonal slash - the EXICE "I" mark */}
        <svg width="80" height="140" viewBox="0 0 80 140">
          <polygon points="50,0 80,0 30,140 0,140" fill="#e6223d" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
