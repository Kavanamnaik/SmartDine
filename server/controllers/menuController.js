const menuModel = require("../models/menuModel");

exports.addMenuItem = (req, res) => {

    const { restaurant_id, name, price, is_available } = req.body;

    if (!restaurant_id || !name || !price) {
        return res.status(400).json({
            message: "Restaurant ID, Name and Price are required"
        });
    }

    const newItem = {
        restaurant_id,
        name,
        price,
        is_available: is_available ?? true
    };

    menuModel.addMenuItem(newItem, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Menu item added successfully",
            menuId: result.insertId
        });

    });

};
exports.getAllMenuItems = (req, res) => {

    menuModel.getAllMenuItems((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};
exports.updateMenuItem = (req, res) => {

    const id = req.params.id;

    const { restaurant_id, name, price, is_available } = req.body;

    const updatedItem = {
        restaurant_id,
        name,
        price,
        is_available
    };

    menuModel.updateMenuItem(id, updatedItem, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.json({
            message: "Menu item updated successfully"
        });

    });

};
exports.deleteMenuItem = (req, res) => {

    const id = req.params.id;

    menuModel.deleteMenuItem(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.json({
            message: "Menu item deleted successfully"
        });

    });

};