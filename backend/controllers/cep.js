const cepPromisse = require('cep-promise')

const controller = {}

controller.get = async (req, res) => {
    try {
       const id = req.params.id
       console.log(typeof id);
       const intCep = parseInt(id)
       console.log(typeof intCep)
       cepPromisse(intCep)
       .then((response) =>{
           res.json(response)
       })
       .catch((erro)=>{
           res.json(erro)
       })
       
    }
    catch(erro) {
       console.log(erro)
       res.status(500).send(erro)
    }
 }
 
 
 module.exports = controller