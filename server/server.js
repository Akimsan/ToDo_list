const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./routes/routes');
require('./models/db')

app.use(express.json())
app.use(cors())
app.use('/api/task',router)
app.listen('8000',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server start on At PORT number :8000');
    }
})