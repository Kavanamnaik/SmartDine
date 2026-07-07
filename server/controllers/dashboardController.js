const dashboardModel = require("../models/dashboardModel");

exports.getStats = (req, res) => {
    dashboardModel.getStats((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
};

exports.getRecentOrders = (req, res) => {
    dashboardModel.getRecentOrders((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getRecentBookings = (req, res) => {
    dashboardModel.getRecentBookings((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getTopItems = (req, res) => {
    dashboardModel.getTopItems((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getLeastItems = (req, res) => {
    dashboardModel.getLeastItems((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getRevenue = (req, res) => {
    dashboardModel.getRevenue((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getPayments = (req, res) => {
    dashboardModel.getPayments((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getTables = (req, res) => {
    dashboardModel.getTables((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getBookingSummary = (req, res) => {
    dashboardModel.getBookingSummary((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getDailyRevenue = (req, res) => {
    dashboardModel.getDailyRevenue((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};