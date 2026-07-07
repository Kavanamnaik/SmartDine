const db = require("../config/db");

// Add Table
exports.addTable = (table, callback) => {

    const sql = `
        INSERT INTO restaurant_tables
        (restaurant_id, table_number, capacity, status)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            table.restaurant_id,
            table.table_number,
            table.capacity,
            table.status
        ],
        callback
    );
};

// Get All Tables
exports.getAllTables = (callback) => {

    db.query(
        "SELECT * FROM restaurant_tables ORDER BY table_number",
        callback
    );

};

// Get Single Table
exports.getTableById = (id, callback) => {

    db.query(
        "SELECT * FROM restaurant_tables WHERE id=?",
        [id],
        callback
    );

};

// Update Table
exports.updateTable = (id, table, callback) => {

    const sql = `
        UPDATE restaurant_tables
        SET
        restaurant_id=?,
        table_number=?,
        capacity=?,
        status=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            table.restaurant_id,
            table.table_number,
            table.capacity,
            table.status,
            id
        ],
        callback
    );

};

// Delete Table
exports.deleteTable = (id, callback) => {

    db.query(
        "DELETE FROM restaurant_tables WHERE id=?",
        [id],
        callback
    );

};