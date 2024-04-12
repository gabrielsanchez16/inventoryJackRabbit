const router = require('express').Router()
const {create,getByModel,getAll} = require('../http/shoes.http')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage })

router.route("/create")
    .post(upload.single("url_image"),create)

router.route("/byModel")
    .get(getByModel)

router.route("/")
    .get(getAll)

exports.router = router
