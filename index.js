const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
const restaurants = [{ name: "Uchi", style: "Asian", price: "$$$$" }];

// Routes go here

//add restaurant
app.post("/add_restaurant", (req, res) => {
  const newRestaurant = req.body;
  restaurants.push(newRestaurant);
  res.send(restaurants);

  console.log(restaurants);
});

//update restaurant
app.put("/update_restaurant", (req, res) => {
  const restaurantUpdate = req.body;
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurantUpdate.name === restaurants[i].name) {
      restaurants.splice(i, 1, restaurantUpdate);
    } else {
    }
  }
  res.send(restaurants);
  console.log(restaurants);
});

//delete restaurant
app.post("/delete_restaurant", (req, res) => {
  const filteredRestaurants = restaurants.filter(
    (resta) => resta.name !== req.body.name
  );
  restaurants = filteredRestaurants;
  res.send(restaurants);
  //const deletedRestaurant = req.body;
  //for (i = 0, i < restaurants.length; i++; ) {
  //  if (deletedRestaurant.name === restaurants[i].name) {
  //    restaurants.splice(i, 1);
  //  } else {
  //  }
  //}
  //res.send(restaurants);
  //console.log(restaurants);
});

//list restaurant
app.get("/list_restaurants", (req, res) => {
  res.send(restaurants);

  let counter = 0;
  while (counter < restaurants.length) {
    console.log(restaurants[counter].name);
    counter++;
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
