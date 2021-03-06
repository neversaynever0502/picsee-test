const express = require('express')
const fetch = require('node-fetch');
const TinyURL = require('tinyurl');
const bodyParser = require('body-parser')
const serverless = require('serverless-http');


let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/short-url',function(req,res){
  let url = req.body.url
  TinyURL.shorten(url, function(result, err) {
    res.json({'short-url':result})
    if (err)
      console.log(err)
  });
})

module.exports.handler = serverless(app);

