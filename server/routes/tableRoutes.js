const express = require("express");
const router = express.Router();

const tableController = require("../controllers/tableController");

// Add Table
router.post("/", tableController.addTable);

// Get All Tables
router.get("/", tableController.getAllTables);

// Get Single Table
router.get("/:id", tableController.getTableById);

// Update Table
router.put("/:id", tableController.updateTable);

// Delete Table
router.delete("/:id", tableController.deleteTable);

module.exports = router;