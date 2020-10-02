const express  = require('express')
const path = require('path')

const router = express.Router();

// get / post do exact matching !
router.get("/",(req,res,next)=>{    
    res.sendFile(path.join(__dirname,'..','views','shop.html'))
})

module.exports = router;