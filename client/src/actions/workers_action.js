import axios from 'axios'

export var getWorkers = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/worker`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}

export var createOrUpdateWorker = async (income) => {
    try {
        console.log(income[3]);
        if (income[0] === "") {
            await axios.post(
                `http://localhost:8080/api/worker`,
                {
                    "id": income[0],
                    "name": income[1],
                    "surname": income[2],
                    "middlename" : income[3],
                    "login" : income[4],
                    "password" : income[5],
                })
        } else {
            await axios.put(
                `http://localhost:8080/api/worker`,
                {
                    "id": income[0],
                    "name": income[1],
                    "surname": income[2],
                    "middlename" : income[3],
                    "login" : income[4],
                    "password" : income[5],
                })
        }
    } catch (e) {
        window.onerror = function() {
            alert('Error message: '+ e);
            return true;
        }
    }
}

export var deleteWorker = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/worker/${id}`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}