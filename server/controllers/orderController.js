const orderModel = require("../models/orderModel");

// Create Order
exports.createOrder = (req, res) => {

    const {
        user_id,
        restaurant_id,
        total_amount,
        items
    } = req.body;

    orderModel.createOrder(
        {
            user_id,
            restaurant_id,
            total_amount,
            status: "pending"
        },
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            const orderId = result.insertId;

            if (!items || items.length === 0) {

                return res.status(201).json({
                    message: "Order placed",
                    orderId
                });

            }

            let completed = 0;

            items.forEach(item => {

                orderModel.addOrderItem(
                    {
                        order_id: orderId,
                        menu_item_id: item.menu_item_id,
                        quantity: item.quantity,
                        price: item.price
                    },
                    (err) => {

                        if (err)
                            return res.status(500).json(err);

                        completed++;

                        if (completed === items.length) {

                            res.status(201).json({
                                message: "Order placed successfully",
                                orderId
                            });

                        }

                    }
                );

            });

        }
    );

};

// Get All Orders
exports.getAllOrders = (req, res) => {

    orderModel.getAllOrders((err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// Get User Orders
exports.getOrdersByUser = (req, res) => {

    orderModel.getOrdersByUser(
        req.params.userId,
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json(result);

        }
    );

};

// Get Order Items
exports.getOrderItems = (req, res) => {

    orderModel.getOrderItems(
        req.params.id,
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json(result);

        }
    );

};

// Update Status
exports.updateOrderStatus = (req, res) => {

    orderModel.updateOrderStatus(
        req.params.id,
        req.body.status,
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Order status updated"
            });

        }
    );

};

// Delete
exports.deleteOrder = (req, res) => {

    orderModel.deleteOrder(
        req.params.id,
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Order deleted"
            });

        }
    );

};