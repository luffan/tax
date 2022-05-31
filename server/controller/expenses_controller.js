const db = require('../db')


class ExpensesController {
    async createExpenses(req, res) {
        try {
            const { sum, year, client_id } = req.body

            if (!sum || !year || !client_id) {
                res.statusCode(500);
                return;
            }

            const newExpenses = await db.query(
                "INSERT INTO expenses (sum, year, client_id) values ($1, $2, $3) RETURNING *",
                [
                    sum, year, client_id
                ]
            );

            res.json(newExpenses.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async getExpenses(req, res) {
        try {
            const expenses = await db.query('SELECT * FROM expenses')
            res.json(expenses.rows)
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async getOneExpenses(req, res) {
        try {
            const id = req.params.id

            const expenses = await db.query("SELECT * FROM expenses where id = $1", [id]);

            res.json(expenses.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async updateExpenses(req, res) {
        try {
            const {
                sum,
                year,
                client_id
            } = req.body;

            if (!id) {
                res.statusCode(500);
                return;
            }

            const expenses = await db.query(
                "UPDATE expenses set sum = $1, year = $2, client_id = $3 where id = $4 RETURNING *",
                [
                    sum,
                    year,
                    client_id,
                ]
            );
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async deleteExpenses(req, res) {
        try {
            const id = req.params.id

            const expenses = await db.query("DELETE * FROM expenses where id = $1", [id]);

            res.json(expenses.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

}

module.exports = new ExpensesController()