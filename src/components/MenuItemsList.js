import React, { useState } from "react";
import ItemCategory from "./ItemCategory";
import MenuVegFilter from "./MenuVegFilter";
import { TiLocation } from "react-icons/all";

const MenuItemsList = ({ data }) => {
  const [isVegFilter, setIsVegFilter] = useState(false);
  const filterHandler = (e) => {
    setIsVegFilter(e.target.checked);
  };
  return (
    <div>
      {data?.map((card, i) => {
        const obj = card?.card?.card;
        if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
        ) {
          return (
            <MenuVegFilter
              key={"filter_" + i}
              data={obj}
              onFilter={filterHandler}
            />
          );
        } else if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return (
            <ItemCategory
              key={"itemCategory_" + i}
              data={obj}
              isVeg={isVegFilter}
            />
          );
        }
      })}
    </div>
  );
};

export default MenuItemsList;
