//Creating routes for html  

const path = require('path')  
const router = require('express').Router();


//module.exports = function(router){ 
    router.get('/notes',function(res,req){ 
        res.sendFiles(path.join(__dirname,'../Notes/notes.hmtl'));
    }); 

    router.get('/',function(res,req){ 
        res.sendFiles(path.join(__dirname,'../Notes/index.hmtl'));
    }); 
//};
  
module.exports = router