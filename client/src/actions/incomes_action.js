import axios from 'axios'

export var getIncomes = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/income`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}