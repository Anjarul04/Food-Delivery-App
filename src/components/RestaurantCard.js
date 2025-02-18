import { CDN_URL } from "./utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
    aggregatedDiscountInfo,
  } = resData.info;

  const displayedName = name.length > 22 ? name.slice(0, 22) + "..." : name;

  const displayedCuisines =
    cuisines.length > 2
      ? cuisines.slice(0, 2).join(", ") + "..."
      : cuisines.join(", ");

  return (
    <div className="m-4 p-3 w-[340px] rounded-xl bg-white shadow-lg transition-transform transform hover:scale-[0.95] hover:-translate-y-1">
      <div className="relative">
        <img
          className="rounded-xl w-full h-[200px] object-cover"
          alt="restaurant"
          src={CDN_URL + cloudinaryImageId}
        />
        {aggregatedDiscountInfo?.header && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-lg">
            {aggregatedDiscountInfo?.header} {aggregatedDiscountInfo?.subHeader}
          </div>
        )}
      </div>
      <div className="mt-3">
        <h4 className="font-bold text-lg text-gray-800">{displayedName}</h4>
        <p className="text-gray-600 text-sm">{displayedCuisines}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-semibold">⭐ {avgRating}</span>
          <span className="text-gray-500">{costForTwo}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">⏳ {sla.slaString}</p>
      </div>
    </div>
  );
};
// promoted Restaurant
// input => RestaurantCard and retaurn withPromotedLabel
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h3>promoted</h3>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
