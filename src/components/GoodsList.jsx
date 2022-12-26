import { useContext } from "react";
import { ShopContext } from "./context";

import { GoodsItem } from "./GoodsItem";

export const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => {
        return <GoodsItem key={good.mainId} props={good} />;
      })}
    </div>
  );
};
