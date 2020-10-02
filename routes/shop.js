const express  = require('express')

const router = express.Router();


// get / post do exact matching !
router.get("/",(req,res,next)=>{    
    res.send("Hello")
})

module.exports = router;