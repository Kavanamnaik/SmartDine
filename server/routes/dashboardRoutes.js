console.log("✅ dashboardRoutes loaded");
const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/stats", dashboardController.getStats);

router.get("/recent-orders", dashboardController.getRecentOrders);

router.get("/recent-bookings", dashboardController.getRecentBookings);

router.get("/top-items", dashboardController.getTopItems);

router.get("/least-items", dashboardController.getLeastItems);

router.get("/revenue", dashboardController.getRevenue);

router.get("/payments", dashboardController.getPayments);

router.get("/tables", dashboardController.getTables);

router.get("/bookings", dashboardController.getBookingSummary);

router.get("/daily-revenue", dashboardController.getDailyRevenue);

module.exports = router;