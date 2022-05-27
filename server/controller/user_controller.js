const db = require("../db");

class UserController {
    async createUser(req, res) {
        try {
            const { name, surname, middlename, passport_id, login, password, district } = req.body

            const newUser = await db.query(
                "INSERT INTO client (name, surname, middlename, passport_id, login, password, district) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
                [
                    name,
                    surname,
                    middlename,
                    passport_id,
                    login,
                    password,
                    district,
                ]
            );

            res.json(newUser.rows[0]);
        } catch (e) {
            res.status(500).send("Failed create user");
        }

    }

    async getUsers(req, res) {
        const users = await db.query("SELECT * FROM client");
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const id = req.params.id;

        const user = await db.query("SELECT * FROM client where id = $1", [id]);

        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        try {
            const {
                id,
                name,
                surname,
                middlename,
                passport_id,
                login,
                password,
                district,
            } = req.body;

            const user = await db.query(
                "UPDATE client set name = $1, surname = $2, middlename = $3, passport_id = $4, login = $5, password = $6, district = $7 WHERE id = $8 RETURNING *",
                [
                    name,
                    surname,
                    middlename,
                    passport_id,
                    login,
                    password,
                    district,
                    id,
                ]
            );
            res.json(id);
        } catch (e) {
            res.status(500).send("Failed update user");
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;

        const user = await db.query("DELETE * FROM client where id = $1", [id]);

        res.json(user.rows[0]);
    }
}

module.exports = new UserController();
