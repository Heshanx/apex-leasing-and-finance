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
app.post ('/login',(req,res)=>{
    const{User_name,Password} = req.body;
    const loginsql = 'Select * from signup WHERE User_name=? and Password=?';

    db.query(loginsql,[User_name,Password],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'Login successful', user: results[0] });
    });

});
app.listen(5000,()=>{
    console.log("Listning....");
});