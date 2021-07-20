import React from "react"
import PropTypes from "prop-types"

function Food({name,picture,rating}) {
  return (
      <div>
        <h3>What the {name}</h3>
        <img src={picture} alt={name} />
        <h4>{rating}/5</h4>
        </div>
  );
}

const foodlist = [
  {
    name:"Coffee",
    id:1,
    picture:"https://www.packaging-gateway.com/wp-content/uploads/sites/2/2021/04/Starbucks.jpg",
    rating: 4
  },
  {
    name:"Tomato",
    id:2,
    picture:"https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg",
    rating: 5
  },
  {
    name:"Sandwich",
    id:3,
    picture:"https://static.toiimg.com/thumb/54714340.cms?width=1200&height=900",
    rating: 1
  },
  {
    name:"Cheese",
    id:4,
    picture:"https://manometcurrent.com/wp-content/uploads/2021/05/Cheese.jpg",
    rating: 3 
  },
]

foodlist.PropTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      {foodlist.map(food => (
        <Food key={food.id} name ={food.name} picture = {food.picture} rating = {food.rating}/>
      ))}
    </div>
  );
}

export default App;
