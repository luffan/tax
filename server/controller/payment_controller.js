const db = require("../db");

class PaymentController {
    async getPayments(req, res) {
        try {
            const payments = await db.query("SELECT * FROM payment");
            res.json(payments.rows);
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async getOnePayment(req, res) {
        try {
            const id = req.params.id;

            const payment = await db.query("SELECT * FROM payment where id = $1", [id]);

            res.json(payment.rows[0]);
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async updatePayment(req, res) {
        try {
            const {
                id,
                date,
                amount,
            } = req.body;

            const payment = await db.query(
                "UPDATE payment set date = $1, amount = $2 WHERE id = $3 RETURNING *",
                [
                    date,
                    amount,
                    id,
                ]
            );
            res.json(id);
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async createPayment(req, res) {
        try {
            const {
                date, amount
            } = req.body;

            const newTax = await db.query(
                "INSERT INTO payment (date, amount) values ($1, $2) RETURNING *",
                [date, amount]
            );

            res.json(newTax.rows[0]);
        } catch (e) {
            res.sendStatus(500);
        }
    }

    async deletePayment(req, res) {
        try {
            const id = req.params.id;

            const user = await db.query("DELETE * FROM payment where id = $1", [id]);

            res.json(user.rows[0]);
        } catch (e) {
            res.sendStatus(500);
        }
    }

}

module.exports = new PaymentController();
