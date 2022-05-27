import axios from 'axios'

export var getExpenses = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/expenses`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}

export var createOrUpdateExpenses = async (expenses) => {
    try {
        if (expenses[0] === "") {
            await axios.post(
                `http://localhost:8080/api/expenses`,
                {
                    "sum": expenses[1],
                    "year": expenses[2],
                    "client_id": expenses[3]
                })
        } else {
            await axios.post(
                `http://localhost:8080/api/expenses`,
                {
                    "id": expenses[0],
                    "sum": expenses[1],
                    "year": expenses[2],
                    "client_id": expenses[3]
                })
        }
    } catch (e) {
        alert(e)
    }
}