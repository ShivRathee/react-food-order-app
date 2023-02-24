import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";

const Title = () => (
  <img src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" />
);

const HeaderComponent = () => (
  <div className="header">
    <nav>
      <Title></Title>
      <div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  </div>
);

const restaurnatList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "671128",
      name: "No Oil No Boil Restaurant",
      uuid: "91b67a9b-e58c-4d29-b243-e3c1fec3c2b3",
      city: "8",
      area: "Pallikaranai",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "364825c559fd3a0d335c019d26f71867",
      cuisines: ["South Indian", "Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: "46 MINS",
      lastMileTravel: 8.699999809265137,
      slugs: {
        restaurant: "no-oil-no-boil-restaurant-pallikaranai-pallikaranai",
        city: "chennai",
      },
      cityState: "8",
      address:
        "186, Chandran Complex, Velachery Rd, Pallikaranai, Chennai, Tamil Nadu 600100, India",
      locality: "Velachery Rd",
      parentId: 402188,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5945549~p=1~eid=00000186-7355-fc1f-1ca2-f6c000990148",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "671128",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 8.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "199089",
      name: "SS Hyderabad Briyani",
      uuid: "963d9f8f-9504-457a-92e9-50d442945f3f",
      city: "8",
      area: "Saidapet",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "kwtzaac7zw3eskwulaj5",
      cuisines: ["Biryani", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: "46 MINS",
      lastMileTravel: 9.800000190734863,
      slugs: {
        restaurant: "ss-hyderabad-biryani-poonamallee-poonamallee",
        city: "chennai",
      },
      cityState: "8",
      address: "12 Jeenis Road, Saidapet, Chennai - 600015",
      locality: "Jeenis Road",
      parentId: 4824,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "199089",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 9.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "598128",
      name: "Fathima Biriyani's",
      uuid: "b8ed346a-7d37-4d23-9cdf-5dd3601cd27b",
      city: "8",
      area: "Velachery",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "vqyh3tv14kqf4ddzo96m",
      cuisines: ["Biryani", "Chinese", "Fast Food"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "fathima-biriyani's-velachery-velachery",
        city: "chennai",
      },
      cityState: "8",
      address:
        "NO.17, BHAVANI STREET, BHARATHI NAGAR,  THARAMANI, chennai - 600113",
      locality: "Bhavani Street",
      parentId: 357416,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "598128",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "653382",
      name: "Armaani Biryani",
      uuid: "117c05ca-c13b-438e-b571-2df3f69f13f8",
      city: "8",
      area: "Guindy",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "fda3a8cc0117ba67df166510d4942e18",
      cuisines: ["Biryani", "Seafood"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 51,
      minDeliveryTime: 51,
      maxDeliveryTime: 51,
      slaString: "51 MINS",
      lastMileTravel: 8.5,
      slugs: {
        restaurant: "armani-briyani-guindy-guindy",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Plot No.M4,TVK Industrial Estate,AKN Plant ( Haiku ),Guindy,Chennai-600032, Chennai Corporation Ward - 170, Chennai Corp. Ward - 170, Chennai, Tamil Nadu - 600032",
      locality: "AKN Plant",
      parentId: 11927,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5856872~p=4~eid=00000186-7355-fc1f-1ca2-f6c10099045d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "653382",
        deliveryTime: 51,
        minDeliveryTime: 51,
        maxDeliveryTime: 51,
        lastMileTravel: 8.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "14670",
      name: "Salem RR Biriyani Unavagam",
      uuid: "dc8194a8-8bd7-4f69-a0ff-78ccc234a1ec",
      city: "8",
      area: "Ganapathi Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lmaqiwy39dleyfadfmnn",
      cuisines: ["Biryani", "Chettinad", "Tandoor", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "salem-rr-biryani-unvagam-velachery-velachery",
        city: "chennai",
      },
      cityState: "8",
      address: "166,100 Feet Road, Ganapathi Nagar, Velachery, Chennai",
      locality: "Ganapathi Nagar",
      parentId: 176137,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW-XL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off upto ₹105 | Use TRYNEW-XL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW-XL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off upto ₹105 | Use TRYNEW-XL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "14670",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "654008",
      name: "Kaaraikudi Chettinad Restaurant",
      uuid: "23e79e8e-2276-4783-9ab8-50f985e3f3cb",
      city: "8",
      area: "Velachery",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "fca093fa246fbccd7b3074d71b11ab0f",
      cuisines: ["South Indian", "Sweets", "Beverages"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "kaaraikudi-chettinad-restaurant-velachery-velachery-2",
        city: "chennai",
      },
      cityState: "8",
      address:
        "F-46, 1ST FLOOR, PHOENIX MARKET CITY,  NO.142, VELACHERY MAIN ROAD,  VELACHERY, CHENNAI, Chennai, Tamil Nadu-600042",
      locality: "Phoenix Market",
      parentId: 17444,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5968286~p=7~eid=00000186-7355-fc1f-1ca2-f6c20099071e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "654008",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "239924",
      name: "Anburaj Resturant Briyani & Fast Food",
      uuid: "f5222279-a135-4cba-b623-4e8218b343e2",
      city: "8",
      area: "TEYNAMPET",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "hdatwmjnajz1htglkw7o",
      cuisines: ["Biryani", "North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 10.699999809265137,
      slugs: {
        restaurant: "anburaj-resturant-briyani-&-fast-food-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address: "NO 2/219 THIYAGARAYA SALAI TEYNAMPET",
      locality: "T Nagar",
      parentId: 33059,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 8400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8400,
        message: "",
        title: "Delivery Charge",
        amount: "8400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "10.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "239924",
        deliveryTime: 49,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 10.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

const ReasturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="card">
      <div className="dummy-img blink-it">
        <img
          className="image"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="card-body">
        <h2 className="card-body-title">{name}</h2>
        <p>{cuisines.join(", ")}</p>
      </div>
      <hr />
      <div className="dummy-offer">
        <img
          className="discount"
          src="data:image/png;base64,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"
        />
        <div className="offer">
          {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurnat-list">
      {restaurnatList.map((restaurant) => {
        return <ReasturantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <a>
        <img
          width="142"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
        />
      </a>

      <ul className="social-handle">
        <li>
          <i className="bi bi-facebook"></i>
        </li>
        <li>
          <i className="bi bi-twitter"></i>
        </li>
        <li>
          <i className="bi bi-github"></i>
        </li>
        <li>
          <i className="bi bi-instagram"></i>
        </li>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
