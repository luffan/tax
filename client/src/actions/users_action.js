import axios from 'axios'

export var getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/user`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export var createOrUpdateUsers = async (user) => {
    try {
        if (user[0] === "") {
            await axios.post(
                `http://localhost:8080/api/user`,
                {
                    "name": user[1],
                    "surname": user[2],
                    "middlename": user[3],
                    "passport_id": user[4],
                    "login": user[5],
                    "password": user[6],
                    "district": user[7]
                })
        } else {
            await axios.put(
                `http://localhost:8080/api/user`,
                {
                    "id": user[0],
                    "name": user[1],
                    "surname": user[2],
                    "middlename": user[3],
                    "passport_id": user[4],
                    "login": user[5],
                    "password": user[6],
                    "district": user[7]
                })
        console.log(user[0]);
        }
    } catch (e) {
        alert(e)
    }
}