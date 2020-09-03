const Sequelize = require('sequelize')

const con = new Sequelize('dbpostador','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

/*con.authenticate()
                 .then(function(){
                    console.log('conectou com sucesso')
                 })
                 .catch(function(e){
                    console.log('deu ruim'+e)
                 })               
              */

const Post = con.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})            

const User = con.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sexo:{
        type:Sequelize.CHAR
    },
    dtNasc:{
        type:Sequelize.DATE
    },
    telefone:{
        type:Sequelize.STRING
    }
})


User.create({
    nome:'Matheus Lima',
    sexo:'M',
    dtNasc:'1997-12-15',
    telefone:'88992424740'
})