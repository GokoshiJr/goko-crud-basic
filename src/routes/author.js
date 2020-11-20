const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");

router.get("/", authorController.list);

router.post("/add", authorController.save);

router.get("/delete/:id", authorController.delete); // :id parametro de la ruta

router.get("/update/:id", authorController.edit);
router.post("/update/:id", authorController.editUpdate);

module.exports = router;
