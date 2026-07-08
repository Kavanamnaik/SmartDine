import { useState } from "react";
import "./BookingWidget.css";

import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

function BookingWidget({ restaurant }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="booking-card">

        <div className="booking-header">
          <h2>🍽 Reserve Your Table</h2>

          <h3>{restaurant.name}</h3>

          <p>
            ⭐ {restaurant.rating} • {restaurant.location}
          </p>
        </div>

        <div className="booking-form">

          <div className="input-group">
            <label>
              <FaCalendarAlt /> Date
            </label>

            <input type="date" />
          </div>

          <div className="input-group">
            <label>
              <FaClock /> Time
            </label>

            <select>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              <FaUsers /> Guests
            </label>

            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              <MdCelebration /> Occasion
            </label>

            <select>
              <option>Casual Dining</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Family Dinner</option>
              <option>Business Meeting</option>
            </select>
          </div>

          <div className="input-group full-width">
            <label>Special Request</label>

            <textarea
              rows="4"
              placeholder="Window seat, Birthday decoration..."
            ></textarea>
          </div>

          <div className="booking-price">
            <p>Average Cost</p>

            <h3>{restaurant.price}</h3>
          </div>

          <button
            className="reserve-btn"
            onClick={() => setShowPopup(true)}
          >
            Reserve Now 🚀
          </button>

        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">

          <div className="popup">

            <div className="success-icon">
              ✅
            </div>

            <h2>Booking Confirmed!</h2>

            <p>Your reservation has been successfully placed.</p>

            <div className="booking-details">

              <p><strong>Restaurant:</strong> {restaurant.name}</p>

              <p><strong>Location:</strong> {restaurant.location}</p>

              <p><strong>Booking ID:</strong> SD{Math.floor(Math.random() * 100000)}</p>

            </div>

            <button
              onClick={() => setShowPopup(false)}
            >
              Done
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default BookingWidget;