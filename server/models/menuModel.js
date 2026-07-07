const db = require("../config/db");

exports.addMenuItem = (item, callback) => {

    const sql = `
        INSERT INTO menu_items
        (restaurant_id, name, price, is_available)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            item.restaurant_id,
            item.name,
            item.price,
            item.is_available
        ],
        callback
    );
};
exports.getAllMenuItems = (callback) => {

    const sql = "SELECT * FROM menu_items";

    db.query(sql, callback);

};exports.updateMenuItem = (id, item, callback) => {

    const sql = `
        UPDATE menu_items
        SET restaurant_id = ?, name = ?, price = ?, is_available = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            item.restaurant_id,
            item.name,
            item.price,
            item.is_available,
            id
        ],
        callback
    );

};
exports.deleteMenuItem = (id, callback) => {

    const sql = "DELETE FROM menu_items WHERE id = ?";

    db.query(sql, [id], callback);

};