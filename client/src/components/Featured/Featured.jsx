import "./Featured.css";
import { FaHeart, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import restaurants from "../../data/restaurant";
 

 

 

function Featured() {
  const navigate = useNavigate();
  return (
    <section className="featured">

      <h2>Featured Restaurants</h2>

      <p>Discover the highest rated restaurants near you.</p>

      <div className="restaurant-grid">

        {restaurants.map((restaurant, index) => (

          <div className="restaurant-card" key={index}>

          <div className="image-container">

    <img
        src={restaurant.image}
        alt={restaurant.name}
    />

    <div className="rating">
        ⭐ {restaurant.rating}
    </div>

    <div className="wishlist">
        <FaHeart />
    </div>

    <div className="offer">
        20% OFF
    </div>

</div>

<div className="restaurant-info">

    <h3>{restaurant.name}</h3>

    <p>{restaurant.cuisine}</p>

    <div className="location">

        <FaMapMarkerAlt />

        Bangalore

    </div>

    <div className="details">

        <span>{restaurant.price}</span>

        <span>

            <FaClock />

            {restaurant.time}

        </span>

    </div>

   <button
    onClick={() => navigate(`/restaurant/${restaurant.id}`)}
>
    Reserve Table →
</button>
</div>
          </div>

        ))}

      </div>

    </section>
  );
}

export default Featured;