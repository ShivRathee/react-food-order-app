import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import RestaurantDetailHead from "./RestaurantDetailHead";
import MenuItemsList from "./MenuItemsList";
import OfferList from "./OfferList";
import { useEffect, useState } from "react";

const RestaurantDetail = () => {
  const params = useParams();
  const { resId } = params;
  const restaurant = useRestaurant();
  const [offerList, setOfferList] = useState([]);
  const restaurantData = restaurant?.cards.filter((c) => {
    return (
      c?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  });
  const menuData = restaurant?.cards.filter((c) => {
    return c?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  });
  const offerData = restaurant?.cards.filter((c) => {
    return c?.card?.card?.gridElements?.infoWithStyle?.offers;
  });

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="box">
        {<RestaurantDetailHead data={restaurant.cards[0]?.card?.card?.info} />}
        <div className="d-flex ">
          {offerData[0]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
            (offers, index) => {
              return <OfferList {...offers.info} key={index} />;
            }
          )}
        </div>
        {
          <MenuItemsList
            data={menuData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards}
          />
        }
      </div>
    </div>
  );
};

export default RestaurantDetail;
