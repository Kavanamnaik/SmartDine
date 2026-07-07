import "./Restaurant.css";
import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import restaurants from "../../data/restaurant";

function Restaurant() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return <h2>Restaurant Not Found</h2>;
  }

  return (
    <section className="restaurant-page">

      <div className="restaurant-banner">

        <img src={restaurant.image} alt={restaurant.name} />

        <div className="banner-overlay">

          <span className="rating">
            <FaStar /> {restaurant.rating}
          </span>

          <h1>{restaurant.name}</h1>

          <p>{restaurant.cuisine}</p>

          <div className="restaurant-meta">

            <span>
              <FaMapMarkerAlt />
              {restaurant.location}
            </span>

            <span>
              <FaClock />
              {restaurant.time}
            </span>

          </div>

          <button>Reserve Table</button>

        </div>

      </div>
      <h2 className="section-title">Gallery</h2>

<div className="gallery">

  {restaurant.gallery.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${restaurant.name} ${index + 1}`}
    />
  ))}

</div>

      <div className="restaurant-content">

        <h2>About Restaurant</h2>

        <p>{restaurant.description}</p>

      </div>

    </section>
  );
}

export default Restaurant;