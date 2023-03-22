import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantDetail = () => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantDetail();
  }, []);

  async function getRestaurantDetail() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0583105&lng=72.637183&restaurantId=640806&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  const params = useParams();
  return (
    <div>
      <div>
        <h1>Restaurant Detail : {params.id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
