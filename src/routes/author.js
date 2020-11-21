const express = require("express");
const router = express.Router();

// Controladores 
const authorController = require("../controllers/authorController");
const inicioController = require("../controllers/inicioController");
// Rutas
router.get("/", authorController.list);
router.get("/update/:id", authorController.edit);
router.post("/update/:id", authorController.editUpdate);
router.post("/add", authorController.save);
router.get("/delete/:id", authorController.delete); // :id parametro de la ruta

router.get("/a", inicioController.list);

module.exports = router;
