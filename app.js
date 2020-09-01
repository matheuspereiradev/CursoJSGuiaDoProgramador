const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('asjsaj')
})

app.listen(3000,function(){
    console.log('SERVER ON')
})