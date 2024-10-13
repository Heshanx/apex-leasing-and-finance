const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser =require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host :'localhost',
    user :'root',
    password : ' ',
    database : 'signup'
})

app.listen(3000,()=>{
    console.log("Listning....");
})