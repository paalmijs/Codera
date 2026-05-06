import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './auth.js'

const app = express()
const port = process.env.PORT || 3005
const clientUrl = process.env.CLIENT_URL || 'http://127.0.0.1:5173'

app.use(
  cors({
    origin: clientUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
)

app.all('/api/auth/*', toNodeHandler(auth))

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'codera-api' })
})

app.listen(port, () => {
  console.log(`Codera API running at http://localhost:${port}`)
})
