const Router = require('express')
const router = new Router()
const userController = require('..controller/user.controller')

router.addUser('/user',userController.addUser)
router.getUsers('/user',userController.getUsers)

module.exports = router