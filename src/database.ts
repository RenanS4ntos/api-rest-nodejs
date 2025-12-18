import knex from 'knex'
import type { Knex as KnexType } from 'knex'

const config: KnexType.Config = {
  client: 'sqlite3',
  connection: {
    filename: './database/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

const Knex = knex(config)

export { Knex, config }
