var express = require('express')
var router = express.Router()
const RegisterController = require('../controllers/RegisterController')

router.get('/',RegisterController.getAll)
router.get('/:id',RegisterController.getOneById)

router.post('/insert',RegisterController.insert)
router.post('/update',RegisterController.update)
router.post('/delete',RegisterController.deletedById)

module.exports = router
