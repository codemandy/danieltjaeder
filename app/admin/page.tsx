'use client';

import Script from 'next/script';
import React from 'react';

export default function AdminPage() {
  return (
    <>
      {/* Identity widget & Decap CMS scripts */}
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
