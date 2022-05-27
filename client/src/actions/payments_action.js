import axios from 'axios'

export var getPayments = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/payment`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}

export var createOrUpdatePayment = async (payment) => {
    try {
        if (payment[0] === "") {
        console.log(payment[1]);
        console.log(payment[2]);
            await axios.post(
                `http://localhost:8080/api/payment`,
                {
                    "date": payment[1],
                    "amount": payment[2],
                })
        } else {
            await axios.put(
                `http://localhost:8080/api/payment`,
                {
                    "id": payment[0],
                    "date": payment[1],
                    "amount": payment[2],
                })
        }
    } catch (e) {
        window.onerror = function() {
            alert('Error message: '+ e);
            return true;
        }
    }
}

export var deletePayment = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/payment/${id}`)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }

}