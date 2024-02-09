import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '1088357690',
    database: 'back-end-ecommerce',
})