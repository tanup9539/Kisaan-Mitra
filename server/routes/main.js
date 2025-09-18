const express=require('express');
const router = express.Router()

router.get('',(req,res)=>{
    res.render('index',{
        currentRoute:'/index'
    })
})

router.get('/user',(req,res)=>{
    res.render('user',{
        currentRoute:'/user'
    })
})

router.get('/discussion',(req,res)=>{
    res.render('discussion',{
        currentRoute:'/discussion'
    })
})

module.exports = router;