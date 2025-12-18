import knex from 'knex'
import type { Knex as KnexType } from 'knex'

import { env } from './env'

const config: KnexType.Config = {
  client: env.DATABASE_CLIENT,
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

const Knex = knex(config)

export { Knex, config }
