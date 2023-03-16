import { useEffect, useState } from "react";
import { restaurnatList } from "../constants";
import ReasturantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
}

const Body = () => {
  // const searchTxt = "KFC";

  // searchText is a local state variable
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // empty dependency array => once after render
  // dep array[searchInput] => once after initial render + everytime after render (my searchInput changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-restro">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurant and food"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="btn-search"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurnat-list">
        {restaurants.map((restaurant) => {
          return (
            <ReasturantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
