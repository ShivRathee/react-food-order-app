import React from "react";
import {
  GoStar,
  IoMdAlert,
  CgTimelapse,
  HiOutlineCurrencyRupee,
} from "react-icons/all";

const RestaurantDetailHead = ({ data }) => {
  console.log(data);
  const {
    name,
    cuisines,
    areaName,
    feeDetails,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
  } = data;
  return (
    <div>
      <div className="flex">
        <div className="rest-address">
          <h3 className="rest-name">{name}</h3>
          <p className="rest-detail">{cuisines.join(", ")}</p>
          <p className="rest-detail">
            {areaName + ", " + sla.lastMileTravelString}
          </p>
        </div>
        <div className="rest-ratings">
          <span>
            <span className="avg-rating">
              <GoStar className="star" />
              {avgRatingString + " "}
            </span>
            <span className="total-rating">{totalRatingsString}</span>
          </span>
        </div>
      </div>
      <div className="d-flex mtop">
        <IoMdAlert className="icon-exc" />
        <p className="rest-detail mt">{feeDetails.message}</p>
      </div>
      <hr className="hr-tag" />
      <div className="d-flex head timeCost">
        <div className="d-flex ">
          <CgTimelapse className="icon" />
          <p className="message">{sla.slaString}</p>
        </div>
        <div className="d-flex ml">
          <HiOutlineCurrencyRupee className="icon" />
          <p className="message"> {costForTwoMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailHead;
