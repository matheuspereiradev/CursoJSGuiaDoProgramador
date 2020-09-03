const Sequelize = require('sequelize')

const con = new Sequelize('sistemadecadastros','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

con.authenticate()
                 .then(function(){
                    console.log('conectou com sucesso')
                 })
                 .catch(function(e){
                    console.log('deu ruim'+e)
                 })               
              