const express = require ("express");
const router = express.Router();

const {getAllProducts,getAllProductsTesting} = require("../controller/product")

//routes ka kaam hai ki user visit krta hai to kya krna hai
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;