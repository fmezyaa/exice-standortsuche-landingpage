interface LogoProps {
  variant?: 'blue' | 'red';
  className?: string;
}

export function Logo({ variant = 'blue', className = '' }: LogoProps) {
  const accentColor = variant === 'blue' ? '#72add9' : '#e6223d';
  const textColor = '#4a4a49';

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* E */}
      <text x="0" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">E</text>

      {/* X */}
      <text x="35" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">X</text>

      {/* I - Diagonaler Strich */}
      <polygon
        points="95,5 105,5 85,45 75,45"
        fill={accentColor}
      />

      {/* C */}
      <text x="110" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">C</text>

      {/* E */}
      <text x="145" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">E</text>
    </svg>
  );
}

export function LogoWhite({ variant = 'blue', className = '' }: LogoProps) {
  const accentColor = variant === 'blue' ? '#72add9' : '#e6223d';
  const textColor = '#f7f7f7';

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* E */}
      <text x="0" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">E</text>

      {/* X */}
      <text x="35" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">X</text>

      {/* I - Diagonaler Strich */}
      <polygon
        points="95,5 105,5 85,45 75,45"
        fill={accentColor}
      />

      {/* C */}
      <text x="110" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">C</text>

      {/* E */}
      <text x="145" y="38" fill={textColor} fontFamily="Gotham, sans-serif" fontWeight="300" fontSize="42" letterSpacing="0.1em">E</text>
    </svg>
  );
}
