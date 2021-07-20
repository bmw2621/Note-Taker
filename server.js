//Installing npm packages that will help with functionality of the app  

// const { json } = require('body-parser');
const express = require('express'); 

const app = express();
// const { appendFile } = require('fs');
const routesApi = require('./Routes/routesApi');
const routesHtml = require('./Routes/routesHtml'); 


//Setting up the port  
const PORT = process.env.PORT||3001;  

// server.listen(3000, 'localhost');
// server.on('listening', function() {
//     console.log('Express server started on port %s at %s', server.address().PORT, server.address().address);
// });
//Constructing the express app to be broken down in the data  

app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.use(express.static('public'));  
app.use('/api',routesApi); 
app.use('/',routesHtml);

//Setting up the routes that the app will require . 
app.use(require('./Routes/routesApi'))(app); 
app.use(require('./Routes/routesHtml'))(app); 

//Starting up the server  

app.listen(PORT, function(){ 
    console.log(`Server is working on PORT:${PORT}`);
});