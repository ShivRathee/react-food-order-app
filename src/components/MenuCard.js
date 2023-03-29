import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
// import { addItem, removeItem } from "../slice/cart";

const MenuCard = ({ menu }) => {
  const { isVeg, name, price, description, imageId, defaultPrice } = menu;
  const [counter, setCounter] = useState(0);
  //   const dispatch = useDispatch();
  //   const onAddItemHandler = (item) => {
  //     dispatch(addItem(item));
  //     setCounter((counter) => counter + 1);
  //   };

  //   const onRemoveItemHandler = (item) => {
  //     dispatch(removeItem(item.id));
  //     setCounter((counter) => counter - 1);
  //   };

  return (
    <div>
      <div>
        <div>
          {/* <div
            className={
              isVeg
                ? "h-4 w-4 border-2 border-green-600 p-[2px] mb-2"
                : "h-4 w-4 border-2 border-red-600 p-[2px] mb-2"
            }
          >
            <div
              className={
                isVeg
                  ? "h-2 w-2 bg-green-600 rounded-full"
                  : "h-2 w-2 bg-red-600 rounded-full"
              }
            ></div>
          </div> */}
          <div>{name}</div>
          <div>₹{price ? price / 100 : defaultPrice / 100}</div>
          <div>{description}</div>
        </div>
        <div>
          <img src={IMG_CDN_URL + imageId} />

          {counter == 0 ? (
            <button onClick={() => onAddItemHandler(menu)}>ADD</button>
          ) : (
            <div>
              <button onClick={() => onRemoveItemHandler(menu)}>-</button>
              <span>{counter}</span>
              <button onClick={() => onAddItemHandler(menu)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
