import {pool} from '../database.js'
export const indexController = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM product')
    res.json(result)
}