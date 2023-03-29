import React from "react";

const MenuVegFilter = ({ data, onfilter }) => {
  if (data?.isPureVeg) {
    return (
      <div>
        <span>🌱 Pure Veg</span>
      </div>
    );
  }
  return (
    <div>
      <label>Veg Only</label>
      <label>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => onfilter(e)}
        />
        <div></div>
      </label>
    </div>
  );
};

export default MenuVegFilter;
