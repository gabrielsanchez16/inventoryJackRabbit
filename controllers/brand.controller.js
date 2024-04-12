const {Brand} = require("../models/brand.js")


const createBrand = async (name)=>{
    const newBrand = await Brand.create({
        name:name
    })

    return newBrand;
}


const getAllBrand = async ()=>{
    const response = await Brand.findAll()
    return response;
}


module.exports = {
    createBrand,
    getAllBrand
}