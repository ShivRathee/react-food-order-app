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
      <div className="vegOnly ">
        <label>Veg Only</label>
        <label>
          <input
            type="checkbox"
            value=""
            className="checkbox"
            onChange={(e) => onfilter(e)}
          />
          <div></div>
        </label>
      </div>
      <div className="menuCard-divider"></div>
    </div>
  );
};

export default MenuVegFilter;
