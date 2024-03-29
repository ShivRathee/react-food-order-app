import { IMG_CDN_URL } from "../constants";

const ReasturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="card">
      <div className="dummy-img blink-it">
        <img className="image" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="card-body">
        <h2 className="card-body-title">{name}</h2>
        <p>{cuisines.join(", ")}</p>
      </div>
      <hr />
      <div className="dummy-offer">
        <img
          className="discount"
          src="data:image/png;base64,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"
        />
        <div className="offer">
          {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
        </div>
      </div>
    </div>
  );
};

export default ReasturantCard;
