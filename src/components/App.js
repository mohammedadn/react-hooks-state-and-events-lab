import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // Define state variable for mode
   const[isDarkMode, setIsDarkMode] = useState (false);
    const toggleMode = () => {
      setIsDarkMode(prevMode => !prevMode);
    };

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const classApp = isDarkMode ? "App dark" : "App light" ;

  return (
    <div className={classApp}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;