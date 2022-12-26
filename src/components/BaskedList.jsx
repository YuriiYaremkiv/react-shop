import { useContext } from "react";
import { ShopContext } from "./context";

import { BaskedItem } from "./BaskedItem";

export const BaskedList = () => {
  const { order, handleBaskedShow } = useContext(ShopContext);

  const totalPrice = order.reduce((acc, item) => {
    acc += item.regularPrice * item.quantity;
    return acc;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина{" "}
        <span onClick={handleBaskedShow} style={{ cursor: "pointer" }}>
          <i className="material-icons basket-close">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => {
          return <BaskedItem key={item.id} props={item} />;
        })
      ) : (
        <li className="collection-item">Корзина пустая</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} euro
      </li>
      <li className="collection-item active">
        <button className="btn-small">оформить</button>
      </li>
    </ul>
  );
};
