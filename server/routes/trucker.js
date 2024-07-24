const router=require('express').Router()
const {createtrucker,updatetrucker,inter, login}=require('../controllers/trucker')
router.post('/',createtrucker)
router.put('/update',updatetrucker)
router.get('/inter',inter)
router.get('/login',login)

module.exports=router