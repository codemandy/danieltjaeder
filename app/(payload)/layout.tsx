/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { handleServerFunctions } from '@payloadcms/next/layouts'

// Load the generated admin styles first
import './custom.scss'

// Import your Payload config and wrap it in a `Promise`, as the helper expects
import payloadConfig from '@/payload.config'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const configPromise = Promise.resolve(payloadConfig)
  return (
    <RootLayout
      config={configPromise}
      importMap={{} as any}
      serverFunction={handleServerFunctions as any}
    >
      {children}
    </RootLayout>
  )
}

export default Layout 
