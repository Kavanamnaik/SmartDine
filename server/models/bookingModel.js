const db = require("../config/db");

// Find the best available table
exports.findBestTable = (restaurantId, guests, callback) => {

    const sql = `
        SELECT *
        FROM restaurant_tables
        WHERE restaurant_id = ?
        AND status = 'available'
        AND capacity >= ?
        ORDER BY capacity ASC
        LIMIT 1
    `;

    db.query(sql, [restaurantId, guests], callback);
};

// Create Booking
exports.createBooking = (booking, callback) => {

    const sql = `
        INSERT INTO bookings
        (user_id, restaurant_id, table_id, booking_date, booking_time, guests, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        booking.user_id,
        booking.restaurant_id,
        booking.table_id,
        booking.booking_date,
        booking.booking_time,
        booking.guests,
        booking.status
    ], callback);
};

// Update Table Status
exports.updateTableStatus = (tableId, status, callback) => {

    db.query(
        "UPDATE restaurant_tables SET status=? WHERE id=?",
        [status, tableId],
        callback
    );
};

// Get All Bookings
exports.getAllBookings = (callback) => {

    db.query("SELECT * FROM bookings", callback);

};

// Get User Bookings
exports.getUserBookings = (userId, callback) => {

    db.query(
        "SELECT * FROM bookings WHERE user_id=?",
        [userId],
        callback
    );

};

// Cancel Booking
exports.cancelBooking = (bookingId, callback) => {

    db.query(
        "UPDATE bookings SET status='cancelled' WHERE id=?",
        [bookingId],
        callback
    );

};
// Update Booking Status
exports.updateBookingStatus = (id, status, callback) => {

    db.query(
        "UPDATE bookings SET status = ? WHERE id = ?",
        [status, id],
        callback
    );

};