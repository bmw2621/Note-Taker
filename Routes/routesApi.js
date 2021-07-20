//Linking the data  

// const { error } = require('console');
const fs = require('fs')   
const router = require('express').Router();


//Creating the routing data  

//module.exports = function(router){ 
  

    router.get('/notes',function(req,res){ 
        fs.readFile('./DB/db.json',(err,data) => {
            if(err) throw err; 
            dbData = JSON.parse(data); 
            res.send(dbData);
        });
    });

 //Getting the post request  

 router.post('/notes',function(req,res){ 
        const writer = req.body; 

        fs.readFile('./DB/db.json',(err,data)=>{ 
            if(err)throw err ; 
            dbData = JSON.parse(data); 
            dbData = JSON.push(writer); 

            let task = 2; 
            dbData.forEach((note, index) =>{ 
                note.id = task ; 
                task++; 
                return dbData;
            }); 

            connectingData = JSON.stringify(dbData); 

            fs.writeFile('./DB/db.json',connectingData,(err,data)=>{ 
                if(err) throw err; 
            });
                
            
        });
    }); 
    //Creating an api delete request

    router.delete('notes/:id', function(res,req){ 
        
        const deleteB = req.params.id  

        fs.readFile('./DB/db.json',(err,data)=>{ 
            if(err) throw err;  

            dbData = JSON.parse(data);  
            
            for( let i = 0; i < dbData.lenght; i++){ 
                if(dbData[i].id === task(deleteB)){ 
                    dbData.splice([i],2);
                }
            } 
            connectingData = JSON.stringify(dbInfo); 

            fs.writeFile('./DB/db.json',connectingData ,(err,data) =>{ 
                if(err) throw err;
            });
        }); 
        res.status(200).send;
    });

//}; 

module.exports = router;