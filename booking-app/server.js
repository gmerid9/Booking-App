const express = require("express");
const path = require('path');
const logger =require('morgan');
const cors =require('cors')
require('dotenv').config();
require('./config/database')

const port = process.env.PORT || 4000

const app =express ();

app.use(logger("dev"));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  });
app.use(cors())
  // routes

app.use('/api/users' , require("./Routes/api/users"))



app.listen(port, ()=> {
    console.log(`listening to port 4000`)
})