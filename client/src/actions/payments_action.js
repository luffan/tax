import axios from 'axios'

export var getPayments = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/payment`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}