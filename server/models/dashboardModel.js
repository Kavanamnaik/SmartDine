const db = require("../config/db");

// Dashboard Stats
exports.getStats = (callback) => {

    const sql = `
    SELECT
        (SELECT COUNT(*) FROM users WHERE role='customer') AS totalCustomers,
        (SELECT COUNT(*) FROM orders) AS totalOrders,
        (SELECT COUNT(*) FROM bookings) AS totalBookings,
        (SELECT COUNT(*) FROM menu_items) AS totalMenuItems,
        (SELECT COUNT(*) FROM restaurant_tables) AS totalTables,
        (SELECT IFNULL(SUM(total_amount),0) FROM orders) AS totalRevenue
    `;

    db.query(sql, callback);

};

// Recent Orders
exports.getRecentOrders = (callback) => {

    db.query(
        `SELECT * FROM orders ORDER BY created_at DESC LIMIT 10`,
        callback
    );

};

// Recent Bookings
exports.getRecentBookings = (callback) => {

    db.query(
        `SELECT * FROM bookings ORDER BY created_at DESC LIMIT 10`,
        callback
    );

};

// Top Selling Items
exports.getTopItems = (callback) => {

    const sql = `
    SELECT
        m.name,
        SUM(oi.quantity) totalSold
    FROM order_items oi
    JOIN menu_items m
    ON oi.menu_item_id=m.id
    GROUP BY oi.menu_item_id
    ORDER BY totalSold DESC
    LIMIT 10
    `;

    db.query(sql, callback);

};

// Least Ordered Items
exports.getLeastItems = (callback) => {

    const sql = `
    SELECT
        m.name,
        IFNULL(SUM(oi.quantity),0) totalSold
    FROM menu_items m
    LEFT JOIN order_items oi
    ON m.id=oi.menu_item_id
    GROUP BY m.id
    ORDER BY totalSold ASC
    LIMIT 10
    `;

    db.query(sql, callback);

};

// Revenue By Month
exports.getRevenue = (callback) => {

    const sql = `
    SELECT
        MONTH(created_at) month,
        SUM(total_amount) revenue
    FROM orders
    GROUP BY MONTH(created_at)
    ORDER BY MONTH(created_at)
    `;

    db.query(sql, callback);

};

// Payment Summary
exports.getPayments = (callback) => {

    const sql = `
    SELECT
        payment_status,
        COUNT(*) total
    FROM payments
    GROUP BY payment_status
    `;

    db.query(sql, callback);

};

// Table Summary
exports.getTables = (callback) => {

    const sql = `
    SELECT
        status,
        COUNT(*) total
    FROM restaurant_tables
    GROUP BY status
    `;

    db.query(sql, callback);

};

// Booking Summary
exports.getBookingSummary = (callback) => {

    const sql = `
    SELECT
        status,
        COUNT(*) total
    FROM bookings
    GROUP BY status
    `;

    db.query(sql, callback);

};

// Daily Revenue
exports.getDailyRevenue = (callback) => {

    const sql = `
    SELECT
        DATE(created_at) day,
        SUM(total_amount) revenue
    FROM orders
    GROUP BY DATE(created_at)
    ORDER BY day DESC
    LIMIT 30
    `;

    db.query(sql, callback);

};