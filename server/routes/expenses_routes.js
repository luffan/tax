const Router = require('express')
const router = new Router()
const expensesController = require('../controller/expenses_controller')

router.post('/expenses',expensesController.createExpenses)
router.get('/expenses',expensesController.getExpenses)
router.get('/expenses/id',expensesController.getOneExpenses)
router.put('/expenses',expensesController.updateExpenses)
router.delete('/expenses',expensesController.deleteExpenses)

module.exports = router