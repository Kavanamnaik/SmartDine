const paymentModel = require("../models/paymentModel");

// Create Payment
exports.createPayment = (req, res) => {

    const {
        order_id,
        booking_id,
        amount,
        payment_method
    } = req.body;

    const transaction_id =
        "TXN" + Date.now();

    paymentModel.createPayment(
        {
            order_id: order_id || null,
            booking_id: booking_id || null,
            amount,
            payment_method,
            payment_status: "success",
            transaction_id
        },
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.status(201).json({
                message: "Payment Successful",
                paymentId: result.insertId,
                transaction_id
            });

        }
    );

};

// Get All
exports.getAllPayments = (req, res) => {

    paymentModel.getAllPayments((err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// Get One
exports.getPaymentById = (req, res) => {

    paymentModel.getPaymentById(
        req.params.id,
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0)
                return res.status(404).json({
                    message: "Payment not found"
                });

            res.json(result[0]);

        }
    );

};

// Update
exports.updatePaymentStatus = (req, res) => {

    paymentModel.updatePaymentStatus(
        req.params.id,
        req.body.payment_status,
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Payment updated"
            });

        }
    );

};

// Delete
exports.deletePayment = (req, res) => {

    paymentModel.deletePayment(
        req.params.id,
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Payment deleted"
            });

        }
    );

};