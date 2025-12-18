import 'dotenv/config'

import knex from 'knex'
import type { Knex as KnexType } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables.')
}

const config: KnexType.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

const Knex = knex(config)

export { Knex, config }
