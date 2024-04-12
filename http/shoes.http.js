const { response } = require("express");
const {createShoe,getShoeByModel,getAllShoes} = require("../controllers/shoes.controller.js")


const create = (req,res)=>{
    const {model,brand_id,brand, description, color, size, price} = req.body;
    const data = req.file;
    console.log(data)
    if(!model && !brand_id && !brand && !data.originalname && !description && !color && !size && !price){
        return res.status(400).json({
            message:"bab request",
            fields:{
                model:"string",
                brand_id:"uuid",
                brand:"string",
                url_image:"string",
                description:"string",
                color:"string",
                size:"string",
                price:"float"
            }
        })
    }else if(!model || !brand_id || !brand || !data.originalname || !description || !color || !size || !price){
        return res.status(400).json({
            message:"All fiels must be completed",
            fields:{
                model:"string",
                brand_id:"uuid",
                brand:"string",
                url_image:"string",
                description:"string",
                color:"string",
                size:"string",
                price:"float"
            }
        })
    }else{
        const response = createShoe(model,brand_id,brand, data.originalname, description, color, size, price)
            .then((response)=>{
                res.status(201).json({ 
                    message: `shoe has been successfully created`,
                    shoe: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    }
}

const getByModel = (req,res)=>{
    const {model} = req.query;
    
    if (!model) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                model: "string"
            },
        });
    }else {
        const response = getShoeByModel(model)
            .then((response) => {
                res.status(200).json({ 
                    message: `Shoes have been successfully recovered`,
                    data: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };
}

const getAll = (req,res)=>{
    const response = getAllShoes()
    .then(response=>{
        res.status(200).json({
            message:"Shoes have been successfully recovered",
            data:response
        })
    })
    .catch(err=>{
        console.log(err)
    })
}


module.exports = {
    create,
    getByModel,
    getAll
}