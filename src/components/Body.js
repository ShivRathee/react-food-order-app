import { restaurnatList } from "../constants";
import ReasturantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
      <div className="search-restro">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurant and food"
          value=""
        />
        <button className="btn-search">Search</button>
      </div>
      <div className="restaurnat-list">
        {restaurnatList.map((restaurant) => {
          return (
            <ReasturantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
