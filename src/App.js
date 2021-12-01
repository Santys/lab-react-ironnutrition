import { Row } from "antd";
import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox/FoodBox";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";

function App() {

  const [foodsList, setFood] = useState(foods)

  return (
    <div className="App">
      <h1>Food list</h1>
      <AddFoodForm foodsList={foodsList} setFood={setFood}/>
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
