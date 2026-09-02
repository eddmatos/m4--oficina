import mysql2 from 'mysql2/promise'

const pool = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'oficina',

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool