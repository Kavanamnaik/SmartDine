const bookingModel=require("../models/bookingModel");

// Smart Recommendation + Booking
exports.createBooking=(req,res)=>{

    const{
        user_id,
        restaurant_id,
        booking_date,
        booking_time,
        guests
    }=req.body;

    bookingModel.findBestTable(
        restaurant_id,
        guests,
        (err,tables)=>{

            if(err)
                return res.status(500).json(err);

            if(tables.length===0){

                return res.status(404).json({
                    message:"No table available"
                });

            }

            const table=tables[0];

            bookingModel.createBooking({

                user_id,
                restaurant_id,
                table_id:table.id,
                booking_date,
                booking_time,
                guests,
                status:"pending"

            },(err,result)=>{

                if(err)
                    return res.status(500).json(err);

                bookingModel.updateTableStatus(
                    table.id,
                    "reserved",
                    ()=>{}
                );

                res.status(201).json({

                    message:"Booking Successful",

                    bookingId:result.insertId,

                    recommendedTable:{
                        table_id:table.id,
                        table_number:table.table_number,
                        capacity:table.capacity
                    }

                });

            });

        }

    );

};

// Get All Bookings
exports.getAllBookings=(req,res)=>{

    bookingModel.getAllBookings((err,result)=>{

        if(err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// User Bookings
exports.getUserBookings=(req,res)=>{

    bookingModel.getUserBookings(
        req.params.userId,
        (err,result)=>{

            if(err)
                return res.status(500).json(err);

            res.json(result);

        }
    );

};

// Cancel
exports.cancelBooking=(req,res)=>{

    bookingModel.cancelBooking(
        req.params.id,
        (err)=>{

            if(err)
                return res.status(500).json(err);

            res.json({
                message:"Booking Cancelled"
            });

        }
    );

};

// Update Status
exports.updateBookingStatus=(req,res)=>{

    bookingModel.updateBookingStatus(

        req.params.id,

        req.body.status,

        (err)=>{

            if(err)
                return res.status(500).json(err);

            res.json({
                message:"Status Updated"
            });

        }

    );

};