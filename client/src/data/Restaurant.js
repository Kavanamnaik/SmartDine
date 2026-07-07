import meghana from "../assets/images/restaurants/meghana.jpg";
import dominos from "../assets/images/restaurants/dominos.jpg";
import burgerking from "../assets/images/restaurants/burgerking.jpg";
import empire from "../assets/images/restaurants/empire.jpg";
import bbq from "../assets/images/restaurants/bbq.jpg";
import ccd from "../assets/images/restaurants/ccd.jpg";
import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";
import gallery7 from "../assets/images/gallery/gallery7.jpg";
import gallery8 from "../assets/images/gallery/gallery8.jpg";

const restaurants = [
  {
    id: 1,
    name: "Meghana Foods",
    image: meghana,
    cuisine: "North Indian • Biryani",
    rating: 4.8,
    location: "Koramangala, Bangalore",
    time: "25 mins",
    price: "₹300 for two",
    description:
      "Meghana Foods is famous for its authentic Hyderabadi biryani and delicious North Indian cuisine.",
    gallery: [
          gallery1,
           gallery2,
           gallery3,
          gallery4,
]
    },
  {
    id: 2,
    name: "Domino's Pizza",
    image: dominos,
    cuisine: "Pizza • Fast Food",
    rating: 4.6,
    location: "Indiranagar, Bangalore",
    time: "20 mins",
    price: "₹500 for two",
    description:
      "Fresh pizzas with cheesy toppings, garlic bread, and delicious desserts.",
  },
  {
    id: 3,
    name: "Burger King",
    image: burgerking,
    cuisine: "Burger • Fast Food",
    rating: 4.5,
    location: "MG Road, Bangalore",
    time: "18 mins",
    price: "₹400 for two",
    description:
      "Flame-grilled burgers, fries, shakes, and combos for every craving.",
  },
  {
    id: 4,
    name: "Empire Restaurant",
    image: empire,
    cuisine: "North Indian",
    rating: 4.7,
    location: "Frazer Town, Bangalore",
    time: "30 mins",
    price: "₹600 for two",
    description:
      "One of Bangalore's iconic restaurants serving kebabs, biryani, and Chinese dishes.",
  },
  {
    id: 5,
    name: "Barbeque Nation",
    image: bbq,
    cuisine: "BBQ • Buffet",
    rating: 4.9,
    location: "JP Nagar, Bangalore",
    time: "35 mins",
    price: "₹1800 for two",
    description:
      "Unlimited buffet with live grills, desserts, and a premium dining experience.",
  },
  {
    id: 6,
    name: "Cafe Coffee Day",
    image: ccd,
    cuisine: "Cafe • Coffee",
    rating: 4.4,
    location: "Church Street, Bangalore",
    time: "15 mins",
    price: "₹450 for two",
    description:
      "Freshly brewed coffee, sandwiches, desserts, and relaxing ambience.",
  },
];

export default restaurants;