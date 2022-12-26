export const BaskedItem = ({
  props,
  removeFromBasked = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) => {
  const { id, name, regularPrice, quantity } = props;
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
        onClick={() => removeFromBasked(id)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
