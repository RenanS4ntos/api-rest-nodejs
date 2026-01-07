import knex from 'knex'
import type { Knex as KnexType } from 'knex'

import { env } from './env'

const config: KnexType.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite3'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

const Knex = knex(config)

export { Knex, config }
