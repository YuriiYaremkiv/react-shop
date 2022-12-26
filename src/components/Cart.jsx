import { useContext } from "react";
import { ShopContext } from "./context";

export const Cart = () => {
  const { order, handleBaskedShow } = useContext(ShopContext);

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBaskedShow}>
      <i className="material-icons">shopping_cart</i>
      {order ? (
        <span className="cart-quantity">{`  ${order.length} шт.`}</span>
      ) : null}
    </div>
  );
};
