import { GoodsItem } from "./GoodsItem";

export const GoodsList = ({ props = [], addToBasked = Function.prototype }) => {
  const goods = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => {
        return (
          <GoodsItem key={good.mainId} props={good} addToBasked={addToBasked} />
        );
      })}
    </div>
  );
};
