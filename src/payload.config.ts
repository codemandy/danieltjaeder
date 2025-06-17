import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'

if (!process.env.S3_BUCKET) {
  throw new Error('S3_BUCKET is not defined')
}
if (!process.env.S3_ACCESS_KEY_ID) {
  throw new Error('S3_ACCESS_KEY_ID is not defined')
}
if (!process.env.S3_SECRET_ACCESS_KEY) {
  throw new Error('S3_SECRET_ACCESS_KEY is not defined')
}
if (!process.env.S3_REGION) {
  throw new Error('S3_REGION is not defined')
}
if (!process.env.S3_ENDPOINT) {
  throw new Error('S3_ENDPOINT is not defined')
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Projects],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
      ssl: { rejectUnauthorized: false }, // Always use SSL with Supabase
    },
    push: false, // Prevent Payload from trying to create/manage the database
    migrationDir: path.resolve(__dirname, 'migrations'),
  }),
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
        endpoint: process.env.S3_ENDPOINT!,
      },
    }),
  ],
})
