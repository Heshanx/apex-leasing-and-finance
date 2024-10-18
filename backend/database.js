const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser =require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const logger = require('./logger'); 
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
        logger.error(`Database Error: ${err}`);
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
            logger.error(`Database Error: ${err}`);
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
        logger.error(`reCAPtCHA Error:`);
        return res.status(400).json({ message: 'Please complete reCAPTCHA' });
    }

    try {
        const response = await axios.post(verifyUrl);
        console.log('reCAPTCHA response:', response.data);

        const { success } = response.data;
        
        if (!success) {
            console.error('reCAPTCHA Verification Failed');
            logger.error('reCAPTCHA Verification Failed');
            return res.status(400).json({ message: 'reCAPTCHA Verification Failed' });
        }

        const loginsql = 'SELECT * from signup WHERE useremail = ?';

        db.query(loginsql, [useremail], async (err, result) => {
            if (err) {
                console.error('Database error:', err);
                logger.error(`Database Error: ${err}`);
                return res.status(500).json({ message: 'Database error', error: err.message });
            }

            if (result.length === 0) {
                console.error('No user found for this email');
                logger.info('No user found for this email');
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            const heshpassword = await bcrypt.hash(userpassword, saltRound);
            const isPasswordMatch = await bcrypt.compare(userpassword, heshpassword);

            if (!isPasswordMatch) {
                console.error('Invalid password');
                logger.info('Invalid Password');
                return res.status(400).json({ message: 'Invalid  password' });
            }

            res.status(200).json({ message: 'LOGIN SUCCESSFUL' });
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

app.post('/registration', async (req, res) => {
    try {
        const { nic, fullName, contactNumber, address, monthlyIncome, loanAmount, loanTerm } = req.body;
        const appro = 'Pending';
        const ty_loan ='Personal Loan';
        const sqlre = "INSERT INTO loanreg (NIC, full_name, Tp_number, address, monthincome, loanAmont, trem, status, type_loan) VALUES(?,?,?,?,?,?,?,?,?)";
        const Values = [nic, fullName, contactNumber, address, monthlyIncome, loanAmount, loanTerm, appro, ty_loan];
        
        db.query(sqlre, Values, (err, data) => {
            if (err) {
                console.error('Database Error:', err); 
                logger.error(`Database Error: ${err}`);
                return res.status(500).json({ error: 'Database Error: ' + err.message }); 
            } 
            res.status(201).json({ message: 'Your application has been submitted and approval is pending', data });
        });
    } catch (error) {
        console.error('Server Error:', error); 
        logger.error(`Server Error`);
        res.status(500).json({ error: 'Server Error' }); 
    }
});

app.get('/api/loans', (req, res) => {
    try {
      const sql = "SELECT * FROM loanreg";
  
      db.query(sql, (err, result) => {
        if (err) {
          console.log('DATABASE Error', err);
          return res.status(400).json('Server Error');
        }
        
        if (result.length === 0) {
          console.log('No loan requests found');
          return res.status(404).json('No loan requests found');
        }
        const loanApplications = result.map(loan => ({
          type: loan.type_loan,  
          status: loan.status,
          date:'2024/10/19',
        }));
  
        res.json(loanApplications);
      });
    } catch (error) {
      console.error('Error fetching loan requests:', error);
      res.status(500).json('Server Error');
    }
  });
  app.post('/lease', async (req, res) => {
    try {
        const { nic, fullName, contactNumber, address, downPayment, leaseAmount, leaseTerm } = req.body;
        const appro = 'Pending';
        const ty_loan ='Leasing Loan';
        const sqlre = "INSERT INTO loanreg (NIC, full_name, Tp_number, address, monthincome, loanAmont, trem, status, type_loan) VALUES(?,?,?,?,?,?,?,?,?)";
        const Values = [nic, fullName, contactNumber, address, downPayment, leaseAmount, leaseTerm, appro, ty_loan];
        
        db.query(sqlre, Values, (err, data) => {
            if (err) {
                console.error('Database Error:', err); 
                logger.error(`Database Error: ${err}`);
                return res.status(500).json({ error: 'Database Error: ' + err.message }); 
            } 
            res.status(201).json({ message: 'Your application has been submitted and approval is pending', data });
        });
    } catch (error) {
        console.error('Server Error:', error); 
        logger.error(`Server Error`);
        res.status(500).json({ error: 'Server Error' }); 
    }
});
  
app.listen(5000,()=>{
    console.log("Listning....");
});