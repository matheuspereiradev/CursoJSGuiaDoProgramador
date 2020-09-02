const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('Aba principal')
})

app.get('/sobre',(req,res)=>{
    res.send('aba sobre')
})

app.get('/ola/:nome/:profissao',(req,res)=>{
    res.send("oi "+req.params.profissao+", "+req.params.nome)
})

app.listen(3000,function(){
    console.log('SERVER ON')
})