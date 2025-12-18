import fastify from 'fastify'
import { Knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await Knex('sqlite_schema').select('*')

  return { message: 'Hello World', tables }
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server running on PORT 3333 🚀')
})
