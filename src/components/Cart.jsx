export const Cart = (props) => {
  const { quantity = 0, handleBaskedShow = Function.prototype } = props;

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBaskedShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className="cart-quantity">{`  ${quantity} шт.`}</span>
      ) : null}
    </div>
  );
};
