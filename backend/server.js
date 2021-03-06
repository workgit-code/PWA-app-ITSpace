const express= require('express');
const app=express();
const fs=require('fs');
const path=require('path');
const mongoose=require('mongoose');
require('dotenv').config();

// Add CORS to API
var cors = require('cors');
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db=mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.error('Connected to db'));


const usersRouter=require('./routes/users')
app.use('/users', usersRouter)


// PORT
const port=process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on port ${port}...`));