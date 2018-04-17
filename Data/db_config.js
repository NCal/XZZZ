const dbConfig = {
  // user: 'node_user',
  // host: 'localhost',
  // database: 'linksdb',
  // port: 5432
  connectionString: process.env.DATABASE_URL,
  ssl: true
}

module.exports = dbConfig
