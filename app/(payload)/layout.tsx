/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootLayout } from '@payloadcms/next/layouts'
import serverFunctions from './serverFunctions'
import React from 'react'

// Load the generated admin styles first
import './custom.scss'

// Import the generated client import map so Payload can find client components
import { importMap as payloadImportMap } from './admin/importMap'

// Import your Payload config
import payloadConfig from '@/payload.config'

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  const RL: any = RootLayout
  return (
    <RL config={Promise.resolve(payloadConfig)} importMap={payloadImportMap as any} serverFunction={serverFunctions}>
      {children}
    </RL>
  )
} 
