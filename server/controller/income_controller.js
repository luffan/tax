const db = require('../db')


class IncomeController {
    async createIncome(req, res) {
        const {sum, year, client_id} = req.body

        const newIncome = await db.query(
            "INSERT INTO income (sum, year, client_id) values ($1, $2, $3) RETURNING *",
            [
                parseInt(sum), parseInt(year), parseInt(client_id)
            ]
        );

        res.json(newIncome.rows[0])
    }

    async getIncome(req, res) {
        const income = await db.query('SELECT * FROM income')
        res.json(income.rows)
    }

    async getOneIncome(req, res) {
        const id = req.params.id

        const income = await db.query("SELECT * FROM income where id = $1", [id]);

        res.json(income.rows[0])
    }

    async updateIncome(req, res) {
        const {
            sum,
            year,
            client_id
        } = req.body;

        const income = await db.query(
            "UPDATE income set sum = $1, year = $2, client_id = $3 where id = $4 RETURNING *",
            [
                sum,
                year,
                client_id,
            ]
        );
    }

    async deleteIncome(req, res) {
        const id = req.params.id

        const income = await db.query("DELETE * FROM income where id = $1", [id]);

        res.json(income.rows[0])
    }

}

module.exports = new IncomeController()