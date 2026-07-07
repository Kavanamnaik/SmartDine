import "./Hero.css";
import { motion } from "framer-motion";
import { FaSearch, FaCalendarAlt, FaShoppingBag } from "react-icons/fa";
import heroFood from "../../assets/images/hero-food.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <motion.div
          className="tag"
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
        >
          🔥 Delicious food, delightful experience
        </motion.div>

        <motion.h1
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
        >
          Discover
          <br />
          <span>Premium Dining</span>
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.4}}
        >
          Book tables, order food and explore the best restaurants around you.
        </motion.p>

        <motion.div
          className="search-box"
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.5}}
        >
          <FaSearch />

          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
          />

          <button>
            <FaSearch/>
          </button>

        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.6}}
        >

          <button className="book">

            <FaCalendarAlt/>

            Book Table

          </button>

          <button className="order">

            <FaShoppingBag/>

            Order Food

          </button>

        </motion.div>

      </div>

      <motion.div
        className="hero-right"
        animate={{
  y:[0,-20,0],
  rotate:[0,2,0,-2,0]
}}

transition={{
  duration:6,
  repeat:Infinity,
  ease:"easeInOut"
}}
      >

        <img
          src={heroFood}
          alt="Food"
        />

        <div className="card card1">
          ⭐ <strong>4.9</strong>
          <span>Average Rating</span>
        </div>

        <div className="card card2">
          🍽 <strong>500+</strong>
          <span>Restaurants</span>
        </div>

        <div className="card card3">
          👨‍🍳 <strong>10K+</strong>
          <span>Happy Customers</span>
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;