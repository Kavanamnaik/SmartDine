import "./RelatedRestaurants.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import restaurants from "../../data/restaurant";

function RelatedRestaurants({ currentId }) {
  const navigate = useNavigate();

  const related = restaurants.filter(
    (restaurant) => restaurant.id !== currentId
  );

  return (
    <section className="related-section">

      <h2>You May Also Like ❤️</h2>

      <div className="related-grid">

        {related.slice(0, 3).map((restaurant) => (

          <div className="related-card" key={restaurant.id}>

            <img
              src={restaurant.image}
              alt={restaurant.name}
            />

            <div className="related-info">

              <h3>{restaurant.name}</h3>

              <p>{restaurant.cuisine}</p>

              <div className="related-meta">

                <span>
                  <FaStar />
                  {" "}
                  {restaurant.rating}
                </span>

                <span>{restaurant.price}</span>

              </div>

              <button
                onClick={() =>
                  navigate(`/restaurant/${restaurant.id}`)
                }
              >
                View Restaurant →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RelatedRestaurants;