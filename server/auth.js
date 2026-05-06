import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { MongoClient } from 'mongodb'

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/codera'
const client = new MongoClient(mongoUri)
const db = client.db(process.env.MONGODB_DB || 'codera')

export const auth = betterAuth({
  appName: 'Codera',
  baseURL: process.env.BETTER_AUTH_URL || 'http://127.0.0.1:3005',
  trustedOrigins: [process.env.CLIENT_URL || 'http://127.0.0.1:5173'],
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
})
