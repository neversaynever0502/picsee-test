const express = require('express')
const fetch = require('node-fetch');
const TinyURL = require('tinyurl');
const bodyParser = require('body-parser')


let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/short-url',function(req,res){
  let url = req.body.url
  TinyURL.shorten(url, function(result, err) {
    res.json({url:result})
    if (err)
      console.log(err)
  });
})

app.listen(3000)