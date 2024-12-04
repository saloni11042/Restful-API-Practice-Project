const express = require('express');
let users = require('./MOCK_DATA.json');
const fs = require('fs');
const mongoose = require("mongoose");
const app = express();
const User = require('./model/user')
const userRouter = require(('./routes/user'))
const connectMongoDb = require('./connection')

connectMongoDb("mongodb://localhost:27017/Project-API");

app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log("Hello");
    next()
})

app.use(('/api/user',userRouter))

app.listen(3000,()=>{
    console.log('Server started')
})