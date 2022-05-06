// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';
import FoodDropDown from './FoodDropDown';
import DrinkDropDown from './DrinkDropDown';
import SideItemDropDown from './SideItemDropdown';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['no mustard', 'extra sault']);
  const [formInstruction, setFormInstruction] = useState('');
  const [orderName, setOrderName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, formInstruction]);
  }

  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />
      <div>Order for {orderName} </div>
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      <InstructionsForm handleSubmit={handleSubmit} setFormInstruction={setFormInstruction} />
      <InstructionsList instructions={instructions} />
      <FoodDropDown setFoodId={setFoodId} />
      <DrinkDropDown setDrinkId={setDrinkId} />
      <SideItemDropDown setSideId={setSideId} />
    </div>
  );
}

export default App;

//updating to push
