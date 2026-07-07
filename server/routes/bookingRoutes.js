const express=require("express");

const router=express.Router();

const bookingController=require("../controllers/bookingController");

router.post("/",bookingController.createBooking);

router.get("/",bookingController.getAllBookings);

router.get("/user/:userId",bookingController.getUserBookings);

router.put("/:id/cancel",bookingController.cancelBooking);

router.put("/:id/status",bookingController.updateBookingStatus);

module.exports=router;