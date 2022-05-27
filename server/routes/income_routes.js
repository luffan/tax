const Router = require('express')
const router = new Router()
const incomeController = require('../controller/income_controller')

router.post('/income',incomeController.createIncome)
router.get('/income',incomeController.getIncome)
router.get('/income/id',incomeController.getOneIncome)
router.put('/income',incomeController.updateIncome)
router.delete('/income',incomeController.deleteIncome)

module.exports = router