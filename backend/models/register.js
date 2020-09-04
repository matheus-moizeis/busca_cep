module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define('Register', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        cpf: {
            type: DataTypes.FLOAT,
            unique: true,
            allowNull: false
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        cep: {
            type: DataTypes.INTEGER,
            allowNull: false
        },


        rua: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },

        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },

        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Register
}   