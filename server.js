require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.GOOGLE_EMAIL_APP_PASS
    }
});

app.post('/send-email', (req,res) =>{
    const {name, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Hi! I am ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                <h3 style="color: #333;">New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <div style="background: #f9f9f9; padding: 15px; margin-top: 10px;">
                    <strong>Message:</strong><br/>
                    ${message}
                </div>
            </div>
        `
    };

    res.status(200).json({ 
        success: true, 
        message: 'Message received! I will get back to you shortly.' 
    });

    transporter.sendMail(mailOptions, (error,info)=>{
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});