const Router = require('express')
const router = new Router()
const userController = require('../controller/user_controller')

router.post('/user',userController.addUser)
router.get('/user',userController.getUsers)

module.exports = router