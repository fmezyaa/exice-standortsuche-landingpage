import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EXICE - 5.000€ Finderlohn',
    short_name: 'EXICE',
    description: 'EXICE sucht Fitnessflächen ab 1.500m². 5.000€ Finderlohn für erfolgreiche Vermittlung!',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#e6223d',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
