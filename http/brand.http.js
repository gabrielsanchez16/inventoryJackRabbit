const {createBrand,getAllBrand} = require("../controllers/brand.controller")


const create = (req,res)=>{
    const {name} = req.body;
    console.log(req.body)
    if(!name){
        return res.status(400).json({
            message:"bab request",
            fields:{
                name:"string",
            }
        })
    }else{
        const newBrand = createBrand(name)
            .then((response)=>{
                res.status(201).json({ 
                    message: `brand has been successfully created`,
                    brand: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    }
}

const getAll = (req,res)=>{
    const response = getAllBrand()
    .then(response=>{
        res.status(200).json({
            message:"Brands have been successfully recovered",
            data:response
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports ={
    create,
    getAll
}