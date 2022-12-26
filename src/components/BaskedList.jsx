import { BaskedItem } from "./BaskedItem";

export const BaskedList = ({
  props = [],
  handleBaskedShow = Function.prototype,
  removeFromBasked = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) => {
  const totalPrice = props.reduce((acc, item) => {
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
      {props.length ? (
        props.map((item) => {
          return (
            <BaskedItem
              key={item.id}
              props={item}
              removeFromBasked={removeFromBasked}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          );
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
