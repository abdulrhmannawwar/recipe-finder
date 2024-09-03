import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import MealCard from './components/MealCard';

function App() {
  const [inputText, setInputText] = useState('');
  const [recipe, setRecipe] = useState('');
  const [array, setArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (recipe) {
        let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&q=${recipe}&app_id=3ffbe571&app_key=3ce0d3080b7f304f07a2f01bc3095c0e%09`);
        let data = await response.json();
        setArray(data.hits);
      }
    }
    fetchData();
  }, [recipe]);
  return (
    <>
      <Header />
      <div className="contentContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder='Search for a recipe'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={() => setRecipe(inputText)}>Search</button>
        </div>
        <div className="cardsContainer">
          {array.map((item,i) => {
            return <MealCard
            key={i}
            name = {item.recipe.label}
            src ={item.recipe.image}
            ingredients = {item.recipe.ingredientLines}
            />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
