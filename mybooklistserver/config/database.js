'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', 5432),
      user: Env.get('DB_USER', 'postgres'),
      password: Env.get('DB_PASSWORD', '123456'),
      database: Env.get('DB_DATABASE', 'postgres')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
