const express=require('express');
const router = express.Router()

router.get('',(req,res)=>{
    res.send("Kisaan-Mitra hain ham")
})

module.exports = router;