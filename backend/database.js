const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser =require('body-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:3000'})); //
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true })); 

const db = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password : '',
    database : 'signup'
});
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});
app.post('/signup',(req,res)=>{
    const {cust_name,User_name,Password}= req.body;
    const sql ="Insert into signup(cust_name,User_name,Password) Values(?,?,?)";
    const values = [cust_name,User_name,Password];   
    db.query(sql,values,(err,data)=>{
        if(err){
            return res.status(500).json({ error: err.message });
        } 
        res.status(201).json({ message: 'User signed up successfully', data });
    });
});
app.listen(5000,()=>{
    console.log("Listning....");
});