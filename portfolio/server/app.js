const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (req, res) => {
    
    console.log("ROOT HIT");
    res.send('Hello World!');

})
 

app.post('/sendMail', (req, res) => {

    console.log("POST SERVER HIT");
    console.log(req.body.name)
    console.log(req.body.email)
    res.send("RECEIVED POST");
    
    var smtpTransport = nodemailer.createTransport({

        service: 'Gmail',
        port: 465,
        auth: {
            user: 'ramraja.portfolio@gmail.com',
            pass: 'Diablos07'
        }

    });

    var mailOptions = {
        from: req.body.email,
        to: 'ramraja.vii@gmail.com',
        subject: 'Message from portfolio',
        html: `<p>${req.body.name}</p>
                <p>${req.body.email}</p>
                <p>${req.body.message}</p>`
    };

    smtpTransport.sendMail(mailOptions,
        (error, res) => {
            
            if(error) {
                
                res.send(error)

            }else {
                
                console.log("MESSAGE SENT");
                res.send("MESSAGE SENT");

            }

            smtpTransport.close();

    });
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))