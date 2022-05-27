const Router = require('express')
const router = new Router()
const incomeController = require('../controller/expenses_controller')

router.post('/expenses',incomeController.createExpenses)
router.get('/expenses',incomeController.getExpenses)
router.get('/expenses/id',incomeController.getOneExpenses)
router.put('/expenses',incomeController.updateExpenses)
router.delete('/expenses',incomeController.deleteExpenses)

module.exports = router