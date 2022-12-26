import { useContext } from "react";
import { ShopContext } from "./context";

export const BaskedItem = ({ props }) => {
  const { id, name, regularPrice, quantity } = props;

  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {name} x {quantity} = {regularPrice * quantity || 0} euro
      <button type="button" className="btn" onClick={() => decQuantity(id)}>
        -
      </button>
      <button type="button" className="btn" onClick={() => incQuantity(id)}>
        +
      </button>
      <span
        className="secondary-content"
        style={{ display: "block" }}
        onClick={() => removeFromBasket(id)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
