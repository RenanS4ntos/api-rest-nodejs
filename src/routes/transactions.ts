import { FastifyInstance } from 'fastify'
import { Knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/transactions', async () => {
    const transactions = await Knex('transactions').select('*')

    return transactions
  })
}
