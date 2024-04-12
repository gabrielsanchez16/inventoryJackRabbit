const Shoes = require("./Shoe.js")
const Brands = require('./brand.js')

const initModels = () => {
    Brands.hasMany(Shoes)
    Shoes.belongsTo(Brands,{
        foreignKey: 'brand_id'
    })

}

module.exports = initModels;