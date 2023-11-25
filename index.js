require('dotenv').config();
const express = require('express');

// const bodyparser=require('body-parser');

const path = require('path')

const nodemailer = require('nodemailer')

const app = express();

const PORT = process.env.PORT || 3000;







// Routes
const routes = require("./routes/main")

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('', routes)




app.post('/contact', async (req, res) => {
  const { name, dropdown, email, phone,message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: "development@sovorun.com",
    subject: dropdown,
    text: `Name: ${name}\nDropdown: ${dropdown}\nEmail: ${email}\nPhone: ${phone}\nmessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);

    } else {
      console.log('Email sent successfully');
      res.redirect('/');
    }
  });
});
// this is for newsletter


app.post('/newsletter', async (req, res) => {
  const abc = req.body.email;

  const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,

    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: abc,
    subject: 'Newsletter Subscription Confirmation',
    text: 'Thank you for subscribing to our newsletter!'
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);

    } else {
      console.log('NewsLetter Email sent successfully');
      res.redirect('/');
    }
  });
});


app.get('*', async (req, res) => {
  res.status(404).render('404');
});



// Start the server
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));