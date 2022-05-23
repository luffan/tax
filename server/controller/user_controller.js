const db = require('../db')


class UserController {
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM user')
        res.json(users.rows)
    }

    async addUser(req, res) {
        const {name, surname} = req.body
        const newUser = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
        res.json(newUser.rows[0])
    }
}

module.exports = new UserController()