import mysql2 from 'mysql2/promise'

const pool = mysql2.createPool({
    host: process.env.DB_HOST ?? '127.0.0.1',
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'SQLsenhafoda0!',
    database: process.env.DB_NAME ?? 'oficina',

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool