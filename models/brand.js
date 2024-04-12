const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")

const Brand = db.define("Brands",{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    Brand
}