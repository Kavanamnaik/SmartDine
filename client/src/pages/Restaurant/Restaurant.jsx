import "./Restaurant.css";
import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import restaurants from "../../data/restaurant";
import reviews from "../../data/reviews";
import BookingWidget from "../../components/BookingWidget/BookingWidget";
import RelatedRestaurants from "../../components/RelatedRestaurants/RelatedRestaurants";
function Restaurant() {
 const { id } = useParams();

console.log("ID:", id);

const restaurant = restaurants.find(
  (item) => item.id === Number(id)
);
const restaurantReviews = reviews[id] || [];
console.log("Reviews:", restaurantReviews);
console.log("Restaurant:", restaurant);

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
      <div className="restaurant-content">

        <h2>About Restaurant</h2>

        <p>{restaurant.description}</p>

      </div>
      <h2 className="section-title">Gallery</h2>

<div className="gallery">

  {restaurant.gallery?.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${restaurant.name} ${index + 1}`}
    />
  ))}

</div>
<h2 className="section-title">Popular Dishes</h2>

<div className="dish-grid">
 {restaurant.dishes?.map((dish, index) => (
    <div className="dish-card" key={index}>
      <img src={dish.image} alt={dish.name} />

      <div className="dish-info">
        <h3>{dish.name}</h3>

        <p>⭐ {dish.rating}</p>

        <span>{dish.price}</span>

        <button>Add</button>
      </div>
    </div>
  ))}
</div>
<h2 className="section-title">Customer Reviews</h2>

<div className="reviews">

  {restaurantReviews.map((review, index) => (

    <div className="review-card" key={index}>

      <div className="review-header">

        <div className="avatar">
          {review.name.charAt(0)}
        </div>

        <div>

          <h4>{review.name}</h4>

          <span>{review.date}</span>

        </div>

      </div>

      <p className="stars">
        {"⭐".repeat(review.rating)}
      </p>

      <p>{review.comment}</p>

    </div>

  ))}

</div>
<BookingWidget restaurant={restaurant} />
<RelatedRestaurants currentId={restaurant.id} />
      

    </section>
  );
}

export default Restaurant;