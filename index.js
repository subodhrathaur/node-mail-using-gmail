"use strict";

var express =require('express');
var nodemailer =require('nodemailer');

var app=express()
const PORT_NUMBER=4000;

app.listen(PORT_NUMBER,(err)=>{
    if(err)
    console.log("Server err "+err)
    else
    console.log("Server running on port "+PORT_NUMBER)
    })

var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"you rmail address",
        pass:"your email password"
    }
});

var mailOption={
    from:'your email address',
    to:'sender email address',
    subject:'Sending mail using nodejs',
    text:'your mail content.'
}


app.get('/sendmail',(req,res)=>{
    transporter.sendMail(mailOption,(error,info)=>{
        if (error) {
            res.send("Sending Error  "+error);
          } else {
            res.send("Mail send successfully  "+info.response);
          }
    })

})

