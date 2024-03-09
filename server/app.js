require('dotenv').config();
const express = require('express');
const {PORT, GMAIL_PASS,GMAIL_EMAIL} = require('./config/server-config');
const mailsender = require('./config/email-config');
const axios = require("axios");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:process.env.FRONTEND}));
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send(`<h1>Portfolio Server is up & running </h1>`);
});

app.post('/api/v1/sendmail',async(req,res)=>{
    console.log('Initiating Mail Service');
    try{
        const {firstName,lastName,email,phone,message} = req.body;
        const emailData = {
            from:GMAIL_EMAIL,
            to: process.env.RECEIVER_MAIL,
            subject: 'Contact Form Submission-Portfolio',
            html:`
                <p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Contact: ${phone}</p>
                <p>Message: ${message}</p>            
            `
        }
        await mailsender.sendMail(emailData);
        console.log('Mail Sent Successfully!!');
        res.json({status:200,message:'Email Sent Successfully!!'});
    } catch (err){
        console.log(err.message);
    }
})

