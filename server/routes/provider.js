const router=require('express').Router()
const {createprovider,updateprovider,inter,login}=require('../controllers/provider')
router.post('/',createprovider)
router.put('/update',updateprovider)
router.put('/inter',inter)
router.get('/login',login)

module.exports=router