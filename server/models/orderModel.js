const db = require("../config/db");

// Create Order
exports.createOrder = (order, callback) => {

    const sql = `
        INSERT INTO orders
        (user_id, restaurant_id, total_amount, status)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            order.user_id,
            order.restaurant_id,
            order.total_amount,
            order.status
        ],
        callback
    );

};

// Add Order Item
exports.addOrderItem = (item, callback) => {

    const sql = `
        INSERT INTO order_items
        (order_id, menu_item_id, quantity, price)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            item.order_id,
            item.menu_item_id,
            item.quantity,
            item.price
        ],
        callback
    );

};

// Get All Orders
exports.getAllOrders = (callback) => {

    db.query(
        "SELECT * FROM orders ORDER BY created_at DESC",
        callback
    );

};

// Get Orders By User
exports.getOrdersByUser = (userId, callback) => {

    db.query(
        "SELECT * FROM orders WHERE user_id=? ORDER BY created_at DESC",
        [userId],
        callback
    );

};

// Get Order Items
exports.getOrderItems = (orderId, callback) => {

    const sql = `
        SELECT
            oi.*,
            mi.name
        FROM order_items oi
        JOIN menu_items mi
        ON oi.menu_item_id = mi.id
        WHERE order_id=?
    `;

    db.query(sql, [orderId], callback);

};

// Update Order Status
exports.updateOrderStatus = (id, status, callback) => {

    db.query(
        "UPDATE orders SET status=? WHERE id=?",
        [status, id],
        callback
    );

};

// Delete Order
exports.deleteOrder = (id, callback) => {

    db.query(
        "DELETE FROM orders WHERE id=?",
        [id],
        callback
    );

};