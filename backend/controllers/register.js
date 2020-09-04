const { Register } = require('../models')
const controller = {}

controller.get = async (req, res) => {
    const registers = await Register.findAll()

    return res.status(200).json(registers).end()
}

controller.getOne = async (req, res) => {
    const { id } = req.params

    const register = await Register.findOne({ where: { id } })
    if (!register) return res.status(404).json('Não encontrado').end()
    res.status(200).json(register.dataValues)
}

controller.post = async (req, res) => {

    const { cpf, nome, cep, rua, numero, bairro, cidade, estado } = req.body

    const testCpf = await Register.findOne({ where: { cpf } })
    if (testCpf) return res.status(404).json('CPF já cadastrado')

    const result = await Register.create({ cpf, nome, cep, rua, numero, bairro, cidade, estado })

    return res.status(201).json(result).end()
}

controller.put = async (req, res) => {

    const { cpf, nome, cep, rua, numero, bairro, cidade, estado } = req.body
    const { id } = req.params

    const fields = ['cpf', 'nome', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado']

    const register = await Register.findOne({ where: { id } })
    if (!register) return res.status(404).json('Não encontrado').end()

    fields.map(fieldName => {
        const newValue = req.body[fieldName]
        if (newValue) register[fieldName] = newValue
    })

    await register.save();

    return res.status(200).json('Atualizado com Sucesso').end()
}

controller.delete = async (req, res) => {

    const { id } = req.params
    const register = await Register.findOne({ where: { id } })

    if (!register) return res.status(404).json('Não encontrado').end()
    await register.destroy()

    return res.status(200).json('Deletado com sucesso!')
}

module.exports = controller