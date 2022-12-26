export const GoodsItem = ({ props, addToBasked }) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { regularPrice },
    displayAssets: [{ full_background }],
  } = props;

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
          >{`${regularPrice} rub.`}</span>
        </div>
      </div>
    </div>
  );
};
