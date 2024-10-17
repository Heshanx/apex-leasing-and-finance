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

const secretkey = '6LccvGEqAAAAAKNkyQRE2TgbfHkOFe-zry1cRJZ0';
app.post('/login', async (req, res) => {
    const { useremail, userpassword, 'g-recaptcha-response': captcha } = req.body;
    const verifyurl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captcha}`;

    if (!captcha) {
        return res.send('Please complete the reCAPTCHA');
    }
    try {
        const response = await axios.post(verifyurl);
        console.log(response);
        const { success } = response.data;

        if (!success) {
            return res.send('Failed reCAPTCHA Verification');
        }

        const loginsql = 'SELECT * FROM signup WHERE useremail = ?';
        db.query(loginsql, [useremail], async (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(400).json({ message: 'Invalid Email or Password' });
            }

            const user = results[0];
            const isPasswordMatch = await bcrypt.compare(userpassword, user.userpassword);

            if (!isPasswordMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            res.status(200).json({ message: 'Login successful', user });
        });

    } catch (error) {
        console.error('Error during reCAPTCHA verification', error);
        return res.status(500).json('Error during reCAPTCHA Verification');
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