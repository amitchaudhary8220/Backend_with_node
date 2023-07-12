const express = require("express");
const {
  getAllStaticProduct,
  getAllProducts,
} = require("../controllers/products");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllStaticProduct);

module.exports = router;
