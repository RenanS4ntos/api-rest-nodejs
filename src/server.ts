import fastify from 'fastify'
import { Knex } from './database'

import { env } from './env'

const app = fastify()

app.get('/transactions', async () => {
  const transactions = await Knex('transactions').select('*')

  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP Server running on PORT ${env.PORT} 🚀`)
})
