import { pool } from '../database.js'
export const getProducts = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM product')
    res.json(rows)
}

export const getProduct = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM product WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({ message: 'product not found' })
    //console.log(rows)
    res.json(rows[0])
}


export const createProducts = async (req, res) => {
    const { name, price, description } = req.body
    const [rows] = await pool.query('INSERT INTO product (name, price,description ) VALUES (?,?,?)', [name, price, description])

    res.send({
        id: rows.insertId,
        name,
        price,
        description
    })

}

export const updateProducts = (req, res) => res.send('actualizando productos')

export const deleteProducts = async (req, res) => {
    const [result] = await pool.query('DELETE FROM product WHERE id = ?', [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({ message: 'product not found' })
    
    console.log(result)
    res.sendStatus( 204 )
}