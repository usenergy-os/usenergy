'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { pageview, G_TAG_ID } from '../lib/tracking/ga4';

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && G_TAG_ID) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  if (!G_TAG_ID) return null;

  return (
    <>
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${G_TAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
