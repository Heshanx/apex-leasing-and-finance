const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser =require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const saltRound = 10;


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

const secretkey = '6LccvGEqAAAAAL9ykyTySjS4PCOQb5xB9Z0LMDgc';


app.post('/login', async (req, res) => {
    const { useremail, userpassword, 'g-recaptcha-response': captchaValue } = req.body;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captchaValue}`;
    
    if (!captchaValue) {
        console.error('reCAPTCHA Error');
        return res.status(400).json({ message: 'Please complete reCAPTCHA' });
    }

    try {
        const response = await axios.post(verifyUrl);
        console.log('reCAPTCHA response:', response.data);

        const { success } = response.data;
        
        if (!success) {
            console.error('reCAPTCHA Verification Failed');
            return res.status(400).json({ message: 'reCAPTCHA Verification Failed' });
        }

        const loginsql = 'SELECT * from signup WHERE useremail = ?';

        db.query(loginsql, [useremail], async (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ message: 'Database error', error: err.message });
            }

            if (result.length === 0) {
                console.error('No user found for this email');
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            const heshpassword = await bcrypt.hash(userpassword, saltRound);
            const isPasswordMatch = await bcrypt.compare(userpassword, heshpassword);

            if (!isPasswordMatch) {
                console.error('Invalid password');
                return res.status(400).json({ message: 'Invalid  password' });
            }

            res.status(200).json({ message: 'LOGIN SUCCESSFUL' });
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});


app.post('/registration',async(req,res)=>{
    try{
    const {nic,fullName,contactNumber,address,monthlyIncome,loanAmount,loanTerm}=req.body
    const appro = 'Pending';
    const sqlre = "INSERT INTO loanreg (NIC,full_name,Tp_number,address,monthincome,loanAmont,trem,status) VALUES(?,?,?,?,?,?,?,?)";
    const Values =[nic,fullName,contactNumber,address,monthlyIncome,loanAmount,loanTerm,appro];
    db.query(sqlre,Values,(err,data)=>{
        if(err){
            console.log(res.status(500).json({ error: err.message }));
        } 
        res.status(201).json({ message: 'You Application Submited And Approval pending', data });
    });
}catch(error){
    console.log(error);
}
});
app.listen(5000,()=>{
    console.log("Listning....");
});