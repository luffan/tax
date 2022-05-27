const db = require('../db')


class IncomeController {
    async createIncome(req, res) {
        const {name, surname, middlename, passport_id, login, password, district, income, expenses} = req.body

        const newIncome = await db.query(
            "INSERT INTO client (name, surname, middlename, passport_id, login, password, district, income, expenses) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [
                name,
                surname,
                middlename,
                passport_id,
                login,
                password,
                district,
                income,
                expenses,
            ]
        );

        res.json(newPerson.rows[0])
    }

    async getIncome(req, res) {
        const users = await db.query('SELECT * FROM client')
        res.json(users.rows)
    }

    async getOneIncome(req, res) {
        const id = req.params.id

        const user = await db.query("SELECT * FROM client where id = $1", [id]);

        res.json(user.rows[0])
    }

    async updateIncome(req, res) {
        const {
            id,
            name,
            surname,
            middlename,
            passport_id,
            login,
            password,
            district,
            income,
            expenses,
        } = req.body;

        const user = await db.query(
            "UPDATE client set name = $1, surname = $2, middlename = $3, passport_id = $4, login = $5, password = $6, district = $7, income = $8, expenses = $9 where id = $10 RETURNING *",
            [
                name,
                surname,
                middlename,
                passport_id,
                login,
                password,
                district,
                income,
                expenses,
                id,
            ]
        );
    }

    async deleteIncome(req, res) {
        const id = req.params.id

        const user = await db.query("DELETE * FROM client where id = $1", [id]);

        res.json(user.rows[0])
    }

}

module.exports = new IncomeController()