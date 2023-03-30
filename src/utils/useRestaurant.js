import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const result = await fetch(FETCH_MENU_URL + id);
    console.log(result);

    const data = await result?.json();
    setRestaurant(data?.data);
  };
  console.log(restaurant);
  return restaurant;
};

export default useRestaurant;
