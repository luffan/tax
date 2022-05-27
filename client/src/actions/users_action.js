import axios from 'axios'

export var getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/user`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}