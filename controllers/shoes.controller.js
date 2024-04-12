const {Shoe} = require("../models/Shoe.js")
const Sequelize = require("sequelize")

const createShoe = async (model,brand_id,brand, url_image, description, color, size, price)=>{
    const newShoe = await Shoe.create({
        model,
        brand_id,
        brand, 
        url_image, 
        description, 
        color, 
        size, 
        price
    })
    return newShoe
}

const getAllShoes = async ()=>{
    const allShoes = await Shoe.findAll()
    return allShoes;
}


const getShoeByModel = async (model)=>{
    const allShoes = await Shoe.findAll({
        where:{
            model: {
                [Sequelize.Op.like]: `%${model}%` // Buscar coincidencias parciales
            }
        }
    })
    return allShoes;
}



module.exports = {
    createShoe,
    getShoeByModel,
    getAllShoes
}