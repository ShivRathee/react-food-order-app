import React from "react";
const OfferList = ({
  header,
  couponCode,
  description,
  offerLogo,
  offerTagColor,
}) => {
  return (
    <div className="offer-coupon ">
      <div className="restOffer">
        <div className="headerOffer d-flex">
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${offerLogo}`}
            className="icon"
            alt=""
          />
          <p className="headerOfferP">{header}</p>
        </div>
        {couponCode && (
          <div className="offerCode d-flex">
            <p>{couponCode}</p>
            <p>|</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferList;
