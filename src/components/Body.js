import { useState } from "react";
import { restaurnatList } from "../constants";
import ReasturantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput) {
  console.log(restaurnatList.length);
  if (searchInput.length > 0) {
    console.log("no");
    return restaurnatList.filter((restaurant) =>
      restaurant?.data?.name.toLocaleLowerCase().includes(searchInput)
    );
  } else {
    console.log("yes");
    return restaurnatList;
  }
}

const Body = () => {
  // const searchTxt = "KFC";

  // searchText is a local state variable
  const [restaurants, setRestaurants] = useState(restaurnatList);
  const [searchInput, setSearchInput] = useState("");

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
            const data = filterData(searchInput);
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
