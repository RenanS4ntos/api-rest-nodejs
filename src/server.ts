import fastify from 'fastify'
import { Knex } from './database'

const app = fastify()

app.get('/transactions', async () => {
  const transactions = await Knex('transactions').select('*')

  return transactions
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server running on PORT 3333 🚀')
})
