'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
        <link
          href={
            process.env.NODE_ENV === 'development'
              ? '/admin/config.local.yml'
              : '/admin/config.yml'
          }
          type="text/yaml"
          rel="cms-config-url"
        />
      </head>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />
      <div id="nc-root" />
    </>
  );
}
