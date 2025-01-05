// server.js (Node.js with Express)
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); // For sending emails

const app = express();
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.json();
    alert(name)
    // You can store this data in a database or send it via email
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password",
        },
    });

    let mailOptions = {
        from: email,
        to: "stevensaidimu@gmail.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: "Failed to send message" });
        }
        res.status(200).json({ message: "Message sent successfully" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
