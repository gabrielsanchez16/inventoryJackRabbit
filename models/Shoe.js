const { Sequelize, DataTypes } = require('sequelize')
const { db } = require('../config/db.js')
const { v4: uuidv4 } = require("uuid")

const Shoe = db.define("Shoes", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    brand_id: {
        type: DataTypes.UUID,
        references: {
            model: "Brands",
            key: "id"
        },
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

module.exports = {
    Shoe
}