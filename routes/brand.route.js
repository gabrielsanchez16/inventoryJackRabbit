const router = require('express').Router()
const {create,getAll} = require('../http/brand.http.js')


router.route("/")
    .get(getAll)

router.route("/create")
    .post(create)




exports.router = router