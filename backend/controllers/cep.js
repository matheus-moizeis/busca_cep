const cepPromisse = require('cep-promise')

const controller = {}

controller.get = async (req, res) => {
 
       const id = req.params.id
       const intCep = parseInt(id)
       
       cepPromisse(intCep)
       .then((response) =>{
           console.log(response);
           res.json(response)
       })
       .catch((erro)=>{
           console.log('entreis');
           res.json({name: 'CepPromiseError'})
       })    
 } 
 
 module.exports = controller