const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser =require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');


const saltRound = 10;
const secretkey = '6LccvGEqAAAAAL9ykyTySjS4PCOQb5xB9Z0LMDgc';

const app = express();
app.use(cors({ origin: 'http://localhost:3000'})); //
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true })); 

const db = mysql.createConnection({
    host :'127.0.0.1',
    user :'Apex',
    password : 'Apexuser12345@',
    database : 'signup'
});
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});
app.post('/signup',async(req,res)=>{
    const {firstname,lastname,position,company,businessArea,Employeement,address,zipcode,country,phonenumber,useremail,userpassword} = req.body;
    const heshpassword = await bcrypt.hash(userpassword,saltRound);
    const sql ="Insert into signup(firstname,lastname,position,comapny,businessArea,Employeement,address,zipcode,country,phonenumber,useremail,userpassword	) Values(?,?,?,?,?,?,?,?,?,?,?,?)";
    const values = [firstname,lastname,position,company,businessArea,Employeement,address,zipcode,country,phonenumber,useremail,heshpassword];   
    db.query(sql,values,(err,data)=>{
        if(err){
            return res.status(500).json({ error: err.message });
        } 
        res.status(201).json({ message: 'User signed up successfully', data });
    });
});
app.post ('/login',async(req,res)=>{
    const{User_name,Password,'g-recaptcha-response': captcha} = req.body;
    if(!captcha){
        return res.send('Please Complete the recapcha');
    }
    const vrerifyurl ='https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captcha}';
    try{
        const response = await axios.post(vrerifyurl);
        console.log(response);
        const {Success} = response.data;

        if(!Success){
            return res.response.send('Failed reCAPCHA Verification');
        }
    const loginsql = 'Select * from signup WHERE User_name=? and Password=?';
    db.query(loginsql,[User_name,Password],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'Login successful', user: results[0] });
    });
}catch(error){
    if (err) return res.status(500).json('Error During reCAPCHA Verification ');
    console.error('Error During reCAPCHA Verification ',error);
}

});
app.listen(5000,()=>{
    console.log("Listning....");
});