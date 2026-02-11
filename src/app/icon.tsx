import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg width="16" height="26" viewBox="0 0 80 140">
          <polygon points="50,0 80,0 30,140 0,140" fill="#e6223d" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
