import { Input } from "antd";
import { useState } from 'react';
import './AddFoodForm.css';

// https://i.imgur.com/RqUR3sE.png

const AddFoodForm = (props) => {

    const {foodsList, setFood, setNotFilteredFoodsList} = props

    const [inputName, setInputName] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [inputCalories, setInputCalories] = useState(0)
    const [inputServings, setInputServings] = useState(0)

    const addFood = () => {
        const foodListCopy = [...foodsList]
        foodListCopy.push({
            name: inputName,
            image: inputImage,
            calories: inputCalories,
            servings: inputServings,
        });
        setFood(foodListCopy)
        setNotFilteredFoodsList(foodListCopy)
    }

    return (
        <div className="AddFoodForm">
            <p>Name</p>
            <Input type="text" onChange={(evt) => setInputName(evt.target.value)} />
            <p>Image</p>
            <Input type="text" onChange={(evt) => setInputImage(evt.target.value)} />
            <p>Calories</p>
            <Input type="number" onChange={(evt) => setInputCalories(evt.target.value)}/>
            <p>Servings</p>
            <Input type="number" onChange={(evt) => setInputServings(evt.target.value)} />
            <button onClick={() => addFood()}>Add food</button>
        </div>
    );
}

export default AddFoodForm;