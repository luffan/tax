import axios from 'axios'

export var getIncomes = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/income`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export var createOrUpdateIncome = async (income) => {
    try {
        if (income[0] === "") {
            await axios.post(
                `http://localhost:8080/api/income`,
                {
                    "sum": income[1],
                    "year": income[2],
                    "client_id": income[3]
                })
        } else {
            await axios.post(
                `http://localhost:8080/api/income`,
                {
                    "id": income[0],
                    "sum": income[1],
                    "year": income[2],
                    "client_id": income[3]
                })
        }
    } catch (e) {
        alert(e)
    }
}