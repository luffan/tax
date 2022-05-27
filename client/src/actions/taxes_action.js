import axios from 'axios'

export var getTaxes = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/tax`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export var createOrUpdateTaxes = async (tax) => {
    try {
        if (tax[0] === "") {
            await axios.post(
                `http://localhost:8080/api/tax`,
                {
                    "cost": tax[1],
                    "expiration_date": tax[2],
                    "client_id": tax[3],
                    "payment_id": tax[4],
                })
        } else {
            await axios.put(
                `http://localhost:8080/api/tax`,
                {
                    "id": tax[0],
                    "cost": tax[1],
                    "expiration_date": tax[2],
                    "client_id": tax[3],
                    "payment_id": tax[4],
                })
        }
    } catch (e) {
        window.onerror = function() {
            alert('Error message: '+ e);
            return true;
        }
    }
}

export var deleteTax = async (id) => {
    try {
        console.log('id');
        console.log(id);
        const response = await axios.delete(`http://localhost:8080/api/tax/${id}`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}