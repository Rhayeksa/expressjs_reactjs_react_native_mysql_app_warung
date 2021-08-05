const express = require("express");
const router = express.Router();
const controller = require("../controllers/pemasok.controller");

router.post("/addOne", controller.addOne);
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.put("/updateById/:id", controller.updateById);
router.delete("/deleteById/:id", controller.deleteById);

module.exports = router;
