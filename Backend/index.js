const express = require('express');
const app = express();
const cors = require('cors');

const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"guptaaman6378@gmail.com",
        pass:"rusb rxgm duqt gigv"
    }
});

let details = {
    from:"guptaaman6378@gmail.com",
    to:"amanbania8769gupta@gmail.com",
    subject : "testing our nodemailer",
    text : "Testing out it once again",
}

mailTransporter.sendMail(details, (err)=>{
    if(err){
        console.log("it has an error.")
    }
    else{
        console.log("email has sent!")
    }
})

require('./config/Database').connect();

//middleware
app.use(express.json());
app.use(cors());

//Routes
const route = require('./routes/notice')
app.use('/api/v1', route);

require('dotenv').config()
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} port.`)
})

app.get("/aman", (req, res)=>{
    res.send(`Server is running on ${PORT} port.`)
})

