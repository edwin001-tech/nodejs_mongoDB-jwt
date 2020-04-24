const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const user = require('./routes/user.route');
const dbconfig =require('./config/oathconfig')
const PORT = 3000;

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/checking', function(req, res){
    res.json({
       "Hey": "Node express JWT implementation"
    });
 });

 app.use('/user', user);
app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});