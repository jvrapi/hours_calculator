const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist'

const ormConfig = {
  type: process.env.BD_TYPE,
  host: process.env.BD_HOST,
  database: process.env.BD_NAME,
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  entities: [rootDir + '/entities/*.{js,ts}'],
  migrations: [rootDir + '/database/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: rootDir + '/database/migrations',
    entitiesDir: rootDir + '/entities'
  }
}

module.exports = ormConfig
