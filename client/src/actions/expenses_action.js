import axios from 'axios'

export var getExpenses = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/expenses`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}