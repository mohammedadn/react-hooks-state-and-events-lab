import React, {useState} from "react";

function Item({ name , category }) {
  
    const [isInCart, setIsInCart] = useState(false);

      const toogleCart = () => {
        setIsInCart(prevIsInCart => !prevIsInCart)
      };

      const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

      const liClassName = isInCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      {name}
      <span className="category">{category}</span>
      <button onClick={toogleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;