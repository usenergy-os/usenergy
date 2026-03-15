import '../styles/globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { Suspense } from 'react';

export const metadata = {
  title: 'US Energy OS | CatalynQ & Content Hub',
  description: 'The digital connective tissue for the future of energy transition and sustainability.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
