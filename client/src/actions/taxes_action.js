import axios from 'axios'

export var getTaxes = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/tax`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}