import { Row } from "antd";
import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox/FoodBox";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
import Search from "./components/Search/Search";



function App() {

  const [foodsList, setFood] = useState(foods)

  const search = (text) =>{
    console.log("hola")
    const searched = foodsList.filter(food => {
      return food.name.toLowerCase().includes(text.toLowerCase())
    })
    setFood(searched)
  }


  return (
    <div className="App">
      <h1>Food list</h1>
      <AddFoodForm foodsList={foodsList} setFood={setFood}/>
      <Search search={search}/>
      <Row> 
        {foodsList.map(food => {
          return(
              <FoodBox food={food}/> 
          )
        })}
      </Row>
    </div>
  );
}

export default App;
