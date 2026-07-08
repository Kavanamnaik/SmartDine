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
import biryani from "../assets/images/dishes/biryani.jpg";
import pizza from "../assets/images/dishes/pizza.jpg";
import burger from "../assets/images/dishes/burger.jpg";
import coffee from "../assets/images/dishes/coffee.jpg";
import dosa from "../assets/images/dishes/dosa.jpg";
import dessert from "../assets/images/dishes/dessert.jpg";

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
],
dishes: [
  {
    name: "Chicken Biryani",
    image: biryani,
    price: "₹299",
    rating: 4.9
  },
  {
    name: "Masala Dosa",
    image: dosa,
    price: "₹149",
    rating: 4.7
  },
  {
    name: "Gulab Jamun",
    image: dessert,
    price: "₹99",
    rating: 4.8
  }
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
  description: "Fresh pizzas...",

  gallery: [
    gallery5,
    gallery6,
    gallery7,
    gallery8
  ],

  dishes: [
    {
      name: "Farmhouse Pizza",
      image: pizza,
      price: "₹399",
      rating: 4.8
    },
    {
      name: "Garlic Bread",
      image: dessert,
      price: "₹159",
      rating: 4.6
    },
    {
      name: "Cold Coffee",
      image: coffee,
      price: "₹129",
      rating: 4.7
    }
  ]
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
    "Burger King serves flame-grilled burgers, crispy fries, delicious desserts, and refreshing beverages for every craving.",

  gallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4
  ],

  dishes: [
    {
      name: "Whopper Burger",
      image: burger,
      price: "₹249",
      rating: 4.8
    },
    {
      name: "French Fries",
      image: burger,
      price: "₹129",
      rating: 4.6
    },
    {
      name: "Chocolate Shake",
      image: coffee,
      price: "₹179",
      rating: 4.7
    }
  ]
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
    "Empire Restaurant is well known for kebabs, shawarma, biryani, Chinese dishes, and late-night dining.",

  gallery: [
    gallery5,
    gallery6,
    gallery7,
    gallery8
  ],

  dishes: [
    {
      name: "Chicken Shawarma",
      image: biryani,
      price: "₹199",
      rating: 4.8
    },
    {
      name: "Chicken Kebab",
      image: biryani,
      price: "₹249",
      rating: 4.7
    },
    {
      name: "Falooda",
      image: dessert,
      price: "₹149",
      rating: 4.6
    }
  ]
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
    "Enjoy unlimited live grills, premium buffet, desserts, and an unforgettable dining experience.",

  gallery: [
    gallery1,
    gallery5,
    gallery3,
    gallery7
  ],

  dishes: [
    {
      name: "Grilled Chicken",
      image: biryani,
      price: "₹499",
      rating: 4.9
    },
    {
      name: "Paneer Tikka",
      image: dosa,
      price: "₹299",
      rating: 4.8
    },
    {
      name: "Ice Cream",
      image: dessert,
      price: "₹199",
      rating: 4.7
    }
  ]
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
    "Cafe Coffee Day offers freshly brewed coffee, sandwiches, pastries, desserts, and a relaxing atmosphere.",

  gallery: [
    gallery2,
    gallery4,
    gallery6,
    gallery8
  ],

  dishes: [
    {
      name: "Cold Coffee",
      image: coffee,
      price: "₹179",
      rating: 4.8
    },
    {
      name: "Chocolate Brownie",
      image: dessert,
      price: "₹149",
      rating: 4.7
    },
    {
      name: "Veg Sandwich",
      image: burger,
      price: "₹199",
      rating: 4.6
    }
  ]
}
];


export default restaurants;