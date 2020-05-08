let express = require('express')
let router = express.Router()

router.get('/', function(rerq, res, next){
    res.json({ 'message': 'hello ITEC 2560 Web programmers'})
})

module.exports = router