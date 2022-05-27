import axios from 'axios'

export var getWorkers = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/worker`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}