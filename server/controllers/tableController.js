const tableModel = require("../models/tableModel");

// Add Table
exports.addTable = (req, res) => {

    const {
        restaurant_id,
        table_number,
        capacity,
        status
    } = req.body;

    tableModel.addTable(
        {
            restaurant_id,
            table_number,
            capacity,
            status: status || "available"
        },
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.status(201).json({
                message: "Table added successfully",
                id: result.insertId
            });

        }
    );

};

// Get All Tables
exports.getAllTables = (req, res) => {

    tableModel.getAllTables((err, results) => {

        if (err)
            return res.status(500).json(err);

        res.json(results);

    });

};

// Get One Table
exports.getTableById = (req, res) => {

    tableModel.getTableById(req.params.id, (err, result) => {

        if (err)
            return res.status(500).json(err);

        if (result.length === 0)
            return res.status(404).json({
                message: "Table not found"
            });

        res.json(result[0]);

    });

};

// Update Table
exports.updateTable = (req, res) => {

    tableModel.updateTable(
        req.params.id,
        req.body,
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Table updated successfully"
            });

        }
    );

};

// Delete Table
exports.deleteTable = (req, res) => {

    tableModel.deleteTable(req.params.id, (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json({
            message: "Table deleted successfully"
        });

    });

};