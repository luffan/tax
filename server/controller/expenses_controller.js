const db = require('../db')


class ExpensesController {
    async createExpenses(req, res) {
        const {sum, year, client_id} = req.body
        const newExpenses = await db.query(
            "INSERT INTO expenses (sum, year, client_id) values ($1, $2, $3) RETURNING *",
            [
                sum, year, client_id
            ]
        );

        res.json(newExpenses.rows[0])
    }

    async getExpenses(req, res) {
        const expenses = await db.query('SELECT * FROM expenses')
        res.json(expenses.rows)
    }

    async getOneExpenses(req, res) {
        const id = req.params.id

        const expenses = await db.query("SELECT * FROM expenses where id = $1", [id]);

        res.json(expenses.rows[0])
    }

    async updateExpenses(req, res) {
        const {
            sum,
            year,
            client_id
        } = req.body;

        const expenses = await db.query(
            "UPDATE expenses set sum = $1, year = $2, client_id = $3 where id = $4 RETURNING *",
            [
                sum,
                year,
                client_id,
            ]
        );
    }

    async deleteExpenses(req, res) {
        const id = req.params.id

        const expenses = await db.query("DELETE * FROM expenses where id = $1", [id]);

        res.json(expenses.rows[0])
    }

}

module.exports = new ExpensesController()