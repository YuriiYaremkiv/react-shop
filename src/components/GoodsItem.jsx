import { useContext } from "react";
import { ShopContext } from "./context";

export const GoodsItem = ({ props }) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { regularPrice },
    displayAssets: [{ full_background }],
  } = props;

  const { addToBasked } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <p>{description}</p>
        <div className="card-action">
          <button
            onClick={() => addToBasked({ id, name, regularPrice })}
            className="btn"
          >
            Купить
          </button>
          <span
            className="right"
            style={{ fontSize: "1.5rem" }}
          >{`${regularPrice} euro`}</span>
        </div>
      </div>
    </div>
  );
};
