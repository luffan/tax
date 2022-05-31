const db = require('../db')


class IncomeController {
    async createIncome(req, res) {
        try {
            const { sum, year, client_id } = req.body

            if (!sum || !year || !client_id) {
                res.statusCode(500);
                return;
            }

            const newIncome = await db.query(
                "INSERT INTO income (sum, year, client_id) values ($1, $2, $3) RETURNING *",
                [
                    parseInt(sum), parseInt(year), parseInt(client_id)
                ]
            );

            res.json(newIncome.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async getIncome(req, res) {
        try {
            const income = await db.query('SELECT * FROM income')
            res.json(income.rows)
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async getOneIncome(req, res) {
        try {
            const id = req.params.id

            const income = await db.query("SELECT * FROM income where id = $1", [id]);

            res.json(income.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async updateIncome(req, res) {
        try {
            const {
                id,
                sum,
                year,
                client_id
            } = req.body;

            if (!id) {
                res.statusCode(500);
                return;
            }

            const income = await db.query(
                "UPDATE income set sum = $1, year = $2, client_id = $3 where id = $4 RETURNING *",
                [
                    sum,
                    year,
                    client_id,
                    id
                ]
            );
            res.json(id)
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async deleteIncome(req, res) {
        try {
            const id = req.params.id

            const income = await db.query("DELETE * FROM income where id = $1", [id]);

            res.json(income.rows[0])
        } catch (e) {
            res.sendStatus(500);
        }
    }

}

module.exports = new IncomeController()