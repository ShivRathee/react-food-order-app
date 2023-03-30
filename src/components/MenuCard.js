import { IMG_CDN_URL } from "../constants";

const MenuCard = ({ menu }) => {
  const { isVeg, name, price, description, imageId, defaultPrice } = menu;

  return (
    <div>
      <div className="menuCard-container">
        <div className="menuCard-details">
          <h3 className="menuCard-name">{name}</h3>
          <div className="menuCard-price">
            ₹{price ? price / 100 : defaultPrice / 100}
          </div>
          <div className="menuCard-desc">{description}</div>
        </div>
        <div className="menuCard-img">
          <img className="menuCard-img" src={IMG_CDN_URL + imageId} />
        </div>
      </div>
      <div className="menuCard-divider"></div>
    </div>
  );
};

export default MenuCard;
