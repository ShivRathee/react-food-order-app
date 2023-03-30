import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/all";
import MenuCard from "./MenuCard";

const ItemCategory = ({ data, isVeg }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { itemCards, title } = data;

  const toggleSection = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div>
      <div
        className="menuCard-titleHeader d-flex"
        role={"button"}
        onClick={toggleSection}
      >
        <div className="menuCard-Header">
          {title + " (" + itemCards.length + ")"}
        </div>
        {isOpen ? (
          <div className="arrow">
            <BiChevronUp />
          </div>
        ) : (
          <div className="arrow">
            <BiChevronDown />
          </div>
        )}
      </div>
      {isOpen && (
        <div>
          {itemCards.map((c, i) => {
            if (isVeg) {
              if (!c.card.info.isVeg) {
                return;
              }
            }
            return <MenuCard key={"menuCard_" + i} menu={c.card.info} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
