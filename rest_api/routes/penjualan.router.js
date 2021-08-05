const express = require("express");
const router = express.Router();
const controller = require("../controllers/penjualan.controller");

router.get("/", controller.findAllGroupByCode);
router.get("/findById/:id", controller.findById);
router.get("/findByCode/:code", controller.findByCode);
router.post("/addOne", controller.addOne);
router.delete("/deleteById/:id", controller.deleteById);
router.delete("/deleteByCode/:code", controller.deleteByCode);

module.exports = router;
