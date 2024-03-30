const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database(':memory:')

// this is a top-level await
// ;(async () => {
//   // open the database
//   const db = await open({
//     filename: '/tmp/database.db',
//     driver: sqlite3.Database,
//   })

// })()
db.exec(
  'CREATE TABLE products (id TEXT, title TEXT, price TEXT, category TEXT, description TEXT, image TEXT'
)

export default db
