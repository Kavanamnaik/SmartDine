import biryani from "../../assets/images/categories/biryani.png";
import dosa from "../../assets/images/categories/dosa.png";
import pizza from "../../assets/images/categories/pizza.png";
import burger from "../../assets/images/categories/burger.png";
import momos from "../../assets/images/categories/momos.png";
import chinese from "../../assets/images/categories/chinese.png";
import healthy from "../../assets/images/categories/healthy.png";
import dessert from "../../assets/images/categories/dessert.png";
import "./Categories.css";
const categories = [
  { image: biryani, name: "North Indian" },
  { image: dosa, name: "South Indian" },
  { image: pizza, name: "Pizza" },
  { image: burger, name: "Burgers" },
  { image: momos, name: "Momos" },
  { image: chinese, name: "Chinese" },
  { image: healthy, name: "Healthy" },
  { image: dessert, name: "Desserts" }
];
function Categories() {
  return (
    <section className="categories">

      <h2>Popular Categories</h2>

      <p>Discover your favourite cuisine</p>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div className="category-card" key={index}>

           <div className="food-image">
    <img src={item.image} alt={item.name} />
</div>

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;