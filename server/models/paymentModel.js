const db = require("../config/db");

// Create Payment
exports.createPayment = (payment, callback) => {

    const sql = `
        INSERT INTO payments
        (order_id, booking_id, amount, payment_method, payment_status, transaction_id)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            payment.order_id,
            payment.booking_id,
            payment.amount,
            payment.payment_method,
            payment.payment_status,
            payment.transaction_id
        ],
        callback
    );

};

// Get All Payments
exports.getAllPayments = (callback) => {

    db.query(
        "SELECT * FROM payments ORDER BY created_at DESC",
        callback
    );

};

// Get Payment By ID
exports.getPaymentById = (id, callback) => {

    db.query(
        "SELECT * FROM payments WHERE id=?",
        [id],
        callback
    );

};

// Update Status
exports.updatePaymentStatus = (id, status, callback) => {

    db.query(
        "UPDATE payments SET payment_status=? WHERE id=?",
        [status, id],
        callback
    );

};

// Delete Payment
exports.deletePayment = (id, callback) => {

    db.query(
        "DELETE FROM payments WHERE id=?",
        [id],
        callback
    );

};